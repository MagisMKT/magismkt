/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "es"], // Lista de locales que soportas
    defaultLocale: "en", // El locale por defecto si no se especifica uno
  },
};

export default nextConfig;
