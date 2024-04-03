import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavigationItems {
  name: string;
  href: string;
  current: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation: NavigationItems[] = [
  { name: "product", href: "#product-section", current: false },
  { name: "pricing", href: "#pricing-section", current: false },
  { name: "company", href: "#company-section", current: false },
  { name: "resources", href: "#resources-section", current: false },
  {
    name: "contact",
    href: "#contact-section",
    current: false,
  },
];

const Navbar = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200">
        <div className="relative flex h-12 items-center sm:h-20">
          <div className="flex flex-1 items-center sm:justify-between">
            {/* LOGO */}
            <Link href="/">
              <div className="relative w-full h-full">
                <Image
                  src="/logo/full-logo.jpg"
                  alt="logo"
                  fetchPriority="auto"
                  quality="100"
                  width={111}
                  height={30}
                  objectFit="cover"
                />
              </div>
            </Link>

            {/* LINKS */}
            <div className="hidden lg:flex items-center">
              <div className="flex justify-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium text-[#111827] hover:text-gray-900 capitalize"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <div className="hidden lg:flex">
              <div className="flex items-center space-x-4">
                <button className="text-[#111827] font-medium">Login</button>

                <button className="bg-red-500 text-white rounded-full px-4 py-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
