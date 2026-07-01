"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = ["Veg", "NonVeg", "Paratha", "Rolls"] as const;
type Category = (typeof categories)[number];

interface MenuItem {
  name: string;
  price: string;
  description: string;
  badge?: string;
}

const menuData: Record<Category, MenuItem[]> = {
  Veg: [
    {
      name: "Paneer Butter Masala",
      price: "$13.99",
      description: "Cottage cheese cubes in a spicy and creamy tomato gravy",
    },
    {
      name: "Kadhai Paneer",
      price: "$13.99",
      description: "Cottage cheese cooked with bell peppers and whole spices",
    },
    {
      name: "Lehsooni Chaap Masala",
      price: "$13.99",
      description: "Soya chaap cooked with bold garlic and aromatic spices",
    },

    {
      name: "Shahi Paneer",
      price: "$15.99",
      description: "Cottage cheese in a royal creamy cashew gravy",
    },
    {
      name: "Dhaba Style Rajma",
      price: "$14.99",
      description: "Red kidney beans cooked in a traditional homestyle gravy",
    },
  ],
  NonVeg: [
    {
      name: "Tandoori Chicken",
      price: "$17.99",
      description:
        "Classic marinated chicken roasted in a tandoor (Half - 4 pcs | Full - 8 pcs)",
    },

    {
      name: "Butter Chicken",
      price: "$14.99",
      description:
        "Tender chicken cooked in a rich, creamy tomato and butter sauce",
    },
    {
      name: "Chicken Curry",
      price: "$13.99",
      description:
        "Classic homestyle chicken curry cooked with traditional Indian spices",
    },

    // Right Column
    {
      name: "Palak Chicken",
      price: "$16.99",
      description:
        "Chicken pieces simmered in a spiced and creamy spinach gravy",
    },
    {
      name: "Kadhai Chicken",
      price: "$14.99",
      description:
        "Chicken cooked with fresh bell peppers, onions, and kadhai spices",
    },
  ],
  Paratha: [
    {
      name: "Aloo Paratha",
      price: "$3.99",
      description:
        "Flaky whole wheat flatbread stuffed with spiced mashed potatoes",
    },
    {
      name: "Paneer Paratha",
      price: "$6.99",
      description: "Flatbread stuffed with spiced grated cottage cheese",
    },
    {
      name: "Gobi Paratha",
      price: "$4.99",
      description: "Flatbread stuffed with savory spiced cauliflower",
    },
    {
      name: "Egg Paratha",
      price: "$6.99",
      description: "A tasty layered flatbread cooked with a spiced egg mixture",
    },
    {
      name: "Keema Paratha",
      price: "$8.99",
      description: "Flatbread stuffed with savory spiced minced meat",
    },
  ],
  Rolls: [
    {
      name: "Paneer Roll",
      price: "$15.99",
      description:
        "Spiced paneer cubes wrapped in a soft flatbread with onions and chutney",
    },
    {
      name: "Chicken Roll",
      price: "$21.99",
      description:
        "Tender spiced chicken pieces rolled with fresh veggies and tangy sauces",
    },
    {
      name: "Egg Roll",
      price: "$17.99",
      description:
        "A classic street-style egg roll with crispy onions and sauces",
    },
    {
      name: "Chaap Roll",
      price: "$11.99",
      description: "Flavorful soya chaap wrapped in a soft paratha",
    },
    {
      name: "Seekh Roll",
      price: "$14.99",
      description: "Juicy minced kebabs wrapped in a warm flatbread",
    },
  ],
};

const categoryImages: Record<Category, string> = {
  Veg: "/paneerButterMasala.jpg",
  NonVeg: "/chickenCurry.webp",
  Paratha: "/paratha.jpg",
  Rolls: "/chickenRoll.jpg",
};

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<Category>("Veg");

  return (
    <section className="relative w-full z-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <Image
          src="/restaurant1.jpg"
          alt="Background food"
          fill
          sizes="100vw"
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>
      <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto z-10 flex flex-col items-center">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-allura text-brand text-4xl mb-4 z-10"
        >
          Taste the Tradition
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold leading-tight text-white tracking-wide mb-10 z-10"
        >
          Our Special Menu
        </motion.h2>
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16 z-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-8 py-2 border transition-all duration-300 ${
                activeTab === category
                  ? "border-brand text-brand"
                  : "border-white/20 text-white hover:border-white/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        {/* Content Area */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 z-10">
          {/* Menu Items List */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                {menuData[activeTab].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-full flex flex-col"
                  >
                    <div className="w-full flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-white text-lg font-medium">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="bg-brand text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex-grow border-b-2 border-dotted border-white/20 mx-4 relative top-1"></div>
                      <span className="text-white text-xl font-semibold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm font-light">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Tab Image */}
          <div className="w-full relative rounded-sm overflow-hidden min-h-[400px] lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={categoryImages[activeTab]}
                  alt={`${activeTab} signature dishes`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            {/* Subtle overlay gradient to match the dark theme nicely */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10"></div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
