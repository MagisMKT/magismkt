// pages/_app.js
import "../styles/globals.css";
import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
