// pages/_app.js
import "../styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

function MyApp({ Component, pageProps }) {
  const { header, socialLinks, pagesTitles, footer } = pageProps; // Extraer props pasadas desde cada página

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
