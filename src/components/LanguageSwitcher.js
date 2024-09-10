// components/LanguageSwitcher.js
import { useRouter } from "next/router";

function LanguageSwitcher() {
  const router = useRouter();

  const switchLanguage = (language) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: language });
  };

  return (
    <div>
      {router.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLanguage(locale)}
          style={{ margin: "0 5px" }}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
