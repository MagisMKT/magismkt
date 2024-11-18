import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";
import Close from "@/components/icons/Close";

function HeroSection({ home, video }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    console.log(video);
  }, [video]);


  // Función para manejar el cierre con la tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // URL del video con autoplay
  const videoUrl = isVideoOpen
    ? "https://www.youtube.com/embed/s3SVUFwNun8?autoplay=1&si=vuhMutNccdNqgYOR&rel=0&controls=0"
    : "https://www.youtube.com/embed/s3SVUFwNun8?si=vuhMutNccdNqgYOR";
  // const videoUrl = '/images/video.mp4';

  return (
    <section className="relative flex justify-center w-full">
      <div className="sticky top-0 z-20 text-white text-left pt-48 pb-24 lg:pb-8 lg:pt-8 lg:p-8 min-[70vh] lg:min-h-[113vh] flex flex-col justify-center items-center w-full">
        {/* Video Background */}
        <video
          width="100%"
          height="auto"
          loop
          autoPlay
          muted
          className="absolute h-full w-full top-0 left-0 object-cover z-10"
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-mainSecondary to-transparent bg-opacity-80 z-20"></div>

        {/* Content */}
        <div className="relative z-30 max-w-4xl px-4 flex flex-col justify-center text-center w-full">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold leading-tight mb-4 tracking-tighter lg:-ml-64">
            {home.word1}
          </h1>
          <div className="flex gap-4 lg:gap-8 justify-end items-center mb-4">
            {/* Subtitle */}
            <h2 className="text-lg md:text-2xl lg:text-3xl !leading-none font-medium text-right w-4/6">
              <span className="!leading-none">{home.subtitlePart1}</span>{" "}
              <span className="text-green font-ramillas italic font-medium text-110 !leading-none">
                {home.subtitlePart2}
              </span>
            </h2>
            <h1 className="block sm:inline font-ramillas font-extrabold italic text-4xl md:text-6xl lg:text-9xl">
              <span className="text-105">{home.word2}</span>
            </h1>
          </div>

          <div className="flex gap-4 lg:gap-10 items-center justify-center ">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold leading-tight">
              {home.word3}
            </h1>
            {/* Video Play Button */}
            <div
              className="flex items-center cursor-pointer hover:text-pinkSecondary transition duration-300 fill-white hover:fill-main"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 45C35.4264 45 45.5 34.9264 45.5 22.5C45.5 10.0736 35.4264 0 23 0C10.5736 0 0.5 10.0736 0.5 22.5C0.5 34.9264 10.5736 45 23 45ZM17.2371 14.8592C17.2371 13.8629 18.3212 13.2452 19.1783 13.7531L32.0716 21.3936C32.912 21.8916 32.912 23.1078 32.0716 23.6058L19.1783 31.2463C18.3212 31.7542 17.2371 31.1364 17.2371 30.1402V14.8592Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="ml-2.5 hidden lg:flex">{home.ctaVideoText}</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4 mt-14 mx-auto">
            <Button
              text={home.ctaText}
              bgColor="bg-black"
              textColor="text-white"
              iconBgColor="bg-green"
              href="#services"
              icon={Arrow}
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <iframe
              width="95%"
              height="auto"
              className="aspect-video outline-0! rounded-[24px]"
              src={videoUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsVideoOpen(false)}
            >
              <Close />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
