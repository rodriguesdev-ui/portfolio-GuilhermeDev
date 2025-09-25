import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
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
    <html lang="pt-BR">
      <body className={`${interSans.className} antialiased`}>{children}</body>
    </html>
  );
}
