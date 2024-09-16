// context/LanguageContext.js
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState(router.locale);

  const switchLanguage = (language) => {
    const { pathname, asPath, query } = router;
    setCurrentLang(language);
    router.push({ pathname, query }, asPath, { locale: language });
  };

  useEffect(() => {
    setCurrentLang(router.locale); // Update the currentLang when router locale changes
  }, [router.locale]);

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
