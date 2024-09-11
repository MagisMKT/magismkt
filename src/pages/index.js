// pages/index.js
import HeroSection from "../components/home/HeroSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import Services from "@/components/home/Services";
import { getMarkdownContent } from "../lib/markdown"; // Asegúrate de que esta función está bien definida

function HomePage({ home }) {
  return (
    <div className="relative">
      <HeroSection home={home} />
      <WhoWeAre home={home} />
      <Services home={home} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const home = await getMarkdownContent(`home_${locale}`);
  return {
    props: {
      home,
    },
  };
}

export default HomePage;
