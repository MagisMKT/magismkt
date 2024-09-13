import ContactForm from "./ContactForm";
import Shine from "../icons/Shine";

function ContactSection() {
  return (
    <section className="flex justify-center min-h-[80vh] items-center">
      <div className="container py-12 lg:py-32 max-w-[1200px] flex flex-col gap-10">
        <div className="flex gap-4">
          <Shine color="#DC0073" />
          <h4>
            Contact <span className="font-ramillas italic text-110">Us</span>
          </h4>
        </div>
        <h5>
          Let's grow
          <span className="text-main bg-green inline px-2.5 py-1.5 rounded-full font-ramillas italic font-bold text-110">
            your sales!
          </span>{" "}
        </h5>
        <p className="lg:max-w-3xl opacity-80">
          We are eager to assist in finding the best strategies to grow your
          business. Reach out to us for more information about our services.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
