import React from "react";
import Image from "next/image";
import Shine from "@/components/icons/Shine";
import Button from "@/components/Button";
import Arrow from "@/components/icons/Arrow";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Jessica Briones",
//     role: "Head of Business Development",
//     imageUrl: "/images/team/jessica.jpg",
//     videoUrl: "/images/team/jessica.mp4",
//   },
//   {
//     id: 2,
//     name: "Brenda Briones",
//     role: "Head of Content Strategy",
//     imageUrl: "/images/team/brenda.jpg",
//     videoUrl: "/images/team/brenda.mp4",
//   },
//   {
//     id: 3,
//     name: "Miranda Valencia",
//     role: "Engagement Specialist",
//     imageUrl: "/images/team/miranda.jpg",
//     videoUrl: "/images/team/miranda.mp4",
//   },
//   {
//     id: 4,
//     name: "Brenda Báez",
//     role: "Senior Designer",
//     imageUrl: "/images/team/brenda_b.jpg",
//     videoUrl: "/images/team/brenda_b.mp4",
//   },
//   {
//     id: 5,
//     name: "Ana Franco",
//     role: "Junior Designer",
//     imageUrl: "/images/team/ana.jpg",
//     videoUrl: "/images/team/ana.mp4",
//   },
//   {
//     id: 6,
//     name: "Laritza Martínez",
//     role: "Key Account Holder",
//     imageUrl: "/images/team/laritza.jpg",
//     videoUrl: "/images/team/laritza.mp4",
//   },
//   {
//     id: 7,
//     name: "Paola Valencia",
//     role: "Sales Executive",
//     imageUrl: "/images/team/paola.jpg",
//     videoUrl: "/images/team/paola.mp4",
//   },
// ];

function Team({ whoWeAre, teamMembers }) {

 
  
  return (
    <section
      className="min-h-[90vh] z-40 relative flex flex-col gap-12 justify-center items-end py-12 lg:py-24"
      id="team"
    >
      <div className="container text-center flex flex-col gap-8 justify-center items-center mx-auto px-[20px]">
        <div className="flex gap-4 items-center">
          <Shine color="#DC0073" />
          <h4 dangerouslySetInnerHTML={{
            __html: whoWeAre.teamTitle.replace(/`/g, ''), // Elimina las comillas inversas si están presentes
          }}/>
            
          
        </div>
        <h2>
         {whoWeAre.teamSubtitlePart1}{" "}
          <span className="text-110 font-ramillas italic font-extrabold text-pink">
            {whoWeAre.teamSubtitlePart2}
          </span>
        </h2>
        <p className="lg:w-1/3">
          {whoWeAre.teamParagraph}
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-rows-3 border-collapse overflow-hidden border-[0.5px] dark:border-white border-main  !border-opacity-10">
        {/* First row with 3 team members */}
        {teamMembers.slice(0, 3).map((member) => (
          <div
            key={member.id}
            className="relative p-[30px] border-[0.5px] dark:border-white border-main  !border-opacity-10 aspect-vertical"
          >
            <div className="relative bg-cover flex flex-col items-center justify-end rounded-[32px] overflow-hidden group aspect-vertical">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.45)] via-transparent to-transparent bg-opacity-40 z-10"></div>

              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:hidden"
                />
                <video
                  src={member.video}
                  className="w-full h-full object-cover hidden group-hover:block"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              </div>
              <div className="relative z-20 bg-opacity-50 p-8 w-full flex flex-col gap-1">
                <h3 className="text-main">
                  <span className="italic font-ramillas text-110">
                    {member.name.split(" ")[0]}
                  </span>{" "}
                  {member.name.split(" ")[1]}
                </h3>
                <p className="uppercase text-main">{member.role}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Fourth member */}
        <div
          key={teamMembers[3].id}
          className="relative p-[30px] border-[0.5px] dark:border-white border-main  !border-opacity-10 aspect-vertical"
        >
          <div className="relative bg-cover flex flex-col items-center justify-end rounded-[32px] overflow-hidden group aspect-vertical">
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.45)] via-transparent to-transparent bg-opacity-40 z-10"></div>

            <div className="absolute inset-0 overflow-hidden">
              <img
                src={teamMembers[3].photo}
                alt={teamMembers[3].name}
                className="w-full h-full object-cover group-hover:hidden"
              />
              <video
                src={teamMembers[3].video}
                className="w-full h-full object-cover hidden group-hover:block"
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
            <div className="relative z-20 bg-opacity-50 p-8 w-full flex flex-col gap-1">
              <h3 className="text-main">
                <span className="italic font-ramillas text-110">
                  {teamMembers[3].name.split(" ")[0]}
                </span>{" "}
                {teamMembers[3].name.split(" ")[1]}
              </h3>
              <p className="uppercase text-main">{teamMembers[3].role}</p>
            </div>
          </div>
        </div>

        {/* Central phrase with aspect-vertical */}
        <div className="relative p-[30px] border-[0.5px] dark:border-white border-main  !border-opacity-10  text-center">
          <div className="relative inset-0 overflow-hidden aspect-vertical bg-pinkSecondary w-full h-full rounded-[32px] flex items-center justify-center">
            <h3 className="text-main">
              <span className="font-bold italic font-ramillas text-pink">
                {whoWeAre.teamCentralPhrasePart1}
              </span>
              <br />
              {whoWeAre.teamCentralPhrasePart2}
            </h3>
            <Image src="/images/shine-circle.svg" layout="fill" />
          </div>
        </div>

        {/* Fifth member */}
        <div
          key={teamMembers[4].id}
          className="relative p-[30px] border-[0.5px] dark:border-white border-main  !border-opacity-10 aspect-vertical"
        >
          <div className="relative bg-cover flex flex-col items-center justify-end rounded-[32px] overflow-hidden group aspect-vertical">
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.45)] via-transparent to-transparent bg-opacity-40 z-10"></div>

            <div className="absolute inset-0 overflow-hidden">
              <img
                src={teamMembers[4].photo}
                alt={teamMembers[4].name}
                className="w-full h-full object-cover group-hover:hidden"
              />
              <video
                src={teamMembers[4].video}
                className="w-full h-full object-cover hidden group-hover:block"
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
            <div className="relative z-20 bg-opacity-50 p-8 w-full flex flex-col gap-1">
              <h3 className="text-main">
                <span className="italic font-ramillas text-110">
                  {teamMembers[4].name.split(" ")[0]}
                </span>{" "}
                {teamMembers[4].name.split(" ")[1]}
              </h3>
              <p className="uppercase text-main">{teamMembers[4].role}</p>
            </div>
          </div>
        </div>

        {/* Last two members */}
        {teamMembers.slice(5, 7).map((member) => (
          <div
            key={member.id}
            className="relative p-[30px] border-[0.5px] dark:border-white border-main  !border-opacity-10 aspect-vertical"
          >
            <div className="relative bg-cover flex flex-col items-center justify-end rounded-[32px] overflow-hidden group aspect-vertical">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.45)] via-transparent to-transparent bg-opacity-40 z-10"></div>

              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:hidden"
                />
                <video
                  src={member.video}
                  className="w-full h-full object-cover hidden group-hover:block"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              </div>
              <div className="relative z-20 bg-opacity-50 p-8 w-full flex flex-col gap-1">
                <h3 className="text-main">
                  <span className="italic font-ramillas text-110">
                    {member.name.split(" ")[0]}
                  </span>{" "}
                  {member.name.split(" ")[1]}
                </h3>
                <p className="uppercase text-main">{member.role}</p>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Grid Item with aspect-vertical */}
        <div className="p-[30px] border-[0.5px] dark:border-white border-main  !border-opacity-10 aspect-vertical">
          <div className="relative bg-[url('/images/bg-lines.svg')] bg-cover bg-pink w-full h-full rounded-[32px] flex flex-col gap-6 items-center justify-center">
            <h3 className="text-main">
              Join our{" "}
              <span className="italic font-ramillas text-110">team!</span>
            </h3>
            <Button
              text="Apply Now!"
              bgColor="bg-black"
              textColor="text-white"
              iconBgColor="bg-pink"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOiSTzU-uiIUNREEGhetrr0OEI1iXqDIUYwYNUXJlrimvCkQ/viewform"
              rotate={-90}
              icon={Arrow}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
