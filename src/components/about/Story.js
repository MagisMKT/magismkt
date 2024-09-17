import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";

function Story() {
  return (
    <section className="min-h-[90vh] z-40 relative -mt-[13vh] flex flex-col justify-center items-center pt-48 lg:py-12 px-[20px]">
      <div className="absolute top-0 dark:bg-[url('/images/curve.svg')] bg-[url('/images/curve_light.svg')] min-h-[13vh] bg-[length:100vw] bg-bottom w-full z-20 bg-no-repeat"></div>
      <Image
        src="/images/logo_separator.svg"
        width="120"
        height="120"
        className="dark:visible z-30 absolute top-[60px] left-auto right-auto w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]"
      />
      <Image
        src="/images/logo_separator_light.svg"
        width="120"
        height="120"
        className="dark:hidden z-30 absolute top-[60px] left-auto right-auto w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]"
      />
      <div className="container flex flex-col gap-8 lg:gap-14 items-start mx-auto max-w-[1400px] dark:bg-main bg-light ">
        <div className="flex gap-4 items-center justify-center">
          <Shine color="#0074D9" />
          <h4>
            Our <span className="font-ramillas italic text-110">Story</span>
          </h4>
        </div>
        <h2>
          Driving Success with a{" "}
          <span className="text-pink dark:text-pink font-ramillas italic font-bold text-110">
            <span className="text-pinkSecondary">Feminine Touch:</span>
            <br />
            Meet Magis Marketing
          </span>{" "}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-24">
          <p className="font-ramillas italic text-lg lg:text-2xl font-light !leading-relaxed">
            Founded in 2019 and based in Texas, Magis has embarked on an
            incredible journey marked by challenges and obstacles. Through it
            all, our team has risen to the occasion, demonstrating resilience,
            creativity, and unwavering dedication. Our story is one of
            perseverance, driven by a passion for delivering exceptional
            marketing, branding, and PR services.
          </p>
          <p className="font-ramillas italic text-lg lg:text-2xl font-light !leading-relaxed">
            From our humble beginnings to the dynamic agency we are today, every
            step of the way has been an adventure. Each challenge has made us
            stronger and more committed to achieving outstanding results for our
            clients. At Magis, we believe that every obstacle is an opportunity
            to innovate and excel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
