import ContactForm from "./ContactForm";
import Shine from "../icons/Shine";

function ContactSection() {
  return (
    <section className="flex justify-center min-h-[80vh] items-center px-[20px]">
      <div className="container pt-36 pb-12 lg:pt-40  max-w-[1200px] flex flex-col gap-8 lg:gap-12">
        <div className="flex gap-4 items-center">
          <Shine color="#DC0073" />
          <h4>
            Contact <span className="font-ramillas italic text-110">Us</span>
          </h4>
        </div>
        <h5>
          Let's grow
          <span className="text-main bg-green inline px-1.5 lg:px-2.5 py-0.25 lg:py-1.5 -z-10 relative rounded-full font-ramillas italic font-bold text-110 ">
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
