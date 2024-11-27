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
import Layout from "@/components/Layout";

function HomePage({ 
  home, 
  video, 
  whoWeAre, 
  services, 
  mission, 
  testimonialsTitles, 
  testimonials, 
  free_session_cta_titles, 
  free_session_cta, 
  main_cta,
  header,
  socialLinks,
  pagesTitles,
  footer
}) {
  return (
    <Layout header={header} socialLinks={socialLinks} pagesTitles={pagesTitles} footer={footer}>
    <div className="relative">
      <HeroSection home={home} video={video} />
      <WhoWeAre home={home} whoWeAre={whoWeAre} />
      <Services home={home} services={services} />
      <Mission mission={mission} />
      <OurClients home={home} />
      <Call free_session_cta={free_session_cta} free_session_cta_titles={free_session_cta_titles}/>
      <Testimonials testimonialsTitles={testimonialsTitles} testimonials={testimonials} />
      <CTA main_cta={main_cta}/>
    </div>
    </Layout>
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

  const  free_session_ctaMD = await getMarkdownContent("free_session_cta");
  const free_session_cta_titles = free_session_ctaMD[locale];
  const free_session_cta = {
    avatarPhoto: free_session_ctaMD["en"].avatarPhoto,
    buttonLink: free_session_ctaMD["en"].buttonLink,
  }

  const main_cta = await getMarkdownContent("main_cta");

  // Cargar datos del header y enlaces sociales
  const header = await getMarkdownContent("header");
  const socialLinks = await getMarkdownContent("social_links");
  const pagesTitles = await getMarkdownContent("pages_titles")
  const footer = await getMarkdownContent("footer")



  

  // Seleccionamos el contenido basado en el idioma
  const localizedContent = home[locale]; // Asume que los campos tienen un objeto con las traducciones
  const WhoWeAre = whoWeAre[locale]; // Asume que los campos tienen un objeto con las traducciones
  return {
    props: {
      home: localizedContent, // Cargamos solo el contenido relevante para el idioma
      video: video["en"],
      whoWeAre: WhoWeAre,
      services: services,
      mission: localizedMission,
      testimonialsTitles: testimonialsMD[locale],
      testimonials: testimonials,
      free_session_cta_titles: free_session_cta_titles,
      free_session_cta: free_session_cta,
      main_cta: main_cta[locale],
      header: header[locale],
      socialLinks: socialLinks["en"],
      pagesTitles: pagesTitles[locale],
      footer: footer[locale]
    },
  };
}

export default HomePage;
