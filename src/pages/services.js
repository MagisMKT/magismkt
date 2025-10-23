import Layout from "@/components/Layout";
import HeroSection from "@/components/services/HeroSection";
import Services from "@/components/services/Services";
import Testimonials from "@/components/shared/Testimonials";
import CTA from "@/components/shared/CTA";
import { getMarkdownContent } from "../lib/markdown";

function ServicesPage({
  what_we_do,
  services,
  testimonialsTitles,
  testimonials,
  main_cta,
  header,
  socialLinks,
  pagesTitles,
  footer,
}) {
  return (
    <Layout
      header={header}
      socialLinks={socialLinks}
      pagesTitles={pagesTitles}
      footer={footer}
    >
      <div className="relative">
        <HeroSection what_we_do={what_we_do} />
        <Services services={services} />
        <Testimonials
          testimonialsTitles={testimonialsTitles}
          testimonials={testimonials}
        />
        <CTA main_cta={main_cta} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const whatWeDoMD = await getMarkdownContent("what_we_do");
  const testimonialsMD = await getMarkdownContent("testimonials");
  const servicesMD = await getMarkdownContent("services"); // ⬅️ ahora tiene { services: [...] } en la raíz
  const mainCtaMD = await getMarkdownContent("main_cta");
  const headerMD = await getMarkdownContent("header");
  const socialLinksMD = await getMarkdownContent("social_links");
  const pagesTitlesMD = await getMarkdownContent("pages_titles");
  const footerMD = await getMarkdownContent("footer");

  // helper simple para fallback
  const pick = (obj) => (obj?.[locale] ? locale : "en");

  const L_test = pick(testimonialsMD);
  const testimonials = (testimonialsMD?.[L_test]?.testimonials ?? []).map(
    (t) => ({
      name: t.testimonialName,
      logo: t.testimonialImage,
      text: t.testimonialText?.[L_test] ?? "",
      role: t.testimonialRole,
    }),
  );

  // ⬇️ AHORA leemos desde la RAÍZ: servicesMD.services
  const services = (servicesMD?.services ?? []).map((s) => ({
    number: s.number,
    title: s.title?.[locale] ?? s.title?.en ?? "",
    description: s.description?.[locale] ?? s.description?.en ?? "",
    img: s.img,
    subServices: (s.subServices ?? []).map((ss) => ({
      name: ss.name?.[locale] ?? ss.name?.en ?? "",
    })),
  }));

  return {
    props: {
      what_we_do: whatWeDoMD?.[pick(whatWeDoMD)] ?? {},
      services,
      testimonialsTitles: testimonialsMD?.[L_test] ?? {},
      testimonials,
      main_cta: mainCtaMD?.[pick(mainCtaMD)] ?? {},
      header: headerMD?.[pick(headerMD)] ?? {},
      socialLinks: socialLinksMD?.[pick(socialLinksMD)] ?? {},
      pagesTitles: pagesTitlesMD?.[pick(pagesTitlesMD)] ?? {},
      footer: footerMD?.[pick(footerMD)] ?? {},
    },
    revalidate: 60,
  };
}

export default ServicesPage;
