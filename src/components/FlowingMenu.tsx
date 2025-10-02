
"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { gsap } from 'gsap';

interface MenuItemProps {
  link: string;
  title: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden border-t-2 border-neutral-800">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, title, image }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);
  const enterAnimation = useRef<gsap.core.Timeline | null>(null);
  const leaveAnimation = useRef<gsap.core.Timeline | null>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  const animationDefaults = { duration: 0.1, ease: 'expo' };

 
  useEffect(() => {
    return () => {
      enterAnimation.current?.kill();
      leaveAnimation.current?.kill();
      marqueeTween.current?.kill();
    };
  }, []);

  const findClosestEdge = (mouseY: number, height: number): 'top' | 'bottom' => {
    return mouseY < height / 2 ? 'top' : 'bottom';
  };
  
  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    leaveAnimation.current?.kill();
    marqueeTween.current?.kill();
    
    const rect = itemRef.current!.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientY - rect.top, rect.height);
    
    enterAnimation.current = gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%', opacity: 1 })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { 
        y: '0%',
        onComplete: () => {
          const contentEl = marqueeContentRef.current;
          if (contentEl) {
            const contentWidth = contentEl.getBoundingClientRect().width / 2;
            const speed = 80;
            const dynamicDuration = contentWidth / speed;

            marqueeTween.current = gsap.fromTo(contentEl, 
              { x: 0 },
              { x: -contentWidth, duration: dynamicDuration, ease: 'none', repeat: -1 }
            );
          }
        }
      });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    enterAnimation.current?.kill();
    marqueeTween.current?.kill();

    const rect = itemRef.current!.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientY - rect.top, rect.height);

    leaveAnimation.current = gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .set(marqueeContentRef.current, { x: 0 });
  };

  const repeatedMarqueeContent = useMemo(() => {
    return Array.from({ length: 2 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-[#060010] uppercase font-semibold text-[4vh] leading-[1.2] px-4 whitespace-nowrap">{title}</span>
        <div
          className="w-[15vw] h-[7vh] mx-[2vw] rounded-full bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [title, image]);

  return (
    <div className="flex-1 relative overflow-hidden text-center border-b-2 border-neutral-800" ref={itemRef}>
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[5vh] transition-colors duration-300 hover:text-transparent"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white opacity-0"
        ref={marqueeRef}
        style={{ transform: 'translateY(101%)' }}
      >
        <div className="h-full w-max flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-auto" ref={marqueeContentRef}>
            {repeatedMarqueeContent}
            {repeatedMarqueeContent} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;