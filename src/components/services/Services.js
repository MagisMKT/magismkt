import React from "react";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Branding",
    description:
      "Crafting unique brand identities that resonate with your target audience and differentiate you in the market.",
    imgSrc: "/images/s_branding.svg",
    subServices: [
      "Branding & Positioning",
      "Art Direction",
      "Packaging & Collateral",
      "Responsive Web Design",
    ],
  },
  {
    number: "02",
    title: "Marketing",
    description:
      "Implementing strategic marketing campaigns to boost your brand visibility and drive business growth.",
    imgSrc: "/images/s_marketing.svg",
    subServices: [
      "Social Media Management",
      "Digital Strategy",
      "Content Creation",
      "Marketing Planning & Budgeting",
      "Advertising",
    ],
  },
  {
    number: "03",
    title: "Public Relations",
    description:
      "Managing your public image and building strong relationships with media and stakeholders.",
    imgSrc: "/images/s_public-relations.svg",
    subServices: [
      "Media Relations",
      "Crisis Management",
      "Corporate Communications",
      "Event Coordination",
    ],
  },
  {
    number: "04",
    title: "Workshops",
    description:
      "Providing engaging and informative workshops to enhance skills and knowledge in various areas of marketing and branding.",
    imgSrc: "/images/s_workshops.svg",
    subServices: [
      "Marketing Fundamentals",
      "Branding Strategy",
      "Social Media Tactics",
      "Design Thinking",
    ],
  },
];

function Services({ home }) {
  return (
    <section className="min-h-[90vh] z-40 relative flex items-center py-12 lg:py-24 px-[20px]">
      <div className="container flex flex-col gap-14 items-start mx-auto">
        <div className="max-w-[1400px] mx-auto py-16 px-4 flex flex-col items-center">
          <div className="w-full relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`sticky top-0 bg-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between w-full py-[60px] bg-main border-t first:border-none border-white border-opacity-20`}
              >
                {/* Controlamos el orden con lg:order-1 y lg:order-2 */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  } flex justify-end`}
                >
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    width={600}
                    height={600}
                    className="object-contain"
                  />
                </div>

                <div
                  className={`${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  } flex flex-col gap-8`}
                >
                  <h3 className="font-semibold">
                    <span className="font-light italic">{service.number} </span>
                    {service.title}
                  </h3>
                  <p className="opacity-80">{service.description}</p>

                  {/* Lista de subservicios */}
                  {service.subServices && (
                    <ul className="list-none text-xl space-y-0.5">
                      {service.subServices.map((subService, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-white font-semibold tracking-tight"
                        >
                          {subService}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
