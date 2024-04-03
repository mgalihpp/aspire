"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="relative bg-[#0A85EA] text-white" id="about-section">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto max-w-5xl text-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 ">
              {/* COLUMN 1 */}

              <div className="col-span-5 flex flex-col text-start">
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce
                >
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
                    About our company
                  </h1>
                  <p className="mt-14">Learn more</p>
                </Fade>
              </div>

              {/* COLUMN 2 */}
              <div className="col-span-7 flex text-start">
                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce
                >
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo
                  </p>
                </Fade>
              </div>
            </div>

            <Fade direction="up" delay={1200} cascade damping={1e-1} triggerOnce>
              <div className="flex items-center justify-center mt-24 lg:mt-32">
                <Image
                  src="/images/about.jpg"
                  alt="about"
                  width={980}
                  height={450}
                  fetchPriority="auto"
                  className="rounded-xl"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
