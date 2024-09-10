function HeroSection({ hero }) {
  return (
    <div className="bg-blue-500 text-white text-center p-8">
      <h1 className="text-3xl font-bold">
        {hero.word1} {hero.word2} {hero.word3}
      </h1>
      <h2>
        {hero.subtitlePart1} {hero.subtitlePart2}
      </h2>
      <p>{hero.ctaText}</p>
    </div>
  );
}

export default HeroSection;
