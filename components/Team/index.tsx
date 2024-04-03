"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMembers: TeamMemberProps[] = [
  {
    name: "Kristopher A. Davis",
    role: "CEO",
    image: "/images/team/team-1.jpg",
  },
  {
    name: "John Doe",
    role: "Manager",
    image: "/images/team/team-2.jpg",
  },
  {
    name: "Jane Doe",
    role: "Product Manager",
    image: "/images/team/team-3.jpg",
  },
  {
    name: "Mike Doe",
    role: "Data Analytics",
    image: "/images/team/team-4.jpg",
  },
  {
    name: "Sarah Doe",
    role: "Software Engineer",
    image: "/images/team/team-5.jpg",
  },
  {
    name: "David Doe",
    role: "Designer",
    image: "/images/team/team-6.jpg",
  },
  {
    name: "Jessica Doe",
    role: "Marketing",
    image: "/images/team/team-7.jpg",
  },
  {
    name: "Mark Doe",
    role: "Developer",
    image: "/images/team/team-8.jpg",
  },
];

const Team = () => {
  return (
    <div className="relative" id="team-section">
      <div className="p-8 md:p-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex flex-col space-y-6 items-center justify-center">
            <div className="bg-red-100 rounded-full w-fit py-1 px-4">
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce
              >
                <h4 className="uppercase text-red-400 text-xs font-medium">
                  Our team
                </h4>
              </Fade>
            </div>

            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
              <div className="max-w-xl space-y-6 px-4">
                <h1 className="font-semibold text-black text-3xl lg:text-5xl">
                  Meet our dream team
                </h1>

                <p className="text-gray-400 text-sm">
                  We’re dedicated group of Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium
                </p>
              </div>
            </Fade>
          </div>

          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 mt-16">
              {/* team member */}
              {TeamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={280}
                    height={280}
                  />

                  <div className="pt-6 space-y-4">
                    <h6 className="text-black font-semibold">{member.name}</h6>
                    <span className="text-gray-500 text-sm font-medium">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Team;
