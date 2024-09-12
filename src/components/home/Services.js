import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";

const services = [
  {
    number: "01",
    title: "Branding",
    description:
      "Crafting unique brand identities that resonate with your target audience and differentiate you in the market.",
    imgSrc: "/images/s_branding.svg",
  },
  {
    number: "02",
    title: "Marketing",
    description:
      "Implementing strategic marketing campaigns to boost your brand visibility and drive business growth.",
    imgSrc: "/images/s_marketing.svg",
  },
  {
    number: "03",
    title: "Public Relations",
    description:
      "Managing your public image and building strong relationships with media and stakeholders.",
    imgSrc: "/images/s_public-relations.svg",
  },
  {
    number: "04",
    title: "Workshops",
    description:
      "Providing engaging and informative workshops to enhance skills and knowledge in various areas of marketing and branding.",
    imgSrc: "/images/s_workshops.svg",
  },
];

function Services({ home }) {
  return (
    <section className="min-h-[90vh] z-40 relative flex items-center py-12 lg:py-24 px-[20px]">
      <div className="container flex flex-col gap-14 items-start mx-auto">
        <div className="flex gap-4 items-center justify-center">
          <Shine color="#BAE846" />
          <h4>
            What <span className="font-ramillas italic text-110">we do</span>
          </h4>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <h2>
            Transforming brands with our
            <span className="text-blue dark:text-green px-2.5 py-1.5 rounded-full font-ramillas italic font-bold text-110">
              creative services & expertise
            </span>{" "}
          </h2>
          <p className="lg:px-20">
            Our committed team blends imagination and proficiency to provide
            groundbreaking solutions that distinguish your business. Experience
            excellence with our customized approach to reaching your objectives.
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto py-16 px-4 flex flex-col items-center">
          <div className="w-full relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-3  gap-12 items-center justify-between w-full py-[60px] bg-main sticky top-0 border-t first:border-none  border-white border-opacity-20"
              >
                <div className="flex items-center">
                  <h3 className="font-semibold">
                    <span className="font-light italic">{service.number} </span>
                    {service.title}
                  </h3>
                </div>
                <p className="text-95">{service.description}</p>
                <div className="flex justify-end">
                  <Image
                    src={service.imgSrc}
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
            bgColor="bg-main"
            textColor="text-white"
            iconBgColor="bg-pink"
            hoverTextColor="text-white"
            icon={Arrow} // Pasamos el ícono Arrow
            iconFillColor="#ffffff" // El color del ícono es "main"
            rotate={-90}
            href="#"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
