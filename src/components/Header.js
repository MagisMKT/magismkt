// components/Header.js
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "../components/ThemeToggle";

function Header() {
  return (
    <header
      className="fixed z-50"
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <ThemeToggle />
      <nav>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
