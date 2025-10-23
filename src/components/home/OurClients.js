import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";
import { useTheme } from "@/context/ThemeContext"; // Importa el contexto de tema

// Definimos las versiones blanca y negra de los logos
const logos = [
  {
    srcWhite: "/images/tepatitlan_white.png",
    srcBlack: "/images/tepatitlan.png",
    alt: "Tepatitlan",
  },
  {
    srcWhite: "/images/hugo-balderas_white.png",
    srcBlack: "/images/hugo-balderas.png",
    alt: "Hugo Balderas Ibarra",
  },
  {
    srcWhite: "/images/azteca_white.png",
    srcBlack: "/images/azteca_opacity.png",
    alt: "Azteca Farmers Market",
  },
  {
    srcWhite: "/images/muebleria_white.png",
    srcBlack: "/images/muebleria.png",
    alt: "Muebleria El Triunfo",
  },
  {
    srcWhite: "/images/the-gonzalez-law-group_white.png",
    srcBlack: "/images/the-gonzalez-law-group.png",
    alt: "The Gonzalez Law Group",
  },
  {
    srcWhite: "/images/carnitas_white.png",
    srcBlack: "/images/carnitas.png",
    alt: "Carnitas Mexican Grill",
  },
  {
    srcWhite: "/images/alex_white.png",
    srcBlack: "/images/alex.png",
    alt: "Alex Transmissions",
  },
];

function OurClients({ home }) {
  const { theme } = useTheme(); // Obtenemos el tema actual (dark o light)

  return (
    <section className="min-h-[90vh] z-40 relative flex justify-center items-end py-12 lg:py-24 px-[20px]">
      <div className="container text-center flex flex-col gap-14 justify-center items-center mx-auto">
        <div className="flex gap-4 items-center">
          <Shine color="#FFC3D1" />
          <h4
            dangerouslySetInnerHTML={{
              __html: home.clientsTitle.replace(/`/g, ""),
            }}
          />
        </div>
        <h2
          className="text-pink"
          dangerouslySetInnerHTML={{
            __html: home.clientsSubtitle.replace(/`/g, ""),
          }}
        />

        <div className="w-full grid lg:grid-cols-4 grid-rows-2 rounded-[64px] overflow-hidden border-[0.75px] dark:border-white border-main !border-opacity-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-[0.5px] dark:border-white border-main !border-opacity-10 border-collapse p-4 min-h-40 md:aspect-square"
            >
              {/* Usamos la versión blanca o negra según el tema */}
              <Image
                quality={100}
                src={theme === "dark" ? logo.srcBlack : logo.srcWhite}
                alt={logo.alt}
                width={150}
                height={120}
                className="min-w-[220px] max-h-[85px] object-contain"
              />
            </div>
          ))}
          {/* CTA Grid Item */}
          <div className="flex flex-col items-center justify-center rounded-br-[64px] p-8 bg-blue gap-4 bg-[url('/images/bg-lines.svg')] bg-cover">
            <h3
              className="text-main"
              dangerouslySetInnerHTML={{
                __html: home.clientsTextGrid.replace(/`/g, ""),
              }}
            />

            <Button
              text={home.clientsTextButton}
              bgColor="bg-black"
              textColor="text-white"
              iconBgColor="bg-blue"
              href="/contact"
              rotate={-90}
              icon={Arrow}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
