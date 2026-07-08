"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full relative z-50 py-6 px-6 md:px-16 container mx-auto flex items-center justify-between">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Murthal Dhaba Logo"
            width={104}
            height={104}
            className="w-36 h-36 rounded-full object-cover shrink-0 bg-black/20"
          />
          {/* <span className="text-2xl md:text-3xl font-semibold text-white tracking-wide font-allura">
            Murthal Dhaba
          </span>{" "} */}
        </Link>
      </motion.div>

      {/* Desktop Links */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        className="hidden lg:flex items-center gap-10 "
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-1 text-xl font-medium transition-colors group ${
              isActiveLink(link.href)
                ? "text-brand [text-shadow:0_0_12px_rgba(217,119,6,0.65)]"
                : "text-white hover:text-brand"
            }`}
            aria-current={isActiveLink(link.href) ? "page" : undefined}
          >
            {link.name}
          </Link>
        ))}
      </motion.div>
      <Link
        href="https://www.doordash.com/store/murthal-dhaba-calgary-40232809/94069554/?rwg_token=AE37R_gyoGfYEfacxrL3MkZcvgsGtLHNXlp-P7pqN23fqYcEfk4aF3ZBH2M6jVltLm8dh-mMLvMM4ECEcJxYxkdct7qUVupYnQ==&utm_campaign=gpa"
        target="_blank"
        className="hidden lg:block mt-4 px-10 py-3.5 rounded-none border border-white/80 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
      >
        ORDER NOW
      </Link>
      {/* Mobile Menu Toggle */}
      <div
        className="lg:hidden text-white cursor-pointer relative z-50 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </>
          )}
        </svg>
      </div>

      {/* Mobile Menu Off-Canvas */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen bg-[#160f0d]/95 backdrop-blur-lg lg:hidden flex flex-col justify-center items-center py-4 px-6 z-40"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-medium transition-colors ${
                    isActiveLink(link.href)
                      ? "text-brand [text-shadow:0_0_12px_rgba(217,119,6,0.65)]"
                      : "text-gray-200 hover:text-brand"
                  }`}
                  aria-current={isActiveLink(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
