import Link from "next/link";
import Image from "next/image";
import perfil from "../../public/dragon-logo.png";

export default function Home() {
  return (
    <div className="absolute z-10 navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost dark:text-gray-400 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li tabIndex={0}>
              <p className="justify-between">
                Sobre mi
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </p>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href={"/servicio"}>Servicios</Link>
                </li>
                <li>
                  <Link href={"/portafolio"}>Portafolio</Link>
                </li>
                <li>
                  <Link href={"/presupuesto"}>Presupuesto</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <Link
          href={"/"}
          className="flex"
        >

        <Image
          src={perfil}
          height={30}
            width={30}
            className="inline"
          alt="Imagen de perfil"
          />
          <h2 className={` leading-4 ml-1  normal-case text-xl font-light tracking-wider text-white`}>
          Dominio
          <br />
          Dragon
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-5">
            <Link href={"/"}>Inicio</Link>
          </li>
          <li className="mx-5" tabIndex={0}>
            <p>
              Sobre mi
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
            <ul className="p-2 bg-base-100 border-2 border-white/10 ">
              <li>
                <Link href={"/servicio"}>Servicio</Link>
              </li>
              <li>
                <Link href={"/portafolio"}>Portafolio</Link>
              </li>
              <li>
                <Link href={"/presupuesto"}>Presupuesto</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/contacto"}>Contactame</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="btn text-black rounded-full px-6 capitalize m-1 font-light"
          >
            Redes 🔥
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 border-2 border-white/10 rounded-box w-52"
          >
            <li>
              <div>
                <Link href={"https://github.com/JuanQuiro"}>Github</Link>
                <Image
                  src={"github-icon-1.svg"}
                  alt="Picture of the author"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </li>
            <li>
              <div>
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
    </div>
  );
}
