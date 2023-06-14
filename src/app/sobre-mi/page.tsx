import { hkdf } from "crypto";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Inicio - Domino Dragon",
  description: "Es el inicio del sitio web de Juan Quiroz",
};

export default function Home() {
  const desarrollador = [
    {
      image: "github-icon-1.svg",
      link: "https://github.com/JuanQuiro",
    },
    {
      image: "linkedin-icon.svg",
      link: "https://www.linkedin.com/in/jukiro/",
    },
    {
      image: "nextjs-icon.svg",
      link: "https://nextjs.org/",
    },
    {
      image: "react.svg",
      link: "https://reactjs.org/",
    },
    {
      image: "vue.svg",
      link: "https://vuejs.org/",
    },
    {
      image: "nuxt-icon.svg",
      link: "https://nuxtjs.org/",
    },
    {
      image: "tailwindcss-icon.svg",
      link: "https://tailwindcss.com/",
    },
    {
      image: "nodejs-icon.svg",
      link: "https://nodejs.org/",
    },
    {
      image: "express.svg",
      link: "https://expressjs.com/",
      w: 50,
      h: 50,
    },
    {
      image: "firebase.svg",
      link: "https://firebase.google.com/?hl=es",
    },
  ];
  const creacion = [
    {
      image: "instagram-icon.svg",
      link: "https://www.instagram.com/juanquiroz/",
    },
    {
      image: "twitter.svg",
      link: "https://twitter.com/juanquiroz",
    },
    {
      image: "facebook.svg",
      link: "https://www.facebook.com/juanquiroz",
    },
    {
      image: "youtube-icon.svg",
      link: "https://www.youtube.com/",
    },
    {
      image: "figma.svg",
      link: "https://www.figma.com/",
      w: 15,
      h: 15,
    },
  ];
  const serviciosDesarrollo = [
    {
      image: "fiverr.svg",
      link: "https://es.fiverr.com/juanquiro",
      w: 50,
      h: 50,
    },
  ];
  return (
    <main>
      <p>o</p>
    </main>
  );
}
