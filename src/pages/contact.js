import { getMarkdownContent } from "../lib/markdown";
import ContactSection from "@/components/contact/ContactSection";
import Call from "@/components/shared/Call";
import Layout from "@/components/Layout";

function ContactPage({ contact,
  contactForm,
  free_session_cta_titles,
  free_session_cta,
  header,
  socialLinks,
  pagesTitles,
  footer
}) {
  return (
    <Layout header={header} socialLinks={socialLinks} pagesTitles={pagesTitles} footer={footer}>
      <div className="relative">
        <ContactSection contact={contact} contactForm={contactForm} />
        <Call free_session_cta={free_session_cta} free_session_cta_titles={free_session_cta_titles} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {

  const free_session_ctaMD = await getMarkdownContent("free_session_cta");
  const free_session_cta_titles = free_session_ctaMD[locale];
  const free_session_cta = {
    avatarPhoto: free_session_ctaMD["en"].avatarPhoto,
    buttonLink: free_session_ctaMD["en"].buttonLink,
  }
  const contact = await getMarkdownContent("contact");
  // const contactForm = contact["en"].form.fullname[locale];
  const form = contact["en"];
  const contactForm = {
    name: contact["en"].form.fullname[locale],
    email: contact["en"].form.email[locale],
    phoneNumber: contact["en"].form.phoneNumber[locale],
    companyName: contact["en"].form.companyName[locale],
    services: contact["en"].form.services[locale],
    servicesOptions: contact["en"].form.serviceOptions[locale],
    budget: contact["en"].form.budget[locale],
    budgetOptions: contact["en"].form.budgetOptions[locale],
    projectDetails: contact["en"].form.projectDetails[locale],
    projectDetailsPlaceholder: contact["en"].form.projectDetailsPlaceholder[locale]
  };
  // Cargar datos del header y enlaces sociales
  const header = await getMarkdownContent("header");
  const socialLinks = await getMarkdownContent("social_links");
  const pagesTitles = await getMarkdownContent("pages_titles")
  const footer = await getMarkdownContent("footer")


  return {
    props: {

      free_session_cta_titles,
      free_session_cta,
      contact: contact[locale],
      contactForm,
      header: header[locale],
      socialLinks: socialLinks[locale],
      pagesTitles: pagesTitles[locale],
      footer: footer[locale]
    },
  };
}

export default ContactPage;
