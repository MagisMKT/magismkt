// pages/_app.js
import "../styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
