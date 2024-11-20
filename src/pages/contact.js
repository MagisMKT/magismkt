import { getMarkdownContent } from "../lib/markdown";
import ContactSection from "@/components/contact/ContactSection";
import Call from "@/components/shared/Call";

function ContactPage({ free_session_cta_titles, free_session_cta }) {
  return (
    <div className="relative">
      <ContactSection />
      <Call free_session_cta={free_session_cta} free_session_cta_titles={free_session_cta_titles} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const home = await getMarkdownContent(`home_${locale}`);
  const  free_session_ctaMD = await getMarkdownContent("free_session_cta");
  const free_session_cta_titles = free_session_ctaMD[locale];
  const free_session_cta = {
    avatarPhoto: free_session_ctaMD["en"].avatarPhoto,
    buttonLink: free_session_ctaMD["en"].buttonLink,
  }

  return {
    props: {
      home,
      free_session_cta_titles,
      free_session_cta
    },
  };
}

export default ContactPage;
