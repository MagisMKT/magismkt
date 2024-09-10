// components/Header.js
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  return (
    <header
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <nav>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
