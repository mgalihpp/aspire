"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="relative">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <div className="flex items-center justify-center">
              <Image
                src="/images/dashboards.jpg"
                alt="dashboard"
                width={931}
                height={698}
                fetchPriority="auto"
              />
            </div>
          </Fade>

          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <div className="pt-24 pb-14">
              <h3 className="text-[#0F0049] text-xl font-medium">
                Trusted by 1000K plus customers
              </h3>
            </div>
          </Fade>

          <Fade direction="up" delay={1200} cascade damping={1e-1} triggerOnce>
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <Image
                    src="/images/client/click-up.jpg"
                    alt="click up"
                    width={110}
                    height={26}
                    fetchPriority="auto"
                  />
                </div>
                <div>
                  <Image
                    src="/images/client/dropbox.jpg"
                    alt="click up"
                    width={115}
                    height={26}
                    fetchPriority="auto"
                  />
                </div>
                <div>
                  <Image
                    src="/images/client/twilio.jpg"
                    alt="click up"
                    width={124}
                    height={26}
                    fetchPriority="auto"
                  />
                </div>

                <div>
                  <Image
                    src="/images/client/freshbooks-logo.jpg"
                    alt="click up"
                    width={136}
                    height={40}
                    fetchPriority="auto"
                  />
                </div>
                <div>
                  <Image
                    src="/images/client/Github.jpg"
                    alt="click up"
                    width={97}
                    height={40}
                    fetchPriority="auto"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
