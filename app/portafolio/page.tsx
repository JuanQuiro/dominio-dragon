import Image from "next/image";
import Link from "next/link";

import rosa from "../../public/rosa.png";
import vision from "../../public/VisionHolistica.jpeg";
import filosofis from "../../public/img1.gif";
import identidades from "../../public/img2.gif";
import task from "../../public/img3.gif";
import cine from "../../public/img4.gif";
import piedra from "../../public/img5.gif";
import maria from "../../public/img6.gif";

export const metadata = {
  title: "Portafolio - Domino Dragon",
  description: "Es el inicio del sitio web de Juan Quiroz",
};

export default function Portafolio() {
  const portafolio = [
{
title: "Piedra papel tijeras",
content:
"Es un sitio web que donde se puede jugar piedra papel tijeras",
imagen: piedra,
url: "https://rock-paper-scissors-juanquiroz.vercel.app/",
},
{
title: "Cine Virtual",
content:
"Es un sitio web que consume un api rest para mostrar las pelis del momento",
imagen: cine,
url: "https://cine-virtual.vercel.app/",
},
{
title: "Task",
content:
"Es un sitio web que simula las funcion de hacer tareas",
imagen: task,
url: "https://task-huawd85o5-juanquiroz.vercel.app/",
},
{
title: "Identidades Gatunas",
content:
"Es un sitio web creado en Vuejs",
imagen: identidades,
url: "https://identidades-vue.vercel.app/",
},
{
title: "Filosofis",
content:
"Es un sitio web creado en Sveltte",
imagen: filosofis,
url: "https://filosofis.vercel.app/",
},
{
title: "Rosa Martinez",
content:
"Es un sitio web creado en Wordpress para la cliente Rosa Martinez",
imagen: rosa,
url: "https://rosamartinez.es/",
},
{
title: "Vision Holistica",
content: "Es un sitio web creado en wix ",
imagen: vision,
},
{
title: "Maria Fernanda La Riva",
content:
"Es una pagina creada para la cliente Maria F. La Riva en su version Español",
imagen: maria,
url: "https://mariaflariva1.wixsite.com/espanol/sobre",
}
];
  return (
    <>
      <h1
        className={`text-center  mb-8 bg-primary text-white text-xl sm:text-xl lg:text-2xl  `}
      >
        Portafolio
      </h1>
      {portafolio.map((el, i) => (
        <Link
          href={el.url ? el.url : "#"}
          className="group dark:hover:text-black grid grid-cols-2 hover:bg-primary"
          key={i}
        >
          <div className="grid items-center ">
            <div className="m-2">
              <h3 className="text-xl text-primary-focus group-hover:text-white group-hover:font-bold">{el.title}</h3>
              <p className=" indent-1 sm:text-base text-xs">{el.content}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              className=" m-3 border-dashed group-hover:border-2 group-hover:border-black "
              src={el.imagen}
              width={300}
              height={300}
              alt={`Pagina de ${el.title}`}
            />
          </div>
        </Link>
      ))}
    </>
  );
}
