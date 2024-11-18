import React, { useEffect } from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";

function WhoWeAre({ home }) {


  return (
    <section className="lg:min-h-[70vh] z-40 relative -mt-[13vh] flex justify-center items-end border-b-[0.5px] dark:border-white border-main !border-opacity-20 pt-52 lg:pt-64 px-[20px]">
      <div className="absolute top-0 dark:bg-[url('/images/curve.svg')] bg-[url('/images/curve_light.svg')] min-h-[13vh] bg-[length:100vw] bg-bottom w-full z-20 bg-no-repeat"></div>
      <Image
        src="/images/logo_separator.svg"
        width="120"
        height="120"
        className="dark:visible z-30 absolute top-[60px] 3xl:top-[130px] left-auto right-auto w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]"
      />
      <Image
        src="/images/logo_separator_light.svg"
        width="120"
        height="120"
        className="dark:hidden z-30 absolute top-[60px] 3xl:top-[130px] left-auto right-auto w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]"
      />
      <div className="container text-center flex flex-col gap-8 lg:gap-14 justify-center items-center mx-auto max-w-3xl">
        <div className="flex gap-4 items-center">
          <Shine />
          <h4 dangerouslySetInnerHTML={{
            __html: home.whoWeAreTitle.replace(/`/g, ''), // Elimina las comillas inversas si están presentes
          }}/>
        </div>
        {/* <h2>
          We are a{" "}
          <span className="text-main bg-pink inline px-2.5 py-1.5 rounded-full font-ramillas italic font-bold text-110">
            100% women-led
          </span>{" "}
          multidisciplinary team.
        </h2> */}
        <h2 dangerouslySetInnerHTML={{
          __html: home.whoWeAreSubtitle.replace(/`/g, ''),
        }}></h2>
        <p dangerouslySetInnerHTML={{
          __html: home.whoWeAreParagraph.replace(/`/g, ''),
        }}>
          
        </p>
        <Button
          text={home.whoWeAreButtonText}
          bgColor="dark:bg-main bg-light"
          textColor="dark:text-white text-main"
          iconBgColor="bg-pink"
          hoverTextColor="text-white"
          icon={Arrow} // Pasamos el ícono Arrow
          iconFillColor="#ffffff" // El color del ícono es "main"
          rotate={-90}
          href="/about"
        />

        <Image
          src="/images/about.png"
          width={1350}
          height={650}
          className="bottom-0 h-full w-full object-contain -mt-20 lg:-mt-28"
        />
      </div>
    </section>
  );
}

export default WhoWeAre;
