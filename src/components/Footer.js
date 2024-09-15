import { useRouter } from "next/router"; // Importamos useRouter
import LogoAlt from "./LogoAlt";
import Link from "next/link";
import Tiktok from "./icons/Tiktok";
import Instagram from "./icons/Instagram";
import Facebook from "./icons/Facebook";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Dev from "./icons/Dev";

function Footer() {
  const router = useRouter(); // Para obtener la ruta actual

  // Definimos los elementos del menú con sus respectivas rutas
  const menuItems = [
    { href: "/about", label: "Who we are", id: "01" },
    { href: "/services", label: "What we do", id: "02" },
    { href: "/contact", label: "Contact us", id: "03" },
  ];

  return (
    <footer className="py-14 px-14">
      <div className="flex justify-between items-center container px-14">
        {/* Sección izquierda */}
        <div className="flex flex-col space-y-8">
          <LogoAlt />
          <div className="text-lg space-y-8">
            <Link className="opacity-80" href="mailto:hello@magismarketing.com">
              hello@magismarketing.com
            </Link>
            <p className="opacity-80 !leading-none">
              2617 Bissonnet St #493,
              <br /> Houston, TX 77005
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col gap-14 items-end">
          {/* Menú central mapeado */}
          <ul className="flex space-x-12 text-2xl">
            {menuItems.map(({ href, label, id }) => (
              <li key={id}>
                <Link href={href} legacyBehavior>
                  <a
                    className={`hover:text-pinkSecondary duration-300 font-semibold tracking-tight ${
                      router.pathname === href ? "text-green" : ""
                    }`}
                  >
                    <span className="text-base italic font-light mr-2">
                      {id}{" "}
                    </span>
                    {label.split(" ")[0]}{" "}
                    <span className="font-extrabold italic font-ramillas text-110">
                      {label.split(" ").slice(1).join(" ")}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Redes sociales y lenguaje */}
          <div className="flex flex-col items-end space-y-6">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pinkSecondary"
              >
                <Instagram className="fill-white dark:fill-main" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pinkSecondary"
              >
                <Facebook className="fill-white dark:fill-main" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pinkSecondary"
              >
                <Tiktok className="fill-white dark:fill-main" />
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      {/* Derechos reservados */}
      <div className="flex justify-between text-sm text-[#C6C6C6] container px-14 mt-24">
        <span>© Magis Marketing 2024. All Rights Reserved.</span>
        <span className="flex gap-1">
          Designed & developed by <Dev />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
