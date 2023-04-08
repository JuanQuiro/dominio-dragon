import { hkdf } from "crypto";
import Image from "next/image";
import Link from "next/link";

import juanquiroz from "../public/juan-quiroz.png";
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
      <section className="h-[88vh]">
        <div>
          <Image
            src={juanquiroz}
            className="absolute  h-[88vh] w-[99.9vw] object-cover"
            alt="Juan Quiroz"
            quality={100}
            priority
            fill
          />
        </div>
        <div className="absolute  w-[99.9vw] h-[88vh] grid  grid-cols-2">
          <div className="group text-left bg-primary/5 hover:bg-primary/20">
            <h1 className="text-3xl font-bold group-hover:text-white text-white/50">
              Desarrollador <span className="type-desarrollo"></span>
            </h1>
            <div>
              <p className="text-lg mt-2 text-gray-500">
                Mi nombre es Juan Quiroz y soy alguien que le apasiona conectar la tecnologia con la vida Real
                <br />
                <br />
                <span className="italic font-semibold group-hover:text-white/80">
                  Las tecnologias que utilizo para el desarrollo son:
                </span>
                <br />
              </p>
              <div className="flex mt-2">
                {desarrollador.map(({ image, link, w = 20, h = 20 }, i) => {
                  return (
                    <Link className="mx-1" key={i} href={link}>
                      <Image
                        src={image}
                        width={w}
                        height={h}
                        alt="Es una tecnologia que utilizo para el desarrollo"
                      />
                    </Link>
                  );
                })}
              </div>
              <h3 className="mt-5 text-gray-500 italic font-semibold group-hover:text-white/80">
                Ofrezco mis servicios en:
              </h3>
              <div className="flex mt-2">
                {serviciosDesarrollo.map(
                  ({ image, link, w = 20, h = 20 }, i) => {
                    return (
                      <Link className="mx-1" key={i} href={link}>
                        <Image
                          src={image}
                          width={w}
                          height={h}
                          alt="Es una tecnologia que utilizo para el desarrollo"
                        />
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          {/* Es el lado rojo */}
          <div className="group text-right bg-secondary/5 hover:bg-secondary/20">
            <h2 className="text-3xl font-bold group-hover:text-white text-white/50">
              <span className="type-contenido"></span>
            </h2>
            <p className="text-lg text-gray-500 mt-2 ">
              Mi nombre es Juan Quiroz y soy alguien que le gusta impactar a muchas personas creando contenido de valor
              <br />
              <br />
              <span className="italic font-semibold group-hover:text-white/80">
                Las herramientas que utilizo para la creacion de contenido son:
              </span>
              <br />
            </p>
            <div className="flex mt-2 justify-end">
              {creacion.map(({ image, link, h = 20, w = 20 }) => {
                return (
                  <Link className="mx-1" key={link} href={link}>
                    <Image
                      src={image}
                      width={w}
                      height={h}
                      alt="Es una herramienta que utilizo para la creacion de contenido"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
