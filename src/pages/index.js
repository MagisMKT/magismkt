import HeroSection from "../components/HeroSection";

export default function Home({ content }) {
  return (
    <div>
      <HeroSection title={content.title} subtitle={content.subtitle} />
    </div>
  );
}

export async function getStaticProps() {
  // Aquí agregarías el código para traer el contenido desde Decap CMS
  // Simulando contenido estático
  return {
    props: {
      content: {
        title: "Welcome to Our Agency",
        subtitle: "Providing the best business solutions.",
      },
    },
  };
}
