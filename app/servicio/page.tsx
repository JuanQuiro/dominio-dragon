export const metadata = {
  title: "Servicio - Domino Dragon",
  description: "Es el inicio del sitio web de Juan Quiroz",
};

export default function Servicio() {
  const servicioportafolio = [
    {
      title: "Landing pages (Pagina de Aterrizaje)",
      content:
        "Es una pagina web que nace que un objetivo concreto, generamente se usa para embudos de venta y lanzasamiento de productos",
    },
    {
      title: "Pagina Web",
      content: "Es una pagina simple, por lo general sin logica",
    },
    {
      title: "Sitio web",
      content: "Son varias paginas webs, estructuras y enlazadas entre si",
    },
    {
      title: "App Web",
      content:
        "Es una pagina dinamica que posee una o varias funcionalidades para el usuario",
    },
    {
      title: "Ecommerce (Tienda en línea)",
      content: "Es una tienda virtual",
    },
  ];
  return (
    <>
      <h2
        className={`text-center  mb-8 bg-primary text-white text-xl sm:text-xl lg:text-2xl  `}
      >
        Servicio
      </h2>
      {servicioportafolio.map((el, i) => {
        return (
          <div key={i}>
            <h2
              className={`font-bold text-xl sm:text-xl lg:text-2xl text-primary-focus mt-5`}
            >
              {`${i + 1}-  ${el.title}`}
            </h2>
            <p className="text-sm sm:text-base indent-3">{el.content}</p>
          </div>
        );
      })}
    </>
  );
}
