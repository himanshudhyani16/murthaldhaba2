"use client";
import { motion } from "motion/react";
import Image from "next/image";

export function ContactInformation() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/restaurant4.jpg"
          alt="Background food"
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        {/* Left Column - Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <span className="text-brand uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            CONTACT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Information
          </h2>
          <p className="text-gray-300 font-light leading-relaxed mb-12 max-w-lg">
            Here is our Contact information which include office address, our
            phone number and web address. You can visit our office any day at
            official time or call us our number any time
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
            {/* Office Address */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                <h3 className="text-xl font-semibold text-white">
                  Visit our Office
                </h3>
              </div>
              <p className="text-gray-400 font-light pl-5.5 leading-relaxed">
                245 D, South City Mixed Tower
                <br />
                Main Town, New York, USA
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                <h3 className="text-xl font-semibold text-white">
                  You can Mail us
                </h3>
              </div>
              <p className="text-gray-400 font-light pl-5.5 leading-relaxed">
                <a
                  href="mailto:info@examplesite.com"
                  className="hover:text-brand transition-colors block"
                >
                  info@examplesite.com
                </a>
                <a
                  href="mailto:admin@examplesite.com"
                  className="hover:text-brand transition-colors block"
                >
                  admin@examplesite.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                <h3 className="text-xl font-semibold text-white">Call us</h3>
              </div>
              <p className="text-gray-400 font-light pl-5.5 leading-relaxed">
                <a
                  href="tel:+12345678910"
                  className="hover:text-brand transition-colors block"
                >
                  +12345 678 910
                </a>
                <a
                  href="tel:+12345876910"
                  className="hover:text-brand transition-colors block"
                >
                  +12345 876 910
                </a>
              </p>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                <h3 className="text-xl font-semibold text-white">
                  Opening Hours
                </h3>
              </div>
              <p className="text-gray-400 font-light pl-5.5 leading-relaxed">
                Mon - Sun: 8:00 AM - 10:00 PM
                <br />
                (Open All Days)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Image with Overlay Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] rounded-sm overflow-hidden group"
        >
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
            alt="Chef presenting a dish"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Subtle Dark Gradient to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-10">
            {/* Top text */}
            <div className="mt-20">
              <h3 className="text-white text-3xl md:text-4xl tracking-[0.15em] font-light leading-tight">
                35% OFF
                <br />
                FOR ALL MENU
              </h3>
            </div>

            {/* Bottom text */}
            {/* <div className="mb-6">
            <span className="text-brand uppercase tracking-[0.2em] text-sm md:text-base font-semibold block mb-2">
              FRESH & HEALTHY
            </span>
            <span className="text-white font-allura text-4xl md:text-5xl tracking-wider">
              Robert Thomson
            </span>
          </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
