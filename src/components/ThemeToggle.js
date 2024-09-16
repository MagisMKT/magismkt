// components/ThemeToggle.js
import { useTheme } from "../context/ThemeContext"; // Import the useTheme hook
import Moon from "./icons/Moon"; // Moon icon component
import Sun from "./icons/Sun"; // Sun icon component

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle from context

  if (theme === null) {
    return null; // Wait for the theme to be initialized
  }

  return (
    <div
      onClick={toggleTheme}
      className="relative w-[90px] h-[45px] flex items-center cursor-pointer rounded-full bg-transparent border dark:border-white border-main !border-opacity-20"
    >
      {/* Circle that moves */}
      <div
        className={`absolute w-[35px] h-[35px] top-[5px] bg-green rounded-full transition-transform duration-300 ease-in-out ${
          theme === "dark"
            ? "transform translate-x-[5px]"
            : "transform translate-x-[47.5px]"
        }`}
      ></div>

      {/* Moon icon */}
      <div
        className={`w-[35px] h-[35px] absolute left-[11.5px] top-[10px] transition-colors duration-300 ${
          theme === "dark" ? "text-main" : "text-main"
        }`}
      >
        <Moon />
      </div>

      {/* Sun icon */}
      <div
        className={`w-6 h-6 absolute right-[11px] transition-colors duration-300 ${
          theme === "light" ? "text-main" : "text-white"
        }`}
      >
        <Sun />
      </div>
    </div>
  );
}
