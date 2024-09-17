import React, { useEffect, useState } from "react";
import Shine from "../icons/Shine";
import Star from "../icons/Star";

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

function Mission() {
  const gridSize = 25; // 5x4 grid
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
    <section className="bg-[url('/images/mission.jpg')] bg-cover bg-center lg:min-h-[100vh] z-40 relative py-12 lg:py-24 flex px-[20px] lg:bg-fixed">
      <div className="container flex flex-col gap-14 items-center m-auto h-full justify-between lg:min-h-[80vh] z-20 relative">
        <div className="flex gap-4 items-center justify-center">
          <Shine />
          <h4 className="text-white">
            Our <span className="font-ramillas italic text-110">mission</span>
          </h4>
        </div>
        <h5 className="text-white inline-flex gap-4 lg:gap-6 flex-wrap justify-center">
          <span className="font-ramillas italic font-bold text-105">Grow</span>{" "}
          your{" "}
          <span className="text-main bg-pink inline px-5 !leading-none rounded-full font-ramillas italic font-bold text-110">
            business
          </span>{" "}
        </h5>
        <div className="flex gap-4 items-center">
          <Star />
          <h4 className="text-white">
            Reject the commonplace
            <br />
            <span className="text-green font-ramillas font-medium text-105">
              & embrace women’s talent.
            </span>{" "}
          </h4>
        </div>
      </div>
      {/* 5x4 Grid */}
      <div className="grid grid-cols-5 grid-rows-4 absolute w-full h-full top-0 z-10 left-0">
        {grid.map((isGreen, index) => (
          <div
            key={index}
            className="relative w-full h-full border-[0.5px] border-white border-opacity-20 border-collapse"
          >
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isFading[index] ? "opacity-0" : "opacity-100"
              } ${
                isGreen
                  ? "bg-green bg-opacity-80"
                  : "bg-[url('/images/bg-lines.svg')] bg-cover bg-center"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mission;
