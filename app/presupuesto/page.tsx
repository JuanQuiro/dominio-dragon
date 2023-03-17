"use client";

import { useState } from "react";

export default function Page() {
  const [tiempo, setTiempo] = useState(1);
  const sueldoMes = 300;
  const DiaInactividad = 15;
  const GastosMensuales = 450;

  console.log(sueldoMes * 5 - GastosMensuales / 2);
  const toggleChange = (e) => {
    setTiempo(e.target.value);
  };
  return (
    <>
      <section>
        <div className="flex mx-auto items-center snap-center self-center text-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Selecione el tipo de sowfare que quiere crear
              </span>
            </label>
            <select className="select select-bordered">
              <option>Pagina Simple</option>
              <option>Landing page - Pagina aterrizaje</option>
              <option>Pagina con logica - Pagina compleja</option>
              <option>Pagina - App Movil - App desktop</option>
            </select>
            <label className="label">
              <span className="label-text-alt">Tiempo</span>
              <input
                type="number"
                placeholder="1"
                className="input w-full max-w-xs"
                value={tiempo}
                onChange={toggleChange}
              />

              <span className="label-text-alt">Complijidad</span>
            </label>
          </div>
        </div>
      </section>
      <section>{tiempo}</section>
    </>
  );
}
