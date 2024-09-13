import HeroSection from "@/components/services/HeroSection";
import Services from "@/components/services/Services";
import { getMarkdownContent } from "../lib/markdown";
import Testimonials from "@/components/shared/Testimonials";
import CTA from "@/components/shared/CTA";

function ServicesPage() {
  return (
    <div className="relative">
      <HeroSection />
      <Services />
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

export default ServicesPage;
