"use client";

import emailjs from "@emailjs/browser";

export default function Contacto() {
  const sendEmail = (ev: any) => {
    ev.preventDefault();
    emailjs
      .sendForm(
        "service_nr5wl8a",
        "template_ahwoydm",
        ev.target,
        "5xUq2WZsuQFLB3otW"
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1
        className={`text-center  mb-8 bg-primary text-white text-xl sm:text-xl lg:text-2xl  `}
      >
        Conctato
      </h1>
      <div>
        <form
          className="p-5"
          onSubmit={(ev) => {
            sendEmail(ev);
          }}
        >
          <div className="mb-2">
            <label
              typeof="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese su nombre
            </label>
            <input
              type="name"
              id="name"
              name="user_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Antonio Herrera"
              required
            />
          </div>

          <div className="mb-2">
            <label
              typeof="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ejemplo@gmail.com"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-sm font-medium">Consulta</span>
            </label>
            <textarea
              name="user_mensaje"
              className="textarea mb-5 textarea-bordered h-24"
              placeholder="Mi negocio quiere crecer exponencialmente para ello he decidido crear una pagina web"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </form>
      </div>
      <footer></footer>
    </>
  );
}
