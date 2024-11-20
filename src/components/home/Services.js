import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";

// const services = [
//   {
//     number: "01",
//     title: "Branding",
//     description:
//       "Crafting unique brand identities that resonate with your target audience and differentiate you in the market.",
//     imgSrc: "/images/s_branding.svg",
//   },
//   {
//     number: "02",
//     title: "Marketing",
//     description:
//       "Implementing strategic marketing campaigns to boost your brand visibility and drive business growth.",
//     imgSrc: "/images/s_marketing.svg",
//   },
//   {
//     number: "03",
//     title: "Public Relations",
//     description:
//       "Managing your public image and building strong relationships with media and stakeholders.",
//     imgSrc: "/images/s_public-relations.svg",
//   },
//   {
//     number: "04",
//     title: "Workshops",
//     description:
//       "Providing engaging and informative workshops to enhance skills and knowledge in various areas of marketing and branding.",
//     imgSrc: "/images/s_workshops.svg",
//   },
// ];

function Services({ home, services }) {
  return (
    <section
      className="md:min-h-[90vh] z-40 relative flex items-center py-8 lg:py-24 px-[20px]"
      id="services"
    >
      <div className="container flex flex-col gap-5 lg:gap-14 items-start mx-auto">
        <div className="flex gap-4 items-center justify-center">
          <Shine color="#BAE846" />
          <h4
          dangerouslySetInnerHTML={{
            __html: home.whatWeDoTitle.replace(/`/g, ""),
          }}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-end">
          <h2
           dangerouslySetInnerHTML={{
            __html: home.whatWeDoSubtitle.replace(/`/g, ""),
          }}
          />
          <p className="lg:px-20">
            {home.whatWeDoParagraph}
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto py-4 lg:py-16 px-4 flex flex-col items-center">
          <div className="w-full relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-3 grid-flow-row-dense gap-6 md:gap-12 items-center justify-between w-full py-[60px] dark:bg-main bg-light sticky top-0 border-t-[0.5px] first:border-none  dark:border-white border-main !border-opacity-20"
              >
                <div className="flex items-center order-2">
                  <h3 className="font-semibold">
                    <span className="font-light italic">{service.number} </span>
                    {service.title}
                  </h3>
                </div>
                <p className="text-95 order-2">{service.description}</p>
                <div className="flex justify-start lg:justify-end order-1 md:order-3">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            ))}
          </div>
          <Button
            text="Discover the power of Magis"
            bgColor="dark:bg-main bg-light"
            textColor="dark:text-white text-main"
            iconBgColor="bg-pink"
            hoverTextColor="text-white"
            icon={Arrow} // Pasamos el ícono Arrow
            iconFillColor="#ffffff" // El color del ícono es "main"
            rotate={-90}
            href="/services"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
