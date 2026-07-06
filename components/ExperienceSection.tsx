"use client";
import { motion } from "motion/react";

const features = [
  {
    title: "Authentic North Indian Cuisine",
    desc: "Discover the rich flavors of authentic Indian food in Calgary, featuring freshly prepared curries, sizzling tandoori specialties, handcrafted naan, aromatic biryanis, and traditional North Indian recipes made with premium ingredients and authentic spices.",
  },
  {
    title: "Events & Celebrations",
    desc: "Looking for the perfect event venue in Calgary? Murthal Dhaba hosts birthdays, anniversaries, corporate events, family gatherings, festive celebrations, and private parties with customized menus, exceptional service, and a vibrant atmosphere.",
  },
  {
    title: "Culture & Community",
    desc: "Experience the warmth of Indian hospitality through cultural celebrations, festive events, live entertainment, and community gatherings that bring friends and families together in a welcoming environment.",
  },
  {
    title: "Pet-Friendly Patio Dining",
    desc: "Relax on our spacious pet-friendly patio in Calgary, where you can enjoy authentic Indian cuisine with family, friends, and your furry companions in a comfortable outdoor setting.",
  },
];

export function ExperienceSection() {
  return (
    <section className="relative w-full z-10 flex flex-col lg:flex-row items-stretch lg:min-h-[700px] mt-1 bg-[var(--color-bg-darker)]">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 flex lg:justify-end order-2 lg:order-1 relative z-20">
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
        {/* lg:max-w-[740px ]*/}
        <div className="w-full  pl-6 pr-6 md:pl-16 md:pr-16 lg:pr-24 py-24 flex flex-col relative">
          <span className="font-allura text-brand text-3xl md:text-4xl mb-4 block">
            Quality & Balance
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white tracking-wide mb-24 max-w-sm lg:max-w-md relative z-10">
            An Extraordinary <br />
            <span className="relative">
              Experience
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
            for all
          </h2>

          {/* Floating Plate absolute positioned */}
          {/* <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80"
            className="absolute top-12 right-6 lg:-right-36 w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.6)] opacity-90 hidden sm:block pointer-events-none z-30 object-cover"
            alt="Fresh Salad"
          /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 shrink-0">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-3"
              >
                <h3 className="text-white text-lg font-medium tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-light  leading-relaxed pr-4">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative order-1 lg:order-2 z-10">
        <img
          src="/insta/DSC02046.webp"
          alt="Chef preparing food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optional gradient overlay to blend left edge with the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040a0b] via-transparent to-transparent opacity-60 hidden lg:block w-32 pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
