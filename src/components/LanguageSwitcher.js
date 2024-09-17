// components/LanguageSwitcher.js
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { currentLang, switchLanguage } = useLanguage(); // Access language and switch function from context

  const isEnglish = currentLang === "en"; // Assuming 'en' for English and 'es' for Spanish

  return (
    <div
      onClick={() => switchLanguage(isEnglish ? "es" : "en")}
      className="relative w-[200px] h-[45px] flex items-center px-[28px] justify-between cursor-pointer rounded-full bg-transparent border-[0.5px] dark:border-white border-main !border-opacity-20"
    >
      {/* Circle that moves */}
      <div
        className={`absolute w-[100px] h-[35px] left-[5px] top-[5px] bg-green rounded-full transition-transform duration-300 ease-in-out ${
          isEnglish
            ? "transform translate-x-[0px]"
            : "transform translate-x-[90px]"
        }`}
      ></div>

      {/* Text "English" */}
      <div
        className={` text-base font-ramillas italic tracking-tight transition-colors duration-300 relative z-20 ${
          isEnglish ? "text-main" : "dark:text-white text-main"
        }`}
      >
        English
      </div>

      {/* Text "Español" */}
      <div
        className={` text-base font-ramillas italic tracking-tight transition-colors duration-300 relative z-20 ${
          !isEnglish ? "text-main" : "dark:text-white text-main"
        }`}
      >
        Español
      </div>
    </div>
  );
}
