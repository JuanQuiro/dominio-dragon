import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont  from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dominio Dragon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  bg-gradient-to-tr from-black to-neutral-800 scroll`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
