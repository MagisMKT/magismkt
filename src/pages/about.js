import HeroSection from "../components/about/HeroSection";
import Mission from "@/components/shared/Mission";
import { getMarkdownContent } from "../lib/markdown"; // Asegúrate de que esta función está bien definida
import Call from "@/components/shared/Call";
import Story from "@/components/about/Story";
import ImageGrid from "@/components/about/ImageGrid";
import Team from "@/components/about/Team";

function About({ whoWeAre, teamMembers, mission }) {
  return (
    <div className="relative">
      <HeroSection whoWeAre={whoWeAre}/>
      <Story whoWeAre={whoWeAre}/>
      <Team whoWeAre={whoWeAre} teamMembers={teamMembers}/>
      <Mission mission={mission}/>
      <ImageGrid />
      <Call />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const whoWeAre = await getMarkdownContent("who_we_are");
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

  return {
    props: {
      teamMembers, // Pasamos solo los miembros procesados
      whoWeAre: WhoWeAre, // Opcional si necesitas otros datos
      mission:localizedMission,
    },
  };
}

export default About;
