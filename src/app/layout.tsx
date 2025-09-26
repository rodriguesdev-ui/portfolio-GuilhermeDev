import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StaggeredMenu from "@/components/StaggeredMenu";
import logodev from "@/app/images/logoRodriguesdev.png";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Rodrigues Dev",
  description: "Portfolio Rodrigues Dev",
};

const menuItems = [
  { label: "Home", ariaLabel: "Ir para a página inicial", link: "/" },
  { label: "Projetos", ariaLabel: "Ver meus projetos", link: "/projects" },
  { label: "Sobre", ariaLabel: "Saber mais sobre mim", link: "/about" },
  { label: "Contato", ariaLabel: "Entrar em contato", link: "/contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/seu-usuario" },
  { label: "LinkedIn", link: "https://linkedin.com/in/seu-usuario" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body
        className={`${interSans.variable} font-sans antialiased bg-black text-white h-full`}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#1a1a1a"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl={logodev.src}
          accentColor="#5227FF"
        />

        {children}
      </body>
    </html>
  );
}
