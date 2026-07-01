"use client";
import { motion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Murthal Dhaba is one of the most popular and tasty Restaurant with unique & special test food menu made by our passionate more anchefs with love and quality and love",
      name: "Maichel Williamson",
      role: "CTO, Morlex Group",
      image: "/user1.jpg",
    },
    {
      id: 2,
      quote:
        "Murthal Dhaba is one of the most popular and tasty Restaurant with unique & special test food menu made by our passionate more anchefs with love and quality and love",
      name: "Jenny Wilson",
      role: "CEO, TechFlow",
      image: "/user2.jpg",
    },
    {
      id: 3,
      quote:
        "We had a fantastic time at this place. The ambience was perfect and the food was simply outstanding. I will definitely be coming back with my family.",
      name: "Robert Fox",
      role: "Food Blogger",
      image: "/user3.jpg",
    },
    {
      id: 4,
      quote:
        "A truly extraordinary dining experience! The chef's special was a masterpiece, perfectly timed and executed with fresh ingredients.",
      name: "Sophia Martinez",
      role: "Local Guide",
      image: "/user4.jpg",
    },
    {
      id: 5,
      quote:
        "The best place to spend an evening. The staff is polite, the atmosphere is cozy, and the menu brings a unique touch to traditional dishes.",
      name: "Daniel Lee",
      role: "Creative Director",
      image: "/user5.jpg",
    },
    {
      id: 6,
      quote:
        "I hosted my birthday dinner here and the team made it incredibly special. Thank you for the wonderful memories and delicious treats!",
      name: "Emily Chen",
      role: "Entrepreneur",
      image: "/user6.jpg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setActiveIndex(newIndex);
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      // In a snap container, just scroll to the offset
      scrollRef.current.scrollTo({
        left: pageIndex * width,
        behavior: "smooth",
      });
      setActiveIndex(pageIndex);
    }
  };

  const scrollPrev = () => {
    let nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      nextIndex = totalPages - 1;
    }
    scrollToPage(nextIndex);
  };

  const scrollNext = useCallback(() => {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= totalPages) {
      nextIndex = 0;
    }
    scrollToPage(nextIndex);
  }, [activeIndex, totalPages]);

  useEffect(() => {
    if (isHovered) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isHovered, scrollNext]);

  return (
    <section className="relative w-full ">
      <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto z-10 flex flex-col items-center overflow-hidden">
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
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-allura text-brand text-4xl mb-4 block relative z-10 "
        >
          Testimonials
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-16 text-center relative z-10 "
        >
       Our Happy Customers
        </motion.h2>

        <div
          className="w-full relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand hover:border-brand disabled:opacity-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand hover:border-brand disabled:opacity-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx % 2) * 0.1 }}
                className="flex-none snap-start relative bg-[var(--color-bg-darker)] border border-white/5 p-8 md:p-10 lg:p-12 rounded-sm overflow-hidden flex min-h-[320px] lg:min-h-[350px] w-full lg:w-[calc(50%-1rem)]"
              >
                <div className="w-[85%] md:w-[70%] flex flex-col justify-between z-10 h-full relative">
                  <p className="text-gray-300 text-[15px] lg:text-[16px] leading-relaxed mb-10 font-light pr-4">
                    {testimonial.quote}
                  </p>
                  <div>
                    <h4 className="text-brand font-medium text-lg">
                      {testimonial.name}
                    </h4>
                    {/* <p className="text-gray-400 text-xs mt-1">
                      {testimonial.role}
                    </p> */}
                  </div>
                </div>

                <Quote
                  className="absolute top-10 right-10 w-12 h-12 text-white/10"
                  fill="none"
                  strokeWidth={1}
                />

                <div className="absolute -bottom-8 -right-8 md:-bottom-10 md:-right-10 w-44 h-44 md:w-56 md:h-56 rounded-full border border-white/10 p-2 lg:p-2.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex gap-3 mt-8 justify-center"
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToPage(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-white shadow-[0_0_8px_white] w-4"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
