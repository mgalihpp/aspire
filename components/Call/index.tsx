"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const Call = () => {
  return (
    <div className="relative" id="call-section">
      <div className="p-8 md:p-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl text-center bg-[#0A85EA] rounded-lg text-white py-6 px-2 md:p-20">
          <div className="mx-auto max-w-5xl text-center pb-14">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
              <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold md:leading-[60px]">
                Get started with Aspire today
              </h2>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
              <p className="mt-5 text-base max-w-3xl mx-auto text-gray-100">
                We are self-service data analytics software that lets you create
                visually appealing data visualisations and insightful dashboards
                in minutes.
              </p>
            </Fade>
          </div>

          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <div className="flex w-full justify-center items-center">
              <div className="py-2 md:bg-white px-4 gap-2 rounded-full flex flex-col md:flex-row items-center justify-between">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full text-xs sm:text-sm lg:text-base md:w-96 lg:w-80 p-4 rounded-lg focus:outline-none text-black"
                />
                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
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
              </div>
            </div>

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
                  stroke="#ffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="ml-2 text-gray-100 text-xs">
                No Credit card required
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Call;
