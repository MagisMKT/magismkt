import React from "react";
import Image from "next/image";

function ImageGrid() {
  return (
    <section className="z-40 relative flex flex-col justify-center items-center py-12 px-[20px]">
      <div className="container grid lg:grid-cols-3 gap-2">
        <Image
          quality={100}
          src="/images/team-grid_3.jpg"
          width={500}
          height={500}
          alt=""
          className="rounded-[32px]"
          quality={100}
        />
        <Image
          quality={100}
          src="/images/team-grid_2.jpg"
          width={500}
          height={500}
          alt=""
          className="rounded-[32px]"
          quality={100}
        />
        <Image
          quality={100}
          src="/images/team-grid_1.jpg"
          width={500}
          height={500}
          alt=""
          className="rounded-[32px]"
          que
          quality={100}
        />
      </div>
    </section>
  );
}

export default ImageGrid;
