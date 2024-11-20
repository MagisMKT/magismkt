import HeroSection from "@/components/services/HeroSection";
import Services from "@/components/services/Services";
import { getMarkdownContent } from "../lib/markdown";
import Testimonials from "@/components/shared/Testimonials";
import CTA from "@/components/shared/CTA";

function ServicesPage({ services, testimonialsTitles, testimonials }) {
  return (
    <div className="relative">
      <HeroSection />
      <Services services={services} />
      <Testimonials testimonialsTitles={testimonialsTitles} testimonials={testimonials} />
      <CTA />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  // const home = await getMarkdownContent(`home_${locale}`);
  const testimonialsMD = await getMarkdownContent("testimonials");
  const testimonials = testimonialsMD["en"].testimonials.map((testimonial) => ({
    name: testimonial.testimonialName,
    logo: testimonial.testimonialImage,
    text: testimonial.testimonialText[locale],
    role: testimonial.testimonialRole

  }));

  const serviceMD = await getMarkdownContent("services");
  const services = serviceMD["en"].services.map((service) => ({
    number: service.number,
    title: service.title[locale],
    description: service.description[locale],
    img: service.img,
    subServices: service.subServices.map((subService) => ({
      name: subService.name[locale], // Accede al nombre según el idioma
    })),
  }));

  return {
    props: {
      services: services,
      testimonialsTitles: testimonialsMD[locale],
      testimonials: testimonials
    },
  };
}

export default ServicesPage;
