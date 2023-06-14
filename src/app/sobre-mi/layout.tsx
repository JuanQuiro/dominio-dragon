
import Navbar from "./components/navbar";

export const metadata = {
  title: "Sobre mi - Domino Dragon",
  description: "Es el sitio web oficial de Juan Quiroz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`antialiased md:subpixel-antialiased scrollbar scrollbar-thumb-gray-900 dark:scrollbar-thumb-red-700 scrollbar-track-rounded-full scrollbar-track-gray-100 scrollbar-w-1`}
      >
        <Navbar />
        <div className="absolute mt-[4.7rem] w-[99.4vw]">

        {children}
        </div>
      </body>
    </html>
  );
}
