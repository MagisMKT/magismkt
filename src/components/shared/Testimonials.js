import React, { useState } from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow"; // Assuming this is the correct path to the Arrow component

const testimonials = [
  {
    logo: "/images/azteca.png",
    name: "Janet Yazdi",
    title: "Owner, Azteca Farmer's Market",
    text: "We've been working with Magis for about a year now and are very pleased with their creative processes and performance. We have been using their Social Media Management, Influencer Marketing, SEO and web design services and they have done a brilliant job!",
  },
  {
    logo: "/images/azteca.svg",
    name: "Marco Gonzalez",
    title: "CEO, The Gonzalez Law Group",
    text: '"Magis has been a great partner of ours and we thoroughly enjoy working with them. They are a friendly, forward thinking business and the synergy we have formed is being vital to growing our business!"',
  },
  {
    logo: "/images/azteca.svg",
    name: "Alex Oyervidez",
    title: "Owner, Alex Transmissions",
    text: "Magis has helped growing our customers and sales dramatically. They're very professional with an amazing service when it comes to advertising.",
  },
  {
    logo: "/images/azteca.svg",
    name: "Efren Gonzalez",
    title: "Owner, Tepatitlan",
    text: "The Magis team is brilliant! They understood our brand and ethos straight away and effectively masterminded the relaunch of our website. They are full of ideas and transparent with their strategy and structure. I'd always recommend Magis.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="min-h-[90vh] z-40 relative flex justify-center items-center py-12 lg:py-24 px-[20px] gap-8">
      <div className="container text-center flex flex-col gap-8 mx-auto max-w-[1200px]">
        <div className="flex gap-4 items-center justify-center">
          <Shine color="#0074d9" />
          <h4>
            <span className="font-ramillas italic text-110">Testimonials</span>
          </h4>
        </div>
        <h2 className="text-blue">
          <span className="text-main dark:text-light">What our</span>{" "}
          <span className="text-110 font-ramillas italic font-extrabold">
            clients say
          </span>
        </h2>

        {/* Testimonial Content with Sliding Transition */}
        <div className="relative overflow-hidden max-w-[1200px]">
          <div
            className="flex transition-transform duration-1000 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full gap-8 flex">
                <div className="border border-white border-opacity-20  text-left rounded-[64px] p-24 flex flex-col gap-8 min-h-[200px] mx-[20px] lg:mx-[40px]">
                  <div className="flex items-center gap-8">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.name}
                      width={110}
                      height={110}
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-green font-ramillas italic">
                        {testimonial.name}
                      </h4>
                      <p>{testimonial.title}</p>
                    </div>
                  </div>
                  <h6 className="italic font-ramillas">{testimonial.text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination with Custom Button */}
        <div className="flex justify-between items-center mt-8 w-full ox-[20px] lg:px-[40px]">
          <Button
            text="Previous"
            bgColor="bg-transparent"
            textColor={`${currentIndex === 0 ? "text-gray-400" : "text-white"}`}
            iconBgColor={`${
              currentIndex === 0 ? "bg-gray-400" : "bg-lime-400"
            }`}
            icon={Arrow}
            rotate={90}
            hoverTextColor={currentIndex === 0 ? "text-gray-400" : "text-main"}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          />
          <span className="text-2xl font-ramillas italic ">{`0${
            currentIndex + 1
          } of 0${testimonials.length}`}</span>
          <Button
            text="Next"
            bgColor="bg-transparent"
            textColor={`${
              currentIndex === testimonials.length - 1 ? "" : "text-white"
            }`}
            iconBgColor={`${
              currentIndex === testimonials.length - 1
                ? "bg-gray-400"
                : "bg-lime-400"
            }`}
            icon={Arrow}
            rotate={-90}
            hoverTextColor={
              currentIndex === testimonials.length - 1 ? "" : "text-main"
            }
            onClick={nextSlide}
            disabled={currentIndex === testimonials.length - 1}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
