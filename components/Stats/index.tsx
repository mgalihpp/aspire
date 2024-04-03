"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface cardStats {
  title: string;
  image: string;
  description: string;
}

const stats: cardStats[] = [
  {
    title: "50M+",
    image: "/icon/up.svg",
    description: "Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
  {
    title: "$100M",
    image: "/icon/crowded.svg",
    description:
      "Eis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
  },
  {
    title: "30%",
    image: "/icon/recycle.svg",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
  },
  {
    title: "60+",
    image: "/icon/graph.svg",
    description: "Magni dolores eos qui ratione voluptatem sequi nesciunt",
  },
];

const Stats = () => {
  return (
    <div className="relative" id="stats-section">
      <div className="p-8 md:p-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto max-w-5xl text-center pb-20">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#0F0049] md:leading-[60px]">
                Our 12 years of together have given us much to be proud of
              </h2>
            </Fade>
          </div>

          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stats cards */}
              {stats.map((stat) => (
                <div
                  className="bg-[#F6F5F8] flex flex-col text-start rounded-lg"
                  key={stat.title}
                >
                  <div className="pl-10 py-10">
                    <Image
                      src={stat.image}
                      alt="stat icon"
                      height={70}
                      width={70}
                      fetchPriority="auto"
                    />

                    <h3 className="pt-7 pb-4  text-2xl lg:text-4xl font-semibold">
                      {stat.title}
                    </h3>
                    <p className="text-[15px] text-gray-500">
                      {stat.description}
                    </p>
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

export default Stats;
