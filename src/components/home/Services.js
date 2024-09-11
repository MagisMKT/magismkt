import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";

function Services({ home }) {
  return (
    <section className="min-h-[90vh] z-40 relative flex items-center py-12 lg:py-24 px-[20px]">
      <div className="container flex flex-col gap-14 items-start mx-auto">
        <div className="flex gap-4 items-center">
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
        <Button
          text="More about us"
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
    </section>
  );
}

export default Services;
