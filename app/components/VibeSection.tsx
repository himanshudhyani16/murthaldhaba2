"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "motion/react";

const videos = [
  {
    id: 1,
    poster:
      "/image1.png",
    src: "https://ik.imagekit.io/qlhkeyrjo/murthal/video1.mp4",
    title: "Ambiance & Style",
  },
  {
    id: 2,
    poster:
      "/image2.png",
    src: "https://ik.imagekit.io/qlhkeyrjo/murthal/video2.mp4",
    title: "Craft Cocktails",
  },
  {
    id: 3,
    poster:
      "/image3.png",
    src: "https://ik.imagekit.io/qlhkeyrjo/murthal/video3.mp4",
    title: "Evening Bliss",
  },
  {
    id: 4,
    poster:
      "/image1.png",
    src: "https://ik.imagekit.io/qlhkeyrjo/murthal/video1.mp4",
    title: "Culinary Art",
  },
  {
    id: 5,
    poster:
      "/image2.png",
    src: "https://ik.imagekit.io/qlhkeyrjo/murthal/video2.mp4",
    title: "Morning Brew",
  },
  {
    id: 6,
    poster:
      "/image3.png",
    src: "https://ik.imagekit.io/qlhkeyrjo/murthal/video3.mp4",
    title: "Signature Tastings",
  },
];

export function VibeSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      let scrollAmount = 300;
      if (children.length > 1) {
        scrollAmount =
          (children[1] as HTMLElement).offsetLeft -
          (children[0] as HTMLElement).offsetLeft;
      } else if (children.length === 1) {
        scrollAmount = children[0].clientWidth;
      }

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full  z-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/club.jpg"
          alt="Background food"
          // className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          className="w-full h-full object-cover opacity-20 "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>
      <div className="relative z-10 py-24 px-6 md:px-16 max-w-9xl mx-auto">
        <div className="relative z-10 flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-allura text-brand text-3xl md:text-4xl mb-4"
          >
            Immerse Yourself
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold leading-tight text-white tracking-wide mb-6"
          >
            The Vibe You&apos;ll Never Miss
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light max-w-2xl"
          >
            Experience the rhythm, the flavors, and the unforgettable moments
            that make every evening at Murthal Dhaba truly special.
          </motion.p>
        </div>

        <div className="relative group/nav">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-brand text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover/nav:opacity-100 disabled:opacity-0 disabled:pointer-events-none shadow-xl`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-brand text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover/nav:opacity-100 disabled:opacity-0 disabled:pointer-events-none shadow-xl`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="relative flex-none w-full sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)] aspect-[9/16] rounded-2xl overflow-hidden snap-start cursor-pointer group/card bg-black/20"
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover/card:opacity-90" />

                {/* Play Button Overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform scale-90 opacity-0 group-hover/card:scale-100 group-hover/card:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <Play
                      className="w-6 h-6 text-white ml-1.5"
                      fill="currentColor"
                    />
                  </div>
                </div> */}

                {/* Text Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  {/* <h3 className="text-white text-xl md:text-2xl font-medium tracking-wide transform translate-y-2 opacity-90 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                      {video.title}
                    </h3> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
