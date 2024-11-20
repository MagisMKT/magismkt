import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";
import Shine from "@/components/icons/Shine";

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

function HeroSection({ what_we_do }) {
  const desktopGridSize = 84; // Grid para pantallas grandes (12x7)
  const mobileGridSize = 36; // Grid para pantallas móviles (6x6)
  const [gridSize, setGridSize] = useState(desktopGridSize);
  const [grid, setGrid] = useState(Array(gridSize).fill(false));
  const [isFading, setIsFading] = useState(Array(gridSize).fill(false)); // Para controlar el fade-out

  // Detectar cambios de tamaño de pantalla y ajustar gridSize dinámicamente
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setGridSize(mobileGridSize); // Pantallas móviles
      } else {
        setGridSize(desktopGridSize); // Pantallas grandes
      }
    };

    handleResize(); // Ajustar el grid al cargar por primera vez
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño de ventana

    return () => window.removeEventListener("resize", handleResize); // Cleanup al desmontar
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const activeIndexes = getRandomIndexes(
        gridSize,
        3 + Math.floor(Math.random() * 3), // Entre 3 y 5 cuadros activos
      );

      // Paso 1: Fade out
      setIsFading(Array(gridSize).fill(true));

      // Paso 2: Después de una pequeña espera, cambiar el fondo y hacer fade-in
      setTimeout(() => {
        setGrid(grid.map((_, idx) => activeIndexes.includes(idx)));
        setIsFading(Array(gridSize).fill(false));
      }, 1000); // Esperar 1000ms antes de cambiar el fondo
    }, 3000); // Ajustar el tiempo para el ciclo completo

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, [gridSize]); // Escuchar cambios en gridSize

  return (
    <section className="relative z-20 text-left py-48 p-[20px] lg:p-8 lg:min-h-[100vh] flex flex-col justify-center items-center w-full">
      {/* Content */}
      <div className="relative z-30 px-4 flex flex-col gap-8 lg:gap-14 w-full mx-auto max-w-7xl">
        <div className="flex gap-4 max-w-full items-center">
          <Shine color="#BAE846" />
          <h4 dangerouslySetInnerHTML={{ __html: what_we_do.whatWeDoTitle.replace(/`/g, ''),}} />
        </div>
        <h5 className="max-w-full" dangerouslySetInnerHTML={{ __html: what_we_do.whatWeDoSubtitle.replace(/`/g, ''), }} />

        <div className="flex items-center">
          <Button
            text={what_we_do.whatWeDoTextButton}
            bgColor="bg-black"
            textColor="text-white"
            iconBgColor="bg-green"
            href="#services"
            icon={Arrow}
          />
        </div>
      </div>
      {/* 6x6 Grid en móvil y 12x7 en pantallas grandes */}
      <div
        className={`grid ${
          gridSize === mobileGridSize
            ? "grid-cols-6 grid-rows-6"
            : "grid-cols-12 grid-rows-7"
        } absolute w-full h-full top-0 z-20 left-0`}
      >
        {grid.slice(0, gridSize).map((isGreen, index) => (
          <div
            key={index}
            className="relative w-full h-full border-[0.5px] dark:border-white border-main !border-opacity-5 border-collapse"
          >
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isFading[index] ? "opacity-0" : "opacity-100"
              } ${isGreen ? "bg-pinkSecondary" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
