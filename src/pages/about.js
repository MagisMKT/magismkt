import HeroSection from "../components/about/HeroSection";
import Mission from "@/components/shared/Mission";
import { getMarkdownContent } from "../lib/markdown"; // Asegúrate de que esta función está bien definida
import Call from "@/components/shared/Call";
import Story from "@/components/about/Story";
import ImageGrid from "@/components/about/ImageGrid";
import Team from "@/components/about/Team";
import Layout from "@/components/Layout";

function About({ whoWeAre,
  teamMembers,
  mission,
  free_session_cta,
  free_session_cta_titles,
  header,
  socialLinks,
  pagesTitles,
  footer
}) {
  return (
    <Layout header={header} socialLinks={socialLinks} pagesTitles={pagesTitles} footer={footer}>
      <div className="relative">
        <HeroSection whoWeAre={whoWeAre} />
        <Story whoWeAre={whoWeAre} />
        <Team whoWeAre={whoWeAre} teamMembers={teamMembers} />
        <Mission mission={mission} />
        <ImageGrid />
        <Call free_session_cta={free_session_cta} free_session_cta_titles={free_session_cta_titles} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const whoWeAre = await getMarkdownContent("about");
  const WhoWeAre = whoWeAre[locale];
  const mission = await getMarkdownContent("mission");
  console.log('Mision:', mission);

  const localizedMission = mission[locale];

  // Mapear los miembros del equipo y obtener sus roles localizados
  const teamMembers = whoWeAre["en"].teamMembers.map((member) => ({
    name: member.name,
    fullName: member.fullName,
    role: member.role[locale], // Obtenemos el rol según el idioma
    photo: member.photo,
    video: member.video,
  }));
  const free_session_ctaMD = await getMarkdownContent("free_session_cta");
  const free_session_cta_titles = free_session_ctaMD[locale];
  const free_session_cta = {
    avatarPhoto: free_session_ctaMD["en"].avatarPhoto,
    buttonLink: free_session_ctaMD["en"].buttonLink,
  }
   // Cargar datos del header y enlaces sociales
   const header = await getMarkdownContent("header");
   const socialLinks = await getMarkdownContent("social_links");
   const pagesTitles = await getMarkdownContent("pages_titles")
   const footer = await getMarkdownContent("footer")
 

  return {
    props: {
      teamMembers, // Pasamos solo los miembros procesados
      whoWeAre: WhoWeAre, // Opcional si necesitas otros datos
      mission: localizedMission,
      free_session_cta_titles,
      free_session_cta,
      header: header[locale],
      socialLinks: socialLinks[locale],
      pagesTitles: pagesTitles[locale],
      footer: footer[locale]
    },
  };
}

export default About;
