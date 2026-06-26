"use client";
import { motion } from "motion/react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTiktokLine } from "react-icons/ri";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full bg-[var(--color-bg-darker)] pt-20 pb-8 overflow-hidden z-10 border-t border-white/5">
      {" "}
      {/* Background shadow/texture effect */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]"></div>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/club.jpg"
          alt="Background food"
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Murthal Dhaba Logo"
                className="w-12 h-12 rounded-full object-cover shrink-0 bg-black/20"
              />
              <span className="text-white text-2xl font-bold tracking-tight">
                Murthal Dhaba
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-xs font-light">
              Murthal Dhaba is one of the most popular Restaurant & special menu
              made by our passionate chefs
            </p>

            <div className="flex items-center gap-3 mb-8">
              <Link
                href="https://www.facebook.com/Murthaldhaba36?rdid=OQBbXefiaaDL7vFq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E38wqrPp6%2F#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand hover:bg-brand transition-all"
              >
                <FaFacebook className="w-4 h-4" />
              </Link>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand hover:bg-brand transition-all"
              >
                <RiTiktokLine className="w-4 h-4" />
              </a>
              <Link
                href="https://www.instagram.com/murthal_dhaaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand hover:bg-brand transition-all"
              >
                <IoLogoInstagram className="w-4 h-4" />
              </Link>
            </div>

            <div className="text-white text-[13px] font-medium">
              Powered by Monkart Labs
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col lg:pl-10">
            <h3 className="text-white text-xl font-medium mb-8">Restaurant</h3>
            <ul className="flex flex-col gap-5">
              {[
                "About us",
                "Our Menu",
                "Book a Table",
                "Blog Post",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-brand text-sm font-medium transition-colors tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-medium mb-8">Information</h3>
            <ul className="flex flex-col gap-5">
              {[
                "Terms & Conditions",
                "24/7 Service",
                "Style Guide",
                "Licenses",
                "Change Log",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-brand text-sm font-medium transition-colors tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-medium mb-8">
              Contact info
            </h3>
            <div className="flex flex-col gap-6">
              <address className="not-italic text-gray-200 text-sm font-medium leading-[1.8] tracking-wide">
                619 A 36 Ave NE, Calgary, <br /> AB T2E 2L8, Canada
              </address>

              <div className="flex flex-col gap-2 text-gray-200 text-sm font-medium tracking-wide">
                <a
                  href="mailto:info@examplesite.com"
                  className="hover:text-brand transition-colors"
                >
                  murthal.dhaba36@gmail.com
                </a>
                {/* <a
                  href="mailto:admin@examplesite.com"
                  className="hover:text-brand transition-colors"
                >
                  admin@examplesite.com
                </a> */}
              </div>
              <p>
                <a
                  href="tel:+12345678910"
                  className="text-gray-200 hover:text-brand text-sm font-medium transition-colors mt-2 tracking-wide"
                >
                  +1 204-951-5359
                </a>
                <a
                  href="tel:+12345876910"
                  className="hover:text-brand transition-colors block"
                >
                  +1 403-454-3750
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center relative">
          <p className="text-gray-200 text-[13px] font-medium tracking-wide text-center">
            © <span className="text-brand">MurthalDhaba.</span> All Rights
            Reserved - Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
