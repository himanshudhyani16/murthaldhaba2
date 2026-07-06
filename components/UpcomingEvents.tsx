"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import darkWoodBg from "@/public/dark_wood_texture_bg.jpg";

import eventSufi from "@/public/event_sufi.jpg";
import eventDj from "@/public/event_dj.jpg";
import eventMic from "@/public/event_mic.jpg";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: 1,
    date: "24",
    month: "MAY",
    title: "LIVE SUFI NIGHT",
    time: "Saturday | 8:00 PM",
    image: eventSufi,
  },
  {
    id: 2,
    date: "31",
    month: "MAY",
    title: "BOLLYWOOD DJ NIGHT",
    time: "Saturday | 9:00 PM",
    image: eventDj,
  },
  {
    id: 3,
    date: "07",
    month: "JUN",
    title: "OPEN MIC NIGHT",
    time: "Saturday | 7:30 PM",
    image: eventMic,
  },
];

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-24 bg-black/80 overflow-hidden"
      style={{
        backgroundImage: `url(${darkWoodBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to match the deep wood look */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 lg:mb-12 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="font-display font-semibold text-brand text-4xl sm:text-5xl md:text-6xl tracking-wide drop-shadow-md">
              UPCOMING EVENTS
            </h2>
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-[#F8A827] text-[#F8A827] px-6 py-2 font-bold tracking-widest text-xs sm:text-sm hover:bg-[#F8A827]/10 transition-colors flex items-center gap-2 shadow-[0_0_10px_rgba(248,168,39,0.2)]"
          >
            VIEW ALL EVENTS
            <span className="">&gt;</span>
          </motion.button> */}
        </div>

        {/* Event Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -5 }}
              className="group relative w-full h-[380px] sm:h-[420px]  overflow-hidden border border-[#444] shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradients for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95"></div>

              {/* Date Badge */}
              <div className="absolute top-0 left-4 bg-[#8a161c] text-white flex flex-col items-center justify-center w-14 h-16 shadow-lg rounded-b-md border-x border-b border-[#a82229]/50 backdrop-blur-sm">
                <span className="font-display text-3xl leading-none mt-1">
                  {event.date}
                </span>
                <span className="font-bold text-[10px] text-white tracking-widest leading-none mb-1">
                  {event.month}
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center">
                <h3 className="font-display text-white text-2xl sm:text-3xl tracking-wide mb-1 drop-shadow-lg">
                  {event.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm font-medium mb-5 tracking-widest drop-shadow-md">
                  {event.time}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F8A827] text-black font-bold text-xs sm:text-sm px-8 py-2.5  hover:bg-yellow-400 transition-colors shadow-[0_4px_15px_rgba(248,168,39,0.4)] tracking-widest"
                >
                  BOOK NOW
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
