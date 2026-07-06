'use client';
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface BlogCardProps {
  slug: string;
  image: string;
  date: string;
  author: string;
  title: string;
  delay?: number;
}

export function BlogCard({ slug, image, date, author, title, delay = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col bg-[var(--color-bg-darker)] rounded-sm overflow-hidden group cursor-pointer"
    >
      <Link href={`/blog/${slug}`} className="w-full aspect-[4/3] overflow-hidden block">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </Link>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center text-[13px] text-brand mb-4">
          <span>Date: {date}</span>
          <span className="mx-2">/</span>
          <span>By: {author}</span>
        </div>

        <h3 className="text-white text-xl md:text-2xl font-medium leading-snug mb-6 transition-colors duration-300">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <Link
          href={`/blog/${slug}`}
          className="mt-auto pt-4 flex items-center text-sm font-medium text-white group-hover:text-brand transition-colors duration-300"
        >
          Read more
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </motion.article>
  );
}
