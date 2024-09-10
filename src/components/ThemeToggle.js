import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null); // Comenzamos sin ningún tema, esperando el efecto

  useEffect(() => {
    // Comprobamos el tema almacenado en localStorage al montar el componente
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      // Si no hay tema guardado, preferimos 'dark'
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Cambiamos la clase en el documento
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);

    // Guardamos la preferencia del usuario
    localStorage.setItem("theme", newTheme);
  };

  if (theme === null) {
    // Mientras se espera que el tema sea definido (durante el renderizado inicial), no renderizamos nada
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full"
    >
      {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
