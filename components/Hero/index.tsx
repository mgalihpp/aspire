"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className="bg-gray-50" id="#hero-section">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <h2 className="text-3xl font-semibold text-[#0F0049] lg:text-6xl leading-[60px]">
              Multipurpose Website Templates That boost your sales
            </h2>
          </Fade>

          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <p className="hidden text-gray-400 sm:mt-4 sm:block">
              Empowering Your Financial Journey through Customized Asset
              Management Services
            </p>
          </Fade>
        </div>

        <Fade direction="up" delay={1200} cascade damping={1e-1} triggerOnce>
          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Get Started </span>

                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </Fade>

        <Fade direction="up" delay={1600} cascade damping={1e-1} triggerOnce>
          <div className="mt-5 flex items-center justify-center">
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5V4.5C2.15823 5.27215 3.17673 6.23564 4.01194 7.34926L4.5 8L5.43704 6.50074C6.74735 4.40423 8.40279 2.54443 10.3333 1V1"
                stroke="#0F9D58"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="ml-2 text-gray-400 text-xs">
              No Credit card required
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
