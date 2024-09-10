// pages/index.js
import HeroSection from "../components/HeroSection";
import { getMarkdownContent } from "../lib/markdown"; // Asegúrate de que esta función está bien definida

function HomePage({ hero }) {
  return (
    <div>
      <HeroSection hero={hero} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const hero = await getMarkdownContent(`home_${locale}`);
  return {
    props: {
      hero,
    },
  };
}

export default HomePage;
