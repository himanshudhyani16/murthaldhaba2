"use client";
import { motion } from "motion/react";
import Image from "next/image";

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  badge?: string;
}

interface MenuCategoryProps {
  category: string;
  title: string;
  items: MenuItem[];
}

export function MenuCategory({ category, title, items }: MenuCategoryProps) {
  // Split items into two columns for the desktop grid if we want top-to-bottom filling
  // But a simple grid-cols-1 lg:grid-cols-2 automatically places item 1 on left, item 2 on right, etc.
  // To match typical menus where it flows down then right, we can just use CSS columns or split the array.
  // We'll split the array to ensure exact left/right ordering as is common in print menus,
  // or just use standard flex/grid. Standard grid (left, right, left, right) is usually fine.

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/restaurant4.jpg"
          alt="Background food"
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-brand uppercase tracking-[0.2em] text-sm font-semibold block mb-3">
            {category}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
        </motion.div>

      {/* Menu Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative w-full bg-[#0a1114]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 lg:p-16 rounded-sm shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 relative">
          {/* Subtle Vertical Divider for Desktop */}
          <div className="hidden lg:block absolute top-4 bottom-4 left-1/2 w-[1px] bg-brand/20 -translate-x-1/2" />

          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx % 6) }}
              className="w-full flex flex-col"
            >
              <div className="w-full flex items-baseline justify-between mb-2 gap-3">
                <div className="flex items-center gap-3 shrink-0">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    {item.name}
                  </h3>
                  {item.badge && (
                    <span className="bg-brand text-white text-[10px] md:text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Dotted Line */}
                <div className="flex-grow border-b-2 border-dotted border-white/20 relative bottom-1 mx-2"></div>

                <span className="text-white text-xl md:text-2xl font-bold shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-light tracking-wide">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
}
