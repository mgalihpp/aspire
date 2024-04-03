import Link from "next/link";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="relative" id="news-section">
      <div className="p-8 md:p-12 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-7xl text-center bg-[#F6F5F8] py-16 px-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 gap-x-2">
            {/* COLUMN 1 */}

            <div className="col-span-4">
              <h2 className="text-lg lg:text-3xl font-semibold text-black">
                Join our team
              </h2>
            </div>

            {/* COLUMN 2 */}

            <div className="col-span-8 flex flex-col text-start space-y-2">
              <p className="text-gray-400 text-sm sm:text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <Link
                href="#"
                className="text-red-500 text-sm font-medium hover:underline hover:underline-offset-2"
              >
                View Current Openings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
