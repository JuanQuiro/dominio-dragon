import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fira = localFont({
  src: [
    { path: "./fonts/FiraSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/FiraSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/FiraSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/FiraSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/FiraSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/FiraSans-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-fira",
  display: "swap",
});

const siteUrl = "https://juanquiro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Juan Quiroz — Fundador técnico e ingeniero full-stack",
    template: "%s · Juan Quiroz",
  },
  description:
    "Construí y lancé en solitario dos productos en producción: Cocolu Ventas, SaaS de ventas y contabilidad para PYMES de LATAM, y SOS Dental, ERP clínico de 59 módulos con ML en Rust. Cinco años en FinTech, automatización y ERP.",
  keywords: [
    "Juan Quiroz",
    "founding engineer",
    "fundador técnico",
    "full-stack engineer",
    "TypeScript",
    "Flutter",
    "Rust",
    "FinTech",
    "Venezuela",
    "remote",
  ],
  authors: [{ name: "Juan Quiroz", url: siteUrl }],
  creator: "Juan Quiroz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Juan Quiroz",
    title: "Juan Quiroz — Fundador técnico e ingeniero full-stack",
    description:
      "Dos productos en producción, construidos y mantenidos en solitario. Cinco años en FinTech, automatización y ERP.",
    locale: "es_VE",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Juan Quiroz — Fundador técnico e ingeniero full-stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Quiroz — Fundador técnico e ingeniero full-stack",
    description:
      "Dos productos en producción, construidos y mantenidos en solitario. Cinco años en FinTech, automatización y ERP.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fcfcfa",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan Alberto Quiroz Sánchez",
  alternateName: "Juan Quiroz",
  jobTitle: "Fundador técnico e ingeniero full-stack",
  email: "mailto:juanquirozsana@gmail.com",
  url: siteUrl,
  sameAs: ["https://github.com/juanquiro", "https://linkedin.com/in/dreyz"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Carabobo",
    addressCountry: "VE",
  },
  knowsLanguage: ["es", "en"],
  knowsAbout: [
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Flutter",
    "Dart",
    "Rust",
    "PostgreSQL",
    "FinTech",
    "RPA",
    "SAP HANA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={fira.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
