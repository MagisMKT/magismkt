import React from "react";

function HeroSection({ hero }) {
  return (
    <div className="bg-blue-500 text-white text-center p-8">
      <h1 className="text-3xl font-bold">
        {hero.word1} {hero.word2} {hero.word3}
      </h1>
      <h2>
        {hero.subtitlePart1} - {hero.subtitlePart2}
      </h2>
      <p>{hero.ctaText}</p>
      <video width="100%" height="auto" controls>
        <source src={hero.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HeroSection;
