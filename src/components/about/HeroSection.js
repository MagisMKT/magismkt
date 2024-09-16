import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";
import Shine from "@/components/icons/Shine";

function getRandomBoolean() {
  return Math.random() > 0.75;
}

function getRandomIndexes(size, numActive) {
  const indexes = [];
  while (indexes.length < numActive) {
    const randomIndex = Math.floor(Math.random() * size);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}
function HeroSection() {
  const gridSize = 84; // 5x4 grid
  const [grid, setGrid] = useState(Array(gridSize).fill(false));
  const [isFading, setIsFading] = useState(Array(gridSize).fill(false)); // To control fade-out before the change

  useEffect(() => {
    const intervalId = setInterval(() => {
      const activeIndexes = getRandomIndexes(
        gridSize,
        3 + Math.floor(Math.random() * 3), // 3 to 5 active squares
      );

      // Step 1: Fade out
      setIsFading(Array(gridSize).fill(true));

      // Step 2: After short delay, change the background and fade back in
      setTimeout(() => {
        setGrid(grid.map((_, idx) => activeIndexes.includes(idx)));
        setIsFading(Array(gridSize).fill(false));
      }, 1000); // Wait 500ms to change background and start fading in
    }, 3000); // Adjust the time for the entire cycle

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section className="relative z-20 text-white text-left p-8 min-h-[100vh] flex flex-col justify-center items-center w-full bg-[url('/images/team.jpg')] bg-cover bg-center bg-fixed">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-main via-[rgba(25,12,19,0.25)] to-transparent bg-opacity-60 z-20"></div>

      {/* Content */}
      <div className="relative z-30 px-4 flex flex-col gap-10 w-full mx-auto max-w-7xl">
        <div className="flex gap-4">
          <Shine color="#DC0073" />
          <h4>
            Who <span className="font-ramillas italic text-110">we are</span>
          </h4>
        </div>
        <h5>
          We are a{" "}
          <span className="text-main bg-pink inline px-2.5 py-1.5 rounded-full font-ramillas italic font-bold text-110">
            100% women-led
          </span>{" "}
          multidisciplinary team.
        </h5>

        <div className="flex items-center">
          <Button
            text="Meet the team"
            bgColor="bg-black"
            textColor="text-white"
            iconBgColor="bg-green"
            href="#services"
            icon={Arrow}
          />
        </div>
      </div>
      {/* 7x5 Grid */}
      <div className="grid grid-cols-12 grid-rows-7 absolute w-full h-full top-0 z-20 left-0">
        {grid.map((isGreen, index) => (
          <div
            key={index}
            className="relative w-full h-full border border-white !border-opacity-5 border-collapse"
          >
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isFading[index] ? "opacity-0" : "opacity-100"
              } ${isGreen ? "bg-green bg-opacity-80" : ""}`}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center absolute bottom-[18vh] z-20">
        <h3
          className="text-pinkSecondary flex items-center gap-2
          "
        >
          Magis <span className="font-light">=</span>
          <span className="text-green font-ramillas font-bold text-105 italic">
            More
          </span>{" "}
          <span className="text-50 font-ramillas font-medium italic text-white tracking-normal -mb-1">
            in Latin
          </span>
        </h3>
      </div>
    </section>
  );
}

export default HeroSection;
