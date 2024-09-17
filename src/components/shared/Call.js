import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Calendar from "@/components/icons/Calendar";

function Call() {
  return (
    <section className="z-40 relative lg:py-10 flex pl-[20px] lg:pl-[200px]">
      <div className="relative ml-auto bg-green flex flex-col gap-4 items-center w-full h-full justify-center py-10 lg:py-28 px-[20px] z-20 rounded-l-[64px] lg:rounded-l-[120px] bg-[url('/images/bg-lines.svg')] bg-cover">
        <div className="absolute -bottom-[80px] right-0 w-[80px] h-[80px] bg-[url('/images/substract.svg')] bg-no-repeat bg-contain"></div>
        <div className="absolute -top-[80px] right-0 rotate-90 w-[80px] h-[80px] bg-[url('/images/substract.svg')] bg-no-repeat bg-contain"></div>
        <Image
          src="/images/brenda_session.png"
          width="180"
          height="180"
          className="w-[140px] h-[140px] lg:w-[180px] lg:h-[180px]"
        />
        <div className="flex flex-col gap-6 justify-center items-center text-center">
          <h2 className="text-main">
            Get your{" "}
            <span className="font-ramillas italic font-extrabold">
              free 30-minute <br />
              brainstorming session!
            </span>
          </h2>
          <p className="text-main">
            Have a project in mind? Get a 30-minute session with us for free!
          </p>
        </div>
        <Button
          text="Book a free session"
          bgColor="bg-black"
          textColor="text-white"
          iconBgColor="bg-green"
          href="#services"
          icon={Calendar}
        />
      </div>
    </section>
  );
}

export default Call;
