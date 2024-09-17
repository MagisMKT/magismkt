import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";

const logos = [
  { src: "/images/tepatitlan.png", alt: "Tepatitlan" },
  { src: "/images/hugo-balderas.png", alt: "Hugo Balderas Ibarra" },
  { src: "/images/azteca_opacity.png", alt: "Azteca Farmers Market" },
  { src: "/images/muebleria.png", alt: "Muebleria El Triunfo" },
  { src: "/images/the-gonzalez-law-group.png", alt: "The Gonzalez Law Group" },
  { src: "/images/carnitas.png", alt: "Carnitas Mexican Grill" },
  { src: "/images/alex.png", alt: "Alex Transmissions" },
];

function OurClients({ home }) {
  return (
    <section className="min-h-[90vh] z-40 relative flex justify-center items-end py-12 lg:py-24 px-[20px]">
      <div className="container text-center flex flex-col gap-14 justify-center items-center mx-auto">
        <div className="flex gap-4 items-center">
          <Shine color="#FFC3D1" />
          <h4>
            Our <span className="font-ramillas italic text-110">clients</span>
          </h4>
        </div>
        <h2 className="text-pink">
          <span className="text-110 font-ramillas italic font-extrabold">
            We love to{" "}
          </span>
          <span className="text-main dark:text-light">work with</span>
        </h2>
        <div className="w-full grid lg:grid-cols-4 grid-rows-2 rounded-[64px] overflow-hidden border-[0.75px] dark:border-white border-main !border-opacity-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-[0.5px] dark:border-white border-main !border-opacity-10 border-collapse p-4 aspect-square"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={120}
                className="min-w-[220px] max-h-[85px] object-contain mix-blend-difference"
              />
            </div>
          ))}
          {/* CTA Grid Item */}
          <div className="flex flex-col items-center justify-center rounded-br-[64px] p-8 bg-blue gap-4 bg-[url('/images/bg-lines.svg')] bg-cover">
            <h3 className="text-main">
              Be the{" "}
              <span className="italic font-ramillas text-110">next!</span>
            </h3>
            <Button
              text="Let's talk"
              bgColor="bg-black"
              textColor="text-white"
              iconBgColor="bg-blue"
              href="#services"
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
