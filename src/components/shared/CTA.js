import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";
import Shine from "@/components/icons/Shine";

function CTA() {
  return (
    <section className="z-40 relative py-4 lg:py-10 flex pr-[20px] lg:pr-[200px] text-main">
      <div className="relative ml-auto bg-pinkSecondary flex flex-col gap-12 items-center w-full h-full justify-center py-12 lg:py-28 z-20 rounded-r-[64px] lg:rounded-r-[120px] bg-[url('/images/bg-lines.svg')] bg-cover">
        <div className="absolute -top-[80px] left-0 w-[80px] h-[80px] bg-[url('/images/substract-pink.svg')] bg-no-repeat bg-contain"></div>
        <div className="absolute -bottom-[80px] left-0 rotate-90 w-[80px] h-[80px] bg-[url('/images/substract-pink.svg')] bg-no-repeat bg-contain"></div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex gap-4 items-center justify-center">
            <Shine color="#DC0073" />
            <h4>
              <span className="font-ramillas italic text-110">Contact</span> us
              now
            </h4>
          </div>
          <h2 className="text-center relative">
            Let's make <br />
            <span className="font-ramillas italic font-extrabold text-110">
              <span className="w-full h-4 bg-green bottom-0 inline-block absolute -z-10"></span>
              magic happen!
            </span>
          </h2>
        </div>
        <Button
          text="Let's talk"
          bgColor="bg-black"
          textColor="text-white"
          iconBgColor="bg-pink"
          iconFillColor="white"
          hoverTextColor="text-white"
          href="/contact"
          rotate={-90}
          icon={Arrow}
        />
      </div>
    </section>
  );
}

export default CTA;
