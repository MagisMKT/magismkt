import HeroSection from "@/components/services/HeroSection";
import Services from "@/components/services/Services";
import { getMarkdownContent } from "../lib/markdown";
import Testimonials from "@/components/shared/Testimonials";
import CTA from "@/components/shared/CTA";

function ServicesPage({ what_we_do,services, testimonialsTitles, testimonials, main_cta }) {
  return (
    <div className="relative">
      <HeroSection what_we_do={what_we_do} />
      <Services services={services} />
      <Testimonials testimonialsTitles={testimonialsTitles} testimonials={testimonials} />
      <CTA main_cta={main_cta} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  // const home = await getMarkdownContent(`home_${locale}`);
  const what_we_do = await getMarkdownContent("what_we_do");
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
  const main_cta = await getMarkdownContent("main_cta");


  return {
    props: {
      what_we_do: what_we_do[locale],
      services: services,
      testimonialsTitles: testimonialsMD[locale],
      testimonials: testimonials,
      main_cta: main_cta[locale],
    },
  };
}

export default ServicesPage;
