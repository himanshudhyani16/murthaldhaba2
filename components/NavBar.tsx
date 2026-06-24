"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const links = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function NavBar() {
  return (
    <nav className="w-full relative z-10 py-6 px-6 md:px-16 container mx-auto flex items-center justify-between">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image
          src="/logo.png"
          alt="Murthal Dhaba Logo"
          width={104}
          height={104}
          className="w-26 h-26 rounded-full object-cover shrink-0 bg-black/20"
        />
        <span className="text-2xl md:text-3xl font-semibold text-white tracking-wide font-allura">
          Murthal Dhaba
        </span>
      </motion.div>

      {/* Desktop Links */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        className="hidden lg:flex items-center gap-10"
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-1 text-base font-medium text-white hover:text-brand transition-colors group"
          >
            {link.name}
          </Link>
        ))}
      </motion.div>

      {/* Mobile Menu Placeholder - we could add a hamburger here but focusing on the visual */}
      <div className="lg:hidden text-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
    </nav>
  );
}
