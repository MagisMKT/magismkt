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
import Logo from "@/components/Logo";
import { test } from "gray-matter";

function HomePage({ home, video, whoWeAre, services, mission, testimonialsTitles, testimonials}) {
  return (
    <div className="relative">
      <HeroSection home={home} video={video} />
      <WhoWeAre home={home} whoWeAre={whoWeAre} />
      <Services home={home} services={services} />
      <Mission mission={mission} />
      <OurClients  />
      <Call />
      <Testimonials testimonialsTitles={testimonialsTitles} testimonials={testimonials} />
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
  }));


  

  // Seleccionamos el contenido basado en el idioma
  const localizedContent = home[locale]; // Asume que los campos tienen un objeto con las traducciones
  const WhoWeAre = whoWeAre[locale]; // Asume que los campos tienen un objeto con las traducciones
  return {
    props: {
      home: localizedContent, // Cargamos solo el contenido relevante para el idioma
      video: video,
      whoWeAre: WhoWeAre,
      services: services,
      mission: localizedMission,
      testimonialsTitles: testimonialsMD[locale],
      testimonials: testimonials


    },
  };
}

export default HomePage;
