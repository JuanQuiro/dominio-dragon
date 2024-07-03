import type { Metadata } from "next";

import { Inter as FontSans } from "next/font/google"


import "./globals.css";
import Menu from "../components/Menu-lateral";
import { cn } from "@/lib/utils"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Dominio Dragon",
  description: "Agencia de Desarrollo de Sofware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Menu />
        {children}
      </body>
      </html>
  );
}
