module.exports = {
  darkMode: "class",
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
        mainSecondary: "#2F0019",
        light: "#FFF2F5",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        ramillas: ["TTRamillas", "serif"],
      },
      fontSize: {
        110: "110%",
        105: "105%", // Agrega una clase personalizada para 110%
        95: "95%",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
