import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ProvidersUI } from "@/components/ProviderUI";

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
    <html lang="es">
      <body
        className={`${inter.className} scroll`}
      >
        <ProvidersUI>
          <Navbar />
          {children}
        </ProvidersUI>
      </body>
    </html>
  );
}
