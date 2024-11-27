import ContactForm from "./ContactForm";
import Shine from "../icons/Shine";

function ContactSection({ contact, contactForm }) {
  console.log("contact", contactForm);
  return (
    <section className="flex justify-center min-h-[80vh] items-center px-[20px]">
      <div className="container pt-36 pb-12 lg:pt-40  max-w-[1200px] flex flex-col gap-8 lg:gap-12">
        <div className="flex gap-4 items-center">
          <Shine color="#DC0073" />
          <h4 dangerouslySetInnerHTML={{ __html: contact.contactTitle.replace(/`/g, ''), }} />
        </div>
        <h5 dangerouslySetInnerHTML={{ __html: contact.contactSubtitle }} />
        <p className="lg:max-w-3xl opacity-80">
          {contact.contactParagraph}
        </p>

        <ContactForm contactForm={contactForm} contact={contact}/>
      </div>
    </section>
  );
}

export default ContactSection;
