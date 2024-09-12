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

function HomePage({ home }) {
  return (
    <div className="relative">
      <HeroSection home={home} />
      <WhoWeAre home={home} />
      <Services home={home} />
      <Mission />
      <OurClients />
      <Call />
      <Testimonials />
      <CTA />
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
