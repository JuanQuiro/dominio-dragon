/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require('tailwind-typewriter')({
            wordsets: {
                desarrollo: {
                    words: ['FrontEnd', 'FullStack', 'Freelancer', 'Teem React and Svelte🔥'],
                    delay: 3,
                    caretColor:"blue"
              },
              contenido: {
                words: ["Creador De Contenido", "Youtuber"],
                delay: 3,
                caretColor:"red"
              }
      }
      
        }),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0984e3",

          secondary: "#d63031",

          accent: "#55efc4",

          neutral: "#dfe6e9",

          "base-100": "#000000",

          info: "#74b9ff",

          success: "#00cec9",

          warning: "#FFA60C",

          error: "#FF4130",
        },
      },
    ],
  },
};
