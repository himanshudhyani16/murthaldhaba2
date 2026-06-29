"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

const slides = [
  {
    discount: "Get 35% Discount",
    title: "Delicious & Mouth <br class='hidden md:block'/> Watering Test",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
    badge: "25",
  },
  {
    discount: "Today's Special",
    title: "Authentic Spices <br class='hidden md:block'/> & Fresh Taste",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
    badge: "15",
  },
  {
    discount: "Weekend Offer",
    title: "Finest Recipes <br class='hidden md:block'/> & Gourmet Touch",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80",
    badge: "20",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeIndex];

  const textVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full min-h-screen lg:h-screen flex items-center overflow-hidden pt-[220px] md:pt-[180px] lg:pt-[141px] pb-12 lg:pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/patio1.jpeg"
          alt="Background food"
          // className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          className="w-full h-full object-cover opacity-20 "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 container mx-auto">
        {/* Left Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
            className="w-full lg:w-1/2 flex flex-col items-start gap-6 pt-10 lg:pt-0 z-10"
          >
            <motion.span
              variants={textVariants}
              className="font-allura text-brand text-3xl md:text-4xl"
            >
              {slide.discount}
            </motion.span>

            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-[1.1] text-white"
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />

            <motion.p
              variants={textVariants}
              className="text-gray-300 text-lg md:text-xl font-light"
            >
              Best food made by our{" "}
              <span className="text-brand font-medium border-b border-brand border-opacity-40 pb-0.5 pointer-events-auto cursor-pointer">
                Passionate Chefs
              </span>
            </motion.p>

            <motion.button
              variants={textVariants}
              className="mt-4 px-8 py-3 rounded-none border border-white/80 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Book a Table
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Right Content / Image Area */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-16 lg:mt-0 relative min-h-[500px]">
          {/* Abstract Circle/Lines (Simulating the orbital arrows in background) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 lg:-right-10 w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full border-[1px] border-white/20 border-t-white/60 border-r-transparent"
          ></motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute right-10 lg:-right-0 w-[400px] h-[400px] md:w-[480px] md:h-[480px] rounded-full border-[1px] border-white/10 border-l-brand/50 border-t-transparent"
          ></motion.div>

          {/* The Food Plate */}
          <div className="relative z-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border-[6px] border-white/10 p-2 shadow-2xl shadow-brand/10 bg-black/20 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{
                  opacity: 0,
                  scale: 1.05,
                  rotate: 10,
                  transition: { duration: 0.4 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={slide.image}
                alt="Healthy Food Bowl"
                className="w-full h-full object-cover rounded-full pointer-events-none absolute top-0 left-0 p-2"
              />
            </AnimatePresence>

            {/* Floating Orange Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
                transition={{ type: "spring", delay: 0.4, bounce: 0.5 }}
                className="absolute -top-4 right-10 md:right-16 bg-brand text-white md:w-32 md:h-16 w-24 h-12 flex items-center justify-center rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm shadow-xl shadow-brand/40 transform rotate-12 z-20"
              >
                <div className="flex items-center gap-1 -rotate-12">
                  <div className="flex flex-col leading-none text-right">
                    <span className="text-[10px] md:text-xs font-semibold leading-none">
                      SPECIAL
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold leading-none">
                      MENU
                    </span>
                  </div>
                  <span className="text-2xl md:text-4xl font-bold leading-none tracking-tighter">
                    {slide.badge}
                  </span>
                  <div className="flex flex-col leading-none">
                    <span className="text-xl md:text-2xl font-bold leading-none">
                      %
                    </span>
                    <span className="text-[10px] uppercase font-bold leading-none">
                      Off
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side floating dots indicator */}
          <div className="hidden lg:flex absolute right-1 top-1/2 -translate-y-1/2 flex-col gap-3">
            {slides.map((_, i) => (
              <motion.div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${activeIndex === i ? "bg-white shadow-[0_0_8px_white]" : "bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
