import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-sans)"],
      },
      
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;