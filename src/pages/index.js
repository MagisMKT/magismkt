// pages/index.js
import HeroSection from "../components/home/HeroSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import Services from "@/components/home/Services";
import Mission from "@/components/shared/Mission";
import { getMarkdownContent } from "../lib/markdown"; // Asegúrate de que esta función está bien definida
import OurClients from "@/components/home/OurClients";
import Call from "@/components/shared/Call";
import Testimonials from "@/components/shared/Testimonials";
import CTA from "@/components/shared/CTA";

function HomePage({ home, video, whoWeAre, mission}) {
  return (
    <div className="relative">
      <HeroSection home={home} video={video} />
      <WhoWeAre home={home} whoWeAre={whoWeAre} />
      <Services home={home} />
      <Mission mission={mission} />
      <OurClients />
      <Call />
      <Testimonials />
      <CTA />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const home = await getMarkdownContent("home");
  const video = await getMarkdownContent("video");
  const whoWeAre = await getMarkdownContent("who_we_are");
  const mission = await getMarkdownContent("mission");
  const localizedMission = mission[locale];

  // Seleccionamos el contenido basado en el idioma
  const localizedContent = home[locale]; // Asume que los campos tienen un objeto con las traducciones
  const WhoWeAre = whoWeAre[locale]; // Asume que los campos tienen un objeto con las traducciones
  return {
    props: {
      home: localizedContent, // Cargamos solo el contenido relevante para el idioma
      video: video,
      whoWeAre: WhoWeAre,
      mission: localizedMission,

    },
  };
}

export default HomePage;
