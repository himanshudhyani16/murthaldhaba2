"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "./BlogCard";

import { blogData } from "@/data/blog";

export function BlogSection() {
  // Take only the first 3 posts for the homepage preview
  const blogPosts = blogData.slice(0, 3);

  return (
    <section className="relative w-full ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/restaurant4.jpg"
          alt="Background food"
          // className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>
      <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-allura text-brand text-4xl mb-4 block z-10"
        >
          Our Blog
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-16 text-center z-10"
        >
          Latest Blog Post
        </motion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {blogPosts.map((post, idx) => (
            <BlogCard
              key={post.id}
              image={post.image}
              date={post.date}
              author={post.author}
              title={post.title}
              delay={0.2 + idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
