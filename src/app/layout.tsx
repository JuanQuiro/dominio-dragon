import "~/styles/globals.css";
import { Inter,Raleway } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
});
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

export const metadata = {
  title: "Dominio Dragon",
  description: "Portafolio y blog de Juan Quiroz, un desarrollador Fullstack",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-100 scrollbar-w-2">
      <body
        className={twMerge(
          "bg-background font-sans text-foreground",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
