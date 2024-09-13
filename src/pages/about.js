import HeroSection from "../components/about/HeroSection";
import Mission from "@/components/shared/Mission";
import { getMarkdownContent } from "../lib/markdown"; // Asegúrate de que esta función está bien definida
import Call from "@/components/shared/Call";
import Story from "@/components/about/Story";
import ImageGrid from "@/components/about/ImageGrid";
import Team from "@/components/about/Team";

function About() {
  return (
    <div className="relative">
      <HeroSection />
      <Story />
      <Team />
      <Mission />
      <ImageGrid />
      <Call />
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

export default About;
