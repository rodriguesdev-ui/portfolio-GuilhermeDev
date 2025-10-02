import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Rodrigues Dev",
  description: "Portfolio Rodrigues Dev",
};


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
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
