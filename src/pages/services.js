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
  // Helper para elegir locale con fallback a "en"
  const pickLocale = (mdObj) => (mdObj?.[locale] ? locale : "en");

  // Carga de contenido desde Decap/markdown
  const whatWeDoMD = await getMarkdownContent("what_we_do");
  const testimonialsMD = await getMarkdownContent("testimonials");
  const servicesMD = await getMarkdownContent("services");
  const mainCtaMD = await getMarkdownContent("main_cta");
  const headerMD = await getMarkdownContent("header");
  const socialLinksMD = await getMarkdownContent("social_links");
  const pagesTitlesMD = await getMarkdownContent("pages_titles");
  const footerMD = await getMarkdownContent("footer");

  // Locale por sección (cada fuente puede o no tener el locale)
  const L_what = pickLocale(whatWeDoMD);
  const L_test = pickLocale(testimonialsMD);
  const L_serv = pickLocale(servicesMD);
  const L_cta = pickLocale(mainCtaMD);
  const L_header = pickLocale(headerMD);
  const L_social = pickLocale(socialLinksMD);
  const L_pages = pickLocale(pagesTitlesMD);
  const L_footer = pickLocale(footerMD);

  // Mapear testimonials desde el locale correcto
  const testimonials = (testimonialsMD?.[L_test]?.testimonials ?? []).map(
    (t) => ({
      name: t.testimonialName,
      logo: t.testimonialImage,
      text: t.testimonialText?.[L_test] ?? t.testimonialText?.en ?? "",
      role: t.testimonialRole,
    }),
  );

  // Mapear services desde el locale correcto
  const services = (servicesMD?.[L_serv]?.services ?? []).map((s) => ({
    number: s.number,
    title: s.title?.[L_serv] ?? s.title?.en ?? "",
    description: s.description?.[L_serv] ?? s.description?.en ?? "",
    img: s.img,
    subServices: (s.subServices ?? []).map((ss) => ({
      name: ss.name?.[L_serv] ?? ss.name?.en ?? "",
    })),
  }));

  return {
    props: {
      what_we_do: whatWeDoMD?.[L_what] ?? {},
      services,
      testimonialsTitles: testimonialsMD?.[L_test] ?? {},
      testimonials,
      main_cta: mainCtaMD?.[L_cta] ?? {},
      header: headerMD?.[L_header] ?? {},
      socialLinks: socialLinksMD?.[L_social] ?? {},
      pagesTitles: pagesTitlesMD?.[L_pages] ?? {},
      footer: footerMD?.[L_footer] ?? {},
    },
    // ISR: refresca cada 60s para ver cambios del CMS
    revalidate: 60,
  };
}

export default ServicesPage;
