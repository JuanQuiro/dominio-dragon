"use client";

import { SetStateAction, useState } from "react";

export default function Presupuesto() {
  const [seleccion, setSeleccion] = useState("1");
  return (
    <>
      <h1
        className={`text-center  mb-8 bg-primary text-white text-xl sm:text-xl lg:text-2xl  `}
      >
        Presupuesto
      </h1>
      <div className="mx-auto  form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-lg mx-auto">
            Selecione el tipo de pagina
          </span>
        </label>
        <select
          value={seleccion}
          onChange={(ev) => setSeleccion(ev.target.value)}
          className="select  select-bordered"
        >
          <option value={1}> Landing pages</option>
          <option value={2}>Pagina Web</option>
          <option value={3}>Sitio web</option>
          <option value={4}>App Web</option>
          <option value={5}>Ecommerce (Tienda en línea)</option>
        </select>
        <label className="label">
          <span className="label-text-alt">
            Se extima que sera un aproximado de{" "}
          </span>
          <span className="label-text-alt">
            {seleccion == "1"
              ? "50$"
              : seleccion == "2"
              ? "100$"
              : seleccion == "3"
              ? "150$"
              : seleccion == "4"
              ? "200$"
              : seleccion == "5"
              ? "260$"
              : "ERROR"}
          </span>
        </label>
      </div>{" "}
      <footer className="fixed bg-primary-focus text-primary-content left-0 bottom-0 h-8 w-full footer footer-center ">
        <div>
          <p>
            Es una estimacion, el 60% de los casos la estimacion es{" "}
            <p className="inline text-secondary-focus font-extrabold">
              erronea
            </p>
          </p>
        </div>
      </footer>
    </>
  );
}
