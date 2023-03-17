import Image from "next/image";
import hero from "../public/hero.avif";
import dragonA from "../public/dragonNextjs.avif";
import iconNextjs from "../public/nextjs-icon.svg";
import iconReact from "../public/react.svg";
import iconType from "../public/typescript-icon-round.svg";
import iconWordpress from "../public/wordpress-icon-alt.svg";
import iconGeneralista from "../public/general.png";
import iconHonestidad from "../public/honestidad.png";
import iconInnovar from "../public/innovar.png";
import Link from "next/link";
import { Rubik } from "next/font/google";
import Footer from "./components/footer";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  const cualidades = [
    {
      title: "Responsable y Honesto",
      contenido:
        "En caso de no cumplir con la fecha de entrega se le entregara 100% de su dinero",
      imagen: iconHonestidad,
    },
    {
      title: "Generalista",
      contenido:
        "Se le orientara en la parte tecnologica para que se enfoque 100% su empresa",
      imagen: iconGeneralista,
    },
    {
      title: "Innovador ",
      contenido:
        "Le ofreceremos solucciones tecnologicas que solventen problemas en su empresa",
      imagen: iconInnovar,
    },
  ];

  const card = [
    {
      titleCard: "Nextjs",
      spanCard: "Framework Fullstack",
      containCard:
        "Es un framework que me ayuda hacer pages de manera rapida y precisa",
      imagenCard: iconNextjs,
      urlCard: "https://nextjs.org/",
    },
    {
      titleCard: "Reactjs",
      spanCard: "Libreria/Framework",
      containCard:
        "Es una libretia que permite crear interfaces que se pueden utilizar para mobile, desktop o web",
      imagenCard: iconReact,
      urlCard: "https://es.reactjs.org/",
    },
    {
      titleCard: "Typescript",
      spanCard: "Proyectos grandes",
      containCard: "Este lengujae me permite crear apps complejidad",
      imagenCard: iconType,
      urlCard: "https://www.typescriptlang.org/",
    },
    {
      titleCard: "Wordpress",
      spanCard: "CMS",
      containCard: "Con Wordpress puedes crear y gestinar blogs",
      imagenCard: iconWordpress,
      urlCard: "https://es.wordpress.org/",
    },
  ];
  return (
    <main>
      <section className="h-screen grid grid-cols-2 text-left">
        <div>
          <h3
            className={`absolute border-wave  text-sm sm:text-2xl lg:text-2xl xl:text-3xl   ${rubik.className} font-semibold`}
          >
            {`Mi nombre es Juan Quiroz`}
          </h3>
          <h3
            className={`absolute wave text-sm  sm:text-2xl lg:text-2xl xl:text-3xl ${rubik.className} font-semibold`}
          >
            {`Mi nombre es Juan Quiroz`}
          </h3>
          <p className="indent-1 mb-5 sm:mb-10 lg:mb-46 text-base lg:text-2xl mt-7 sm:mt-10 lg:mt-14">
            Soy{" "}
            <a
              href="https://www.pulsiondigital.com/blog/que-es-un-desarrollador-full-stack-y-que-hace/#Que_es_un_desarrollador_Full_Stack"
              className="underline decoration-sky-500"
            >
              Desarrollador Fullstack
            </a>{" "}
            apasionado por conectar la tecnologia con la vida real
          </p>
          <p className="block font-extralight lg:text-2xl ">Redes </p>
          <div>
            <ul
              tabIndex={0}
              className="grid w-32 sm:w-60 grid-cols-1 sm:grid-cols-2 gap-3 items-stretch p-2 bg-base-300 rounded-box "
            >
              <li>
                <div className="flex gap-2">
                  <Link href={"https://github.com/JuanQuiro"}>Github</Link>
                  <Image
                    src={"github-icon.svg"}
                    alt="Picture of the author"
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </li>
              <li>
                <div className="flex gap-2">
                  <Link href={"https://www.linkedin.com/in/jukiro/"}>
                    Linkedin
                  </Link>
                  <Image
                    src={"linkedin-icon.svg"}
                    alt="Picture of the author"
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={hero}
          alt="Estas como un astronauta navegando la pagina"
          placeholder="blur"
          className="self-center"
        />
        <section className="grid col-span-2 items-center  ">
          <div className=" bg-primary  p-2 text-center">
            {" "}
            <p className="mx-auto text-primary-content">
              Si puedes imaginarlo, puedes crearlo🙌
            </p>
          </div>
        </section>
      </section>
      <section>
        <div className="hero min-h-screen ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <span>RASGOS Y CARACTERISTICAS</span>
              <h1 className="text-3xl font-bold my-3">
                ¿Como lo puedo ayudar como Programador?
              </h1>
              <span className="text-sm">Mis Herraminetas y skill son:</span>
              <p className="grid grid-cols-2  py-6">
                {card.map((ev, i) => {
                  return (
                    <div
                      key={i}
                      className="group mx-auto mt-4 h-24 w-24 sm:h-52 sm:w-52 [perspective:1000px]"
                    >
                      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                          <Image
                            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                            src={ev.imagenCard}
                            alt=""
                          />
                        </div>
                        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                          <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="whitespace-normal sm:whitespace-nowrap text-sm sm:text-xl font-bold">
                              {ev.titleCard}
                            </h1>
                            <p className=" whitespace-nowrap text-sm text-primary">
                              {ev.spanCard}
                            </p>
                            <p className="text-xs hidden sm:inline text-justify sm:text-center">
                              {ev.containCard}
                            </p>
                            <Link
                              href={ev.urlCard}
                              className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                            >
                              Abrir
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero min-h-screen ">
          <div className="grid grid-cols-2 hero-content flex-row ">
            <div>
              <h2
                className={`text-2xl sm:text-4xl lg:text-6xl text-primary-focus ${rubik.className}`}
              >
                Proceso
              </h2>
              <ul className="steps steps-vertical">
                <li className="step step-primary">Plantemiento</li>
                <li className="step step-primary">Feedback</li>
                <li className="step">Finalizacion</li>
                <li className="step">Listo🔥</li>
              </ul>
            </div>
            <div>
              <Image
                src={"/dragonNextjs.avif"}
                alt="El dragon te esta viendo"
                width={500}
                height={500}
                className="self-center"
              />
              <button className=" flex btn mt-3 mx-auto items-center btn-primary">
                Haz tu presupuesto ahora
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex  text-center items-center self-center snap-center object-center min-h-screen content-center ">
          <div className="mx-auto">
            <h3
              className={`text-2xl sm:text-4xl lg:text-6xl text-primary-focus mb-5 ${rubik.className}`}
            >
              Paginas{" "}
              <Link
                className="underline decoration-secondary decoration-wavy"
                href={"https://www.cyberclick.es/que-es/diseno-web-responsive"}
              >
                Resposive
              </Link>
            </h3>
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  Soy una app
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" grid grid-cols-3 mt-10 min-h-screen ">
        <h3
          className={`text-2xl sm:text-4xl lg:text-6xl text-primary-focus ${rubik.className} text-center text-3xl mb-0 col-span-3`}
        >
          {" "}
          Caracteristicas que me diferencian del resto.
        </h3>

        {cualidades.map((el, i) => {
          return (
            <div key={el.title}>
              <p className="mb-3 text-primary">
                <h3 className="btn p-2 btn-circle inline">{i + 1}</h3>
                {" - "}
                {el.title}
                <Image
                  alt={`Imagen que refleja o simboliza ${el.title}`}
                  src={el.imagen}
                  height={50}
                  width={50}
                  className="ml-2 inline"
                />
              </p>
              <p>{el.contenido}</p>
            </div>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
