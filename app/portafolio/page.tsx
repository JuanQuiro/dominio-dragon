import Image from "next/image";
import Link from "next/link";

import rosa from "../public/rosa.png";
import maria from "../public/maria.png";
import vision from "../public/VisionHolistica.jpeg";

export const metadata = {
  title: "Portafolio - Domino Dragon",
  description: "Es el inicio del sitio web de Juan Quiroz",
};

export default function Portafolio() {
  const portafolio = [
    {
      title: "Maria Fernanda La Riva",
      content:
        "Es una pagina creada para la cliente Maria F. La Riva en su version Español",
      imagen: maria,
      url: "https://mariaflariva1.wixsite.com/espanol/sobre",
    },
    {
      title: "Vision Holistica",
      content: "Es un sitio web creado en wix ",
      imagen: vision,
    },
    {
      title: "Rosa Martinez",
      content:
        "Es un sitio web creado en Wordpress para la cliente Rosa Martinez",
      imagen: rosa,
      url: "https://rosamartinez.es/",
    },
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
