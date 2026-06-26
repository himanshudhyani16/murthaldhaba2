"use client";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 z-10">
      {/* Left Image Area */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 relative max-w-lg mx-auto lg:mx-0"
      >
        {/* Offset dark background block */}
        <div className="absolute -bottom-8 -right-8 w-[90%] h-[95%] bg-[var(--color-bg-darker)] -z-10 rounded-sm"></div>

        <img
          src="/patio1.jpeg"
          alt="Restaurant Interior"
          className="w-full h-auto object-cover aspect-square rounded-sm shadow-2xl"
        />
      </motion.div>

      {/* Right Content Area */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col items-start gap-6"
      >
        <span className="font-allura text-brand text-3xl md:text-4xl mb-4">
          Fresh & Tasty Food
        </span>

        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white tracking-wide">
          A Sophisticated and <br className="hidden md:block" /> Traditional
          Cuisine
        </h2>

        <p className="text-gray-300 text-lg font-light leading-relaxed max-w-lg">
          Murthal Dhaba is one of the most popular Restaurants with unique &
          special menu made by our passionate chefs with love and quality with
          can impress you
        </p>

        <div className="flex items-center text-white text-xl font-medium mt-2">
          Call for Reservation
          <a
            href="tel:+01234567891"
            className="text-brand border-b border-brand pb-0.5 ml-3 hover:text-brand-dark hover:border-brand-dark transition-colors"
          >
            +1 204-951-5359
          </a>
        </div>

        <button className="mt-4 px-10 py-3.5 rounded-none border border-white/80 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
          View full Menu
        </button>
      </motion.div>
    </section>
  );
}
