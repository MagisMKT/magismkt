import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function LanguageSwitcher() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState(router.locale); // Inicializa con el idioma actual

  const switchLanguage = (language) => {
    const { pathname, asPath, query } = router;
    setCurrentLang(language);
    router.push({ pathname, query }, asPath, { locale: language });
  };

  // Calcula la posición del círculo en función del idioma actual
  const isEnglish = currentLang === "en"; // Suponiendo que los idiomas sean "en" y "es"

  return (
    <div
      onClick={() => switchLanguage(isEnglish ? "es" : "en")}
      className="relative w-[200px] h-[45px] flex items-center px-[28px] justify-between cursor-pointer rounded-full bg-transparent border dark:border-white border-main !border-opacity-20"
    >
      {/* Círculo que se desplaza */}
      <div
        className={`absolute w-[100px] h-[35px] left-[5px] top-[5px] bg-green rounded-full transition-transform duration-300 ease-in-out ${
          isEnglish
            ? "transform translate-x-[0px]"
            : "transform translate-x-[90px]"
        }`}
      ></div>

      {/* Texto de "Inglés" */}
      <div
        className={` text-base font-ramillas italic tracking-tight transition-colors duration-300 relative z-20 ${
          isEnglish ? "text-main" : "dark:text-white text-main"
        }`}
      >
        English
      </div>

      {/* Texto de "Español" */}
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

export default LanguageSwitcher;
