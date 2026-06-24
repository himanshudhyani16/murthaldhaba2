"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = ["Breakfast", "Brunch", "Lunch", "Dinner"];

interface MenuItem {
  name: string;
  price: string;
  description: string;
  badge?: string;
}

const menuData: Record<string, MenuItem[]> = {
  Breakfast: [
    {
      name: "Grill Salmon",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
      badge: "RECOMMENDED",
    },
    {
      name: "Summertime Pesto Pasta",
      price: "$20.00",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "Crispy Skin Chicken",
      price: "$15.15",
      description: "Ricotta, radicchio, prosciutto salad, cabernet.",
    },
    {
      name: "Pan Fried Barramundi",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "BBQ ribs",
      price: "$10.20",
      description: "Chicken ribs, garlic & ginger, green sauce",
      badge: "SEASONAL",
    },
    {
      name: "Coconut Chia Bowl",
      price: "$12.85",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "Cassonut Salad",
      price: "$16.85",
      description: "Tomato, Salt, Black Pepper, Lemon",
      badge: "CHEF CHOICE",
    },
  ],
  Brunch: [
    {
      name: "Egg Benedict",
      price: "$18.50",
      description: "Poached eggs, hollandaise, English muffin",
      badge: "RECOMMENDED",
    },
    {
      name: "Avocado Toast",
      price: "$14.00",
      description: "Sourdough, smashed avocado, cherry tomatoes",
    },
    {
      name: "Pancakes",
      price: "$12.50",
      description: "Maple syrup, fresh berries, whipped butter",
    },
    {
      name: "French Toast",
      price: "$16.00",
      description: "Brioche, cinnamon, powdered sugar",
    },
    {
      name: "Smoked Salmon Bagel",
      price: "$15.50",
      description: "Cream cheese, capers, red onion, dill",
    },
    {
      name: "Shakshuka",
      price: "$17.00",
      description: "Baked eggs, spiced tomato sauce, feta, sourdough",
      badge: "POPULAR",
    },
    {
      name: "Breakfast Burrito",
      price: "$13.50",
      description: "Scrambled eggs, black beans, salsa, cheese",
    },
  ],
  Lunch: [
    {
      name: "Wagyu Burger",
      price: "$24.00",
      description: "Grass-fed beef, cheddar, caramelised onion",
    },
    {
      name: "Caesar Salad",
      price: "$15.00",
      description: "Cos lettuce, bacon, croutons, parmesan",
    },
    {
      name: "Fish and Chips",
      price: "$22.00",
      description: "Beer battered flathead, tartare sauce",
    },
    {
      name: "Margherita Pizza",
      price: "$18.00",
      description: "Fresh mozzarella, tomato sauce, basil",
      badge: "CLASSIC",
    },
    {
      name: "Grilled Chicken Wrap",
      price: "$14.50",
      description: "Lettuce, tomato, avocado, aioli",
    },
    {
      name: "Quinoa Salad Bowl",
      price: "$16.00",
      description: "Mixed greens, roasted veggies, lemon dressing",
    },
    {
      name: "Beef Tacos",
      price: "$19.00",
      description: "Slow-cooked beef, pico de gallo, sour cream",
      badge: "SPICY",
    },
  ],
  Dinner: [
    {
      name: "Ribeye Steak",
      price: "$45.00",
      description: "300g premium cut, garlic butter, asparagus",
      badge: "CHEF CHOICE",
    },
    {
      name: "Lobster Ravioli",
      price: "$32.00",
      description: "Handmade pasta, creamy bisque sauce",
    },
    {
      name: "Mushroom Risotto",
      price: "$26.00",
      description: "Arborio rice, truffle oil, parmesan",
    },
    {
      name: "Roasted Duck",
      price: "$38.00",
      description: "Plum sauce, bok choy, jasmine rice",
    },
    {
      name: "Pan-Seared Scallops",
      price: "$29.00",
      description: "Cauliflower purée, crispy pancetta",
    },
    {
      name: "Lamb Shanks",
      price: "$35.00",
      description: "Slow-braised, mashed potatoes, red wine jus",
      badge: "RECOMMENDED",
    },
    {
      name: "Eggplant Parmesan",
      price: "$22.00",
      description: "Layers of eggplant, marinara, mozzarella",
    },
  ],
};

const categoryImages = {
  Breakfast: "/chickenRoll.jpg",
  Brunch: "/chickenNoodles.jpg",
  Lunch: "/chickenCurry.webp",
  Dinner: "/chickenBiryani.webp",
};

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("Breakfast");

  return (
    <section className="relative w-full ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/restaurant1.jpg"
          alt="Background food"
          // className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
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
          Test a Little Bit
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
                {menuData[activeTab as keyof typeof menuData].map(
                  (item, idx) => (
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
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Tab Image */}
          <div className="w-full relative rounded-sm overflow-hidden min-h-[400px] lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={categoryImages[activeTab as keyof typeof categoryImages]}
                alt={`${activeTab} signature dishes`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Subtle overlay gradient to match the dark theme nicely */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10"></div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
