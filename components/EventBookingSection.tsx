"use client";
import Image from "next/image";
import { motion } from "motion/react";

export function EventBookingSection() {
  return (
    <section className="relative w-full z-10 flex flex-col lg:flex-row items-stretch bg-[var(--color-bg-darker)]">
      {/* Left Images Area */}
      <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-[700px] grid grid-cols-2 grid-rows-2 gap-1 bg-black order-2 lg:order-1 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-1 row-span-2 relative"
        >
          <Image
            src="/insta/DSC03063.webp"
            // src="/insta/bcx3r8sptnjpraqbje4e.webp"
            alt="Dining experience"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 row-span-1 relative"
        >
          <Image
            src="/insta/DSC02110.webp"
            alt="Sushi presentation"
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-1 row-span-1 relative"
        >
          <Image
            src="/insta/DSC03107.webp"
            alt="Our Chef"
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>

      {/* Right Content Area */}
      <div className="w-full lg:w-1/2 relative flex order-1 lg:order-2 z-10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
          <Image
            src="/club.jpg"
            alt="Background food"
            fill
            sizes="50vw"
            unoptimized
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 py-20 md:px-16 lg:px-24 flex flex-col justify-center max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-allura text-brand text-3xl md:text-4xl mb-4 block"
          >
            Event Booking
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-6"
          >
            Do you have any plan <br className="hidden md:block" />
            for any Party or Events?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center text-white text-lg font-medium mb-12"
          >
            Call for Reservation
            <a
              href="tel:+01234567891"
              className="text-brand border-b border-brand pb-0.5 ml-2 hover:text-white hover:border-white transition-colors"
            >
              +1 204-951-5359
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 max-w-sm w-full"
          >
            <h3 className="text-white text-2xl font-medium mb-2">
              Opening Hours
            </h3>

            <div className="flex items-center justify-between text-white font-light text-[15px]">
              <span>Monday - Saturday</span>
              <span>11 AM - 11 PM</span>
            </div>
            <div className="flex items-center justify-between text-white font-light text-[15px]">
              <span>Sunday</span>
              <span>2 PM - 9 PM</span>
            </div>
          </motion.div>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="cursor-pointer"
          >
            <button className=" cursor-pointer mt-12 px-10 py-3.5 rounded-none border border-white/80 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              Book Early
            </button>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
