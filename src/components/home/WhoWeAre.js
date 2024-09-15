import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";

function WhoWeAre({ home }) {
  return (
    <section className="min-h-[90vh] z-40 relative -mt-[13vh] flex justify-center items-end border-b border-white border-opacity-20 pt-64 px-[20px]">
      <div className="absolute top-0 dark:bg-[url('/images/curve.svg')] bg-[url('/images/curve_light.svg')] min-h-[13vh] bg-[length:100vw] bg-bottom w-full z-20 bg-no-repeat"></div>
      <Image
        src="/images/logo_separator.svg"
        width="120"
        height="120"
        className="dark:visible z-30 absolute top-[60px] left-auto right-auto"
      />
      <Image
        src="/images/logo_separator_light.svg"
        width="120"
        height="120"
        className="dark:hidden z-30 absolute top-[60px] left-auto right-auto"
      />
      <div className="container text-center flex flex-col gap-14 justify-center items-center mx-auto max-w-3xl">
        <div className="flex gap-4 items-center">
          <Shine />
          <h4>
            Who <span className="font-ramillas italic text-110">we are</span>
          </h4>
        </div>
        <h2>
          We are a{" "}
          <span className="text-main bg-pink inline px-2.5 py-1.5 rounded-full font-ramillas italic font-bold text-110">
            100% women-led
          </span>{" "}
          multidisciplinary team.
        </h2>
        <p>
          Our talented women have risen to every occasion, each member brings a
          unique perspective and skill set.{" "}
          <span className="text-green">
            Together, we empower one another and create a supportive environment
            that drives success for our team and clients.
          </span>
        </p>
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

        <Image
          src="/images/about.png"
          width={1350}
          height={650}
          className="bottom-0 h-full w-full object-contain -mt-28"
        />
      </div>
    </section>
  );
}

export default WhoWeAre;
