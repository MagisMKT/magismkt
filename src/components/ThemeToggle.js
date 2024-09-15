import { useEffect, useState } from "react";
import Moon from "./icons/Moon"; // Componente de ícono de la Luna
import Sun from "./icons/Sun"; // Componente de ícono del Sol

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null); // Inicializamos sin tema

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      // Preferimos 'dark' si no hay tema guardado
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (theme === null) {
    // Esperamos a que se defina el tema
    return null;
  }

  return (
    <div
      onClick={toggleTheme}
      className="relative w-[90px] h-[45px] flex items-center cursor-pointer rounded-full bg-transparent border dark:border-white border-main !border-opacity-20"
    >
      {/* Círculo que se desplaza */}
      <div
        className={`absolute w-[35px] h-[35px] top-[5px] bg-green rounded-full transition-transform duration-300 ease-in-out ${
          theme === "dark"
            ? "transform translate-x-[5px]"
            : "transform translate-x-[47.5px]"
        }`}
      ></div>

      {/* Icono de la Luna */}
      <div
        className={`w-[35px] h-[35px] absolute left-[11.5px] top-[10px] transition-colors duration-300 ${
          theme === "dark" ? "text-black" : "text-white"
        }`}
      >
        <Moon />
      </div>

      {/* Icono del Sol */}
      <div
        className={`w-6 h-6 absolute right-[11px] transition-colors duration-300 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <Sun />
      </div>
    </div>
  );
}
