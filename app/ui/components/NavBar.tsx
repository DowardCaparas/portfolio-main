"use client";

import { navlinks } from "@/app/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
      <nav
        className="bg-[#0E141E] transition-all duration-150 ease-in md:px-12 z-10
    px-4 w-full text-white flex items-center justify-between max-md:py-4 fixed "
      >
        <Link href="/" className="font-extrabold text-xl">
          DC
        </Link>

        <button
          className="hidden max-md:block"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="opening nav bar for mobile devices"
        >
          <Image
            src={isOpen ? "/close.svg" : "/hamburger.svg"}
            alt="menu icon"
            width={25}
            height={25}
          />
        </button>

        {/* Nav links for large screens */}
        <div className="max-md:hidden">
          <div className="flex gap-1 text-white text-sm">
            {navlinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={`py-5 px-6 active:bg-[#3d3d3d] transition-colors duration-100 ease-in
              ${pathname === link.url ? "bg-[#646464]" : "hover:bg-[#4b4b4b]"}
            `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 -z-10 hidden max-md:block"
            onClick={() => setIsOpen(false)} // Close when clicking outside
          >
            <div
              className="absolute right-0 h-full w-[60%] max-w-xs bg-[#3a3a3a]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-24 flex flex-col gap-1 text-white">
                {navlinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    onClick={() => setIsOpen(false)}
                    className={`pl-6 py-4 active:bg-[#3d3d3d] transition-colors duration-150 ease-in
              ${pathname === link.url ? "bg-[#7c7c7c]" : "hover:bg-[#4b4b4b]"}
            `}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
  );
};

export default NavBar;
