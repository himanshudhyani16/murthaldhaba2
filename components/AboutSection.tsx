"use client";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section className="relative w-full z-10 flex flex-col lg:flex-row items-stretch lg:min-h-[700px]    bg-[var(--color-bg-darker)]">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 flex lg:justify-end order-1 lg:order-2 relative z-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
          <img
            src="/restaurant4.jpg"
            alt="Background food"
            // className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
        </div>
        {/* lg:max-w-[640px]   */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-3xl   pl-6 pr-6 md:pl-16 md:pr-16 lg:pr-24 py-24 flex flex-col relative"
        >
          <span className="font-allura text-brand text-3xl md:text-4xl mb-4 block">
            Quality & Balance
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white tracking-wide mb-10 max-w-sm lg:max-w-md relative z-10">
            Authentic Indian
            <br />
            <span className="relative">
              Flavors
              {/* Custom SVG underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 10 Q 100 0 195 10"
                  className="stroke-brand"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            in Calgary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 shrink-0"></div>
          <div className="w-full  flex flex-col items-start gap-6">
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-lg">
              Experience the rich taste of North India with freshly prepared
              dishes, traditional recipes, and warm hospitality. From sizzling
              tandoori specialties to comforting curries, every meal at Murthal
              Dhaba is crafted to bring people together.
            </p>

            <div className="flex items-center text-white text-xl font-medium mt-2">
              Call for Reservation
              <a
                href="tel:+01234567891"
                className="text-brand border-b border-brand pb-0.5 ml-3 hover:text-brand-dark hover:border-brand-dark transition-colors"
              >
                +01234 567 891
              </a>
            </div>

            <button className="mt-4 px-10 py-3.5 rounded-none border border-white/80 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              View full Menu
            </button>
          </div>{" "}
        </motion.div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative order-2 lg:order-1 z-10">
        <img
          src="/patio1.jpeg"
          alt="Chef preparing food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optional gradient overlay to blend left edge with the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040a0b] via-transparent to-transparent opacity-60 hidden lg:block w-32 pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
