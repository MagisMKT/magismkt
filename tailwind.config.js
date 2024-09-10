module.exports = {
  darkMode: "class", // Permite el uso de la clase 'dark' para el modo oscuro
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "#BAE846",
        blue: "#0074D9",
        pink: "#DC0073",
        pinkSecondary: "#FFC3D1",
        main: "#190C13",
        light: "#FFF2F5",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Llamada a la fuente Poppins
        ramillas: ["TTRamillas", "serif"], // Llamada a las fuentes TT Ramillas
      },
    },
  },
  plugins: [],
};
