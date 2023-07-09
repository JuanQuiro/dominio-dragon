"use client";
import Image from "next/image";
import MyImage from "@/public/headshot.webp";
import SplashBg from "@/public/imgs/splash_bg.png";
import Link from "next/link";
import data from "@/data.json" assert { type: "JSON" };
import { RoughNotation } from "react-rough-notation";
import "./globals.css";
import {
  SvgEducation,
  SvgEducationCardBottom,
  SvgEducationCardTop,
  SvgHome,
} from "./svg/waves-svg";
import localFont  from "next/font/local";

const neue = localFont({ src: './fonts/PPNeueMontreal-Italic.otf', variable: '--font-neue' })

export default function Home() {
  const { socials, educations, experience } = data;

  return (
    <main>
      <section className="relative w-full">
        <article className="container mx-auto">
          {/* Home */}

          <div className="flex flex-col justify-center items-center min-h-[95vh] w-full">
            <div className="relative flex justify-center md:items-center md:gap-24">
              <div className="hidden xl:block">
                <Image
                  src={MyImage}
                  alt="headshot.jpg"
                  className="md:w-[380px] md:h-[400px] rounded-full border-yellow-600 border-2"
                  priority={true}
                />
                <Image
                  src={SplashBg}
                  alt="splash.png"
                  className="md:w-[380px] absolute -top-3 left-0 -z-10 scale-150 saturate-50"
                  priority={true}
                />
              </div>

              <div className="flex flex-col items-start gap-8">
                <h2 className="bg-gradient-to-r w-full from-amber-200 to-yellow-500 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent text-center md:text-left">
                  Dominio Dragon
                </h2>
                <p className="font-medium text-lg xl:text-xl text-center md:text-left max-w-[50ch] text-[#cfdbd5]">
                  Saludos 👋 mi nombre es Juan Quiroz y me desempeño como
                  desarrollador Full Stack.
                </p>
                <div className="flex justify-center w-full gap-1 md:gap-5 md:justify-start">
                  <Link
                    className="grid place-content-center md:text-xl text-neutral-900 font-bold py-1 px-4 bg-[#f5cb5c] border-[#f5cb5c] shadow border-2 transition-all rounded hover:border-[#f5cb5c] hover:bg-transparent hover:text-[#f5cb5c]"
                    href="/JuanQuiroz.pdf"
                    target="_blank"
                  >
                    ¡Échale un vistazo a mi CV!
                  </Link>
                  <Link
                    className="grid place-content-center md:text-xl text-[#f5cb5c] font-bold py-1 px-4 bg-transparent border-2 border-[#f5cb5c] transition-all rounded hover:border-[#f5cb5c] shadow hover:bg-[#f5cb5c] hover:text-neutral-900"
                    href="mailto:juanquirozsana@gmail.com"
                  >
                    ¡Contáctame!
                  </Link>
                </div>
                <div className="flex justify-center w-full gap-5 md:justify-start">
                  {socials.map((item, idx) => {
                    return (
                      <Link
                        key={idx}
                        className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-10 h-10 flex items-center justify-center rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105"
                        href={item.link}
                        target="_blank"
                      >
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={20}
                          height={20}
                          className="invert"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </article>
        <SvgHome />
      </section>

      {/* About me */}

      <section className="w-full h-auto py-32  px-24 bg-[#f5cb5c]">
        <div className="container flex flex-col items-center justify-center gap-12 mx-auto md:flex-row">
          <RoughNotation type="box" show={true} color="#171717" padding={30}>
            <h2 className={`text-[#171717] ${neue.className} hover:text-yellow-950/70 duration-700  text-5xl font-bold leading-[1.2] tracking-wider text-center my-2`}>
              Sobre mí
            </h2>
          </RoughNotation>
          <div className="text-neutral-700 font-medium tracking-tight text-xl p-2 max-w-[60ch]">
            <p className="text-center lg:text-right text-black">
              Me he desempeñado como desarrollador por un años en el desarrollo
              de software, soy 100% autodidacta teniendo como foco objetivos
              desafiantes
            </p>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="relative w-full h-auto pt-56">
        <article className="container flex flex-col items-center mx-auto">
          <RoughNotation type="underline" show={true} color="#f5cb5c">
            <h2 className={`text-[#f5cb5c] ${neue.className} text-5xl font-bold leading-[1.2] tracking-wider text-center my-1`}>
              Experiencia
            </h2>
          </RoughNotation>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {experience.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="relative ring-2 ring-[#242423]/[33] w-80 h-80 shadow-lg m-4 p-4 rounded transition-all hover:ring-[#f5cb5c]/[50]"
                >
                  <h2 className={`text-[#f5cb5c] font-semibold  text-center tracking-tighter text-xl h-16`}>
                    {item.title}
                    {item.actual ? <span className="badge bg-white text-black items-end">En proceso</span> : null }
                  </h2>
                  <div className="bg-[#f5cb5c] h-2 w-full mb-3" />
                  <p className="text-[#cfdbd5] line-clamp-6">{item.description}</p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="absolute bottom-4 right-4 left-4 grid place-content-center md:text-xl text-neutral-900 font-bold py-1 px-4 bg-[#f5cb5c] border-[#f5cb5c] shadow border-2 transition-all rounded-sm hover:border-[#f5cb5c] hover:bg-transparent hover:text-[#f5cb5c]"
                  >
                    {item.certificado ? 'Certificado' : 'Ver curso'}
                  </Link>

                  <div className="custom-shape-divider-top-1677342557">
                    <SvgEducationCardTop />
                  </div>

                  <div className="custom-shape-divider-bottom-1677342378">
                    <SvgEducationCardBottom /> 
                  </div>
                </div>
              );
            })}
          </div>
        </article>
        <SvgEducation />
      </section>
      {/* Education  */}

      <section className="relative w-full h-auto pb-8 pt-10">
        <article className="container flex flex-col items-center mx-auto">
          <RoughNotation type="underline" show={true} color="#f5cb5c">
            <h2 className={`text-[#f5cb5c] ${neue.className} text-5xl font-bold leading-[1.2] tracking-wider text-center my-1`}>
              Educación
            </h2>
          </RoughNotation>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {educations.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="relative ring-2 ring-[#242423]/[33] w-80 h-80 shadow-lg m-4 p-4 rounded transition-all hover:ring-[#f5cb5c]/[50]"
                >
                  <h2 className={`text-[#f5cb5c] font-semibold  text-center tracking-tighter text-xl h-16`}>
                    {item.title}
                    {item.actual ? <span className="badge bg-white text-black items-end">En proceso</span> : null }
                  </h2>
                  
                  <div className="bg-[#f5cb5c] h-2 w-full mb-3" />
                  <p className="text-[#cfdbd5] line-clamp-6">{item.description}</p>
                
                  <Link
                    href={item.link}
                    target="_blank"
                    className="absolute bottom-4 right-4 left-4 grid place-content-center md:text-xl text-neutral-900 font-bold py-1 px-4 bg-[#f5cb5c] border-[#f5cb5c] shadow border-2 transition-all rounded-sm hover:border-[#f5cb5c] hover:bg-transparent hover:text-[#f5cb5c]"
                  >
                    {item.certificado ? 'Certificado' : 'Ver curso'}
                  </Link>

                  <div className="custom-shape-divider-top-1677342557">
                    <SvgEducationCardTop />
                  </div>

                  <div className="custom-shape-divider-bottom-1677342378">
                    <SvgEducationCardBottom />
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>
        <article className="bg-[#f5cb5c]">
          <h2 className='text-black p-2 text-center items-end'>Siempre he considerado que lo mas importante de un dev son sus proyectos, dale <Link className='link text-black font-bold bg-[#d6a009]' href=''> click aqui</Link> para ver algunos de los mios</h2>
        </article>
    </main>
  );
}
