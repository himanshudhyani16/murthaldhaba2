"use client";
import Image from "next/image";
import { motion } from "motion/react";

interface BlogHeaderProps {
  title: string;
  breadcrumb: string;
}

export function BlogHeader({ title, breadcrumb }: BlogHeaderProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <Image
          src="/patio1.jpeg"
          alt="Background food"
          fill
          sizes="100vw"
          // className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          className="w-full h-full object-cover opacity-60 "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center pt-40 md:mt-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl lg:text-6xl font-semibold text-white mb-6 max-w-5xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-brand uppercase tracking-[0.2em] text-sm md:text-base font-semibold"
        >
          <span className="text-brand">HOME</span>
          <span className="text-white/60 mx-2">—</span>
          <span>{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  );
}
