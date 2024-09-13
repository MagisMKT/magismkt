import { getMarkdownContent } from "../lib/markdown";
import ContactSection from "@/components/contact/ContactSection";
import Call from "@/components/shared/Call";

function ContactPage() {
  return (
    <div className="relative">
      <ContactSection />
      <Call />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const home = await getMarkdownContent(`home_${locale}`);
  return {
    props: {
      home,
    },
  };
}

export default ContactPage;
