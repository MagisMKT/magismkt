import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";

function Story({ whoWeAre }) {
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
            {whoWeAre.storyTitlePart1} <span className="font-ramillas italic text-110">{whoWeAre.storyTitlePart2}</span>
          </h4>
        </div>
        <h2>
          {whoWeAre.storySubtitlePart1}
          <span className="text-pink dark:text-pink font-ramillas italic font-bold text-110">
            <span className="text-pinkSecondary">{whoWeAre.storySubtitlePart2}</span>
            <br />
            {whoWeAre.storySubtitlePart3}
          </span>{" "}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-24">
          <p className="font-ramillas italic text-lg lg:text-2xl font-light !leading-relaxed">
            {whoWeAre.storyParagraph1}
          </p>
          <p className="font-ramillas italic text-lg lg:text-2xl font-light !leading-relaxed">
            {whoWeAre.storyParagraph2}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
