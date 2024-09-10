import React from "react";

function HeroSection({ hero }) {
  return (
    <div className="text-white text-center p-8 min-h-[100vh]">
      <h1 className="text-3xl font-bold">
        {hero.word1} {hero.word2} {hero.word3}
      </h1>
      <h2>
        {hero.subtitlePart1} - {hero.subtitlePart2}
      </h2>
      <p className="font-ramillas italic">{hero.ctaText}</p>
      <video width="100%" height="auto" loop autoPlay muted>
        <source src={hero.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HeroSection;
