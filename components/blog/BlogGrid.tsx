'use client';
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { blogData } from "@/data/blog";
import { BlogCard } from "@/components/BlogCard";

export function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const ITEMS_PER_PAGE = 6;

  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = blogData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (sectionRef.current) {
      // Calculate an offset if there's a sticky header, or simply scroll into view
      const yOffset = -100; // Adjust if you have a fixed navbar
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/restaurant4.jpg"
          alt="Background restaurant"
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Grid of Blog Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, idx) => (
            <BlogCard
              key={post.id}
              image={post.image}
              date={post.date}
              author={post.author}
              title={post.title}
              delay={0.1 * (idx % 3)}
            />
          ))}
        </div>

        {/* Pagination Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex items-center gap-4"
        >
          {currentPage > 1 && (
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              &lt; Previous
            </button>
          )}
          {currentPage < totalPages && (
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Next &gt;
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
}
