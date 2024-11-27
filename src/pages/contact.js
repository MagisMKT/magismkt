import { getMarkdownContent } from "../lib/markdown";
import ContactSection from "@/components/contact/ContactSection";
import Call from "@/components/shared/Call";

function ContactPage({ contact, contactForm, free_session_cta_titles, free_session_cta,  }) {
  return (
    <div className="relative">
      <ContactSection contact={contact} contactForm={contactForm} />
      <Call free_session_cta={free_session_cta} free_session_cta_titles={free_session_cta_titles} />
    </div>
  );
}

export async function getStaticProps({ locale }) {

  const  free_session_ctaMD = await getMarkdownContent("free_session_cta");
  const free_session_cta_titles = free_session_ctaMD[locale];
  const free_session_cta = {
    avatarPhoto: free_session_ctaMD["en"].avatarPhoto,
    buttonLink: free_session_ctaMD["en"].buttonLink,
  }
  const contact = await getMarkdownContent("contact");
  // const contactForm = contact["en"].form.fullname[locale];
  const form = contact["en"];
  const contactForm = {
    name:  contact["en"].form.fullname[locale],
    email: contact["en"].form.email[locale],
    phoneNumber: contact["en"].form.phoneNumber[locale],
    companyName: contact["en"].form.companyName[locale],
    services: contact["en"].form.services[locale],
    servicesOptions: contact["en"].form.serviceOptions[locale],
    budget: contact["en"].form.budget[locale],
    budgetOptions: contact["en"].form.budgetOptions[locale],
    projectDetails:  contact["en"].form.projectDetails[locale],
    projectDetailsPlaceholder:  contact["en"].form.projectDetailsPlaceholder[locale]
  };
  // console.log('contactForm:', contactForm);

  return {
    props: {

      free_session_cta_titles,
      free_session_cta,
      contact: contact[locale],
      contactForm
    },
  };
}

export default ContactPage;
