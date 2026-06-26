"use client";
import { motion } from "motion/react";

export function NewsletterSection() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-stretch bg-[var(--color-bg-darker)]">
      {/* Left Promotional Area */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
        <img
          src="/patio2.jpeg"
          alt="Restaurant Food"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Newsletter Area */}
      <div className="w-full lg:w-1/2 relative bg-[var(--color-bg-darker)] flex flex-col justify-center items-center py-20 px-6 lg:px-12 z-10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
          <img
            src="/restaurant1.jpg"
            alt="Background food"
            // className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
        </div>
        {/* Background icon lines graphic */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/food.png")',
          }}
        ></div>

        <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-allura text-brand text-4xl mb-4 block"
          >
            Newsletter
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-4"
          >
            Subscribe our Newsletter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-light mb-10"
          >
            To get latest updates, offers and promotions
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full flex flex-col sm:flex-row border border-white/20 p-1 rounded-sm mb-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email Here"
              className="w-full bg-transparent text-white px-4 py-3 sm:py-0 outline-none font-light placeholder:text-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-3.5 font-medium hover:bg-gray-200 transition-colors rounded-sm sm:w-auto w-full mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center text-white text-lg font-medium"
          >
            Call for Reservation
            <a
              href="tel:+01234567891"
              className="text-brand border-b border-brand pb-0.5 sm:ml-2 mt-2 sm:mt-0 hover:text-white hover:border-white transition-colors"
            >
              +1 204-951-5359
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
