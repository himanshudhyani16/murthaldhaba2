"use client";
import { Bell, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";

export function TopBar() {
  return (
    <div className="w-full flex items-center justify-between py-3 px-6 md:px-16 text-sm text-gray-300 font-light border-b border-white/5 relative z-10 w-full container mx-auto">
      <div className="flex gap-4 items-center">
        <a
          href="https://maps.app.goo.gl/Ws6EQZR1bEnSyWeb6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors cursor-pointer"
        >
          619 A 36 Ave NE, Calgary, AB T2E 2L8, Canada
        </a>
        <span className="text-gray-600">|</span>
        <a
          href="tel:+12049515359"
          className="hover:text-white transition-colors cursor-pointer"
        >
          +1 204-951-5359
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <div className="flex items-center gap-2 ">
          {/* <Mail className="w-4 h-4 text-brand group-hover:animate-bounce" /> */}
          <span className="hidden sm:inline">murthal.dhaba36@gmail.com</span>
        </div>
        <span className="text-gray-600">|</span>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/Murthaldhaba36?rdid=OQBbXefiaaDL7vFq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E38wqrPp6%2F#"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaFacebook
              size={20}
              className="text-white hover:text-amber-500 cursor-pointer transition-colors"
            />
          </Link>
          <Link
            href="https://www.instagram.com/murthal_dhaaba/"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <BsInstagram
              size={20}
              className="text-white hover:text-amber-500 cursor-pointer transition-colors"
            />
          </Link>{" "}
          <Link
            href="https://www.tiktok.com/@murthal_dhaba"
            target="_blank"
            className=" text-white transition-colors"
          >
            <RiTiktokLine
              size={20}
              className="text-white hover:text-amber-500 cursor-pointer transition-colors"
            />
          </Link>
        </div>{" "}
      </motion.div>
    </div>
  );
}
