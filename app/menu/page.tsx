import { MenuCategory } from "@/components/menu/MenuCategory";
import { PageHeader } from "@/components/PageHeader";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function MenuPage() {
  const breakfastItems = [
    // Left Column
    {
      name: "Delicious Pancakes",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
      badge: "RECOMMENDED",
    },
    {
      name: "Oatmeal Spirit",
      price: "$27.85",
      description: "Kiwee, Baby Corn, Blue berry",
    },
    {
      name: "Summertime Pesto Pasta",
      price: "$18.10",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "Steak & Toast",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
      badge: "CHEF CHOICE",
    },
    {
      name: "Avocado Smash",
      price: "$12.85",
      description: "Ricotta, radicchio, prosciutto salad, cabernet.",
    },

    // Right Column
    {
      name: "Fish Oysters Dozen",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "Classic Eggs Benedict",
      price: "$27.85",
      description: "Smoked canadian bacon, Hollandaise sauce, Muffin",
    },
    {
      name: "Has Brown",
      price: "$27.85",
      description: "Tomato, Salt, Black Pepper, Lemon",
      badge: "BOGO OFFER",
    },
    {
      name: "Sunny California",
      price: "$20.00",
      description: "Poached eggs, Avocado, Tomato, Muffin",
      badge: "SEASONAL",
    },
    {
      name: "Fish & Chips",
      price: "$27.85",
      description: "Tomato, Salt, Black Pepper, Lemon",
      badge: "RECOMMENDED",
    },
  ];

  const lunchItems = [
    // Left Column
    {
      name: "Grill Salmon",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
      badge: "RECOMMENDED",
    },
    {
      name: "Summertime Pesto Pasta",
      price: "$18.10",
      description: "Kiwee, Baby Corn, Blue berry",
    },
    {
      name: "Crispy Skin Chicken",
      price: "$12.85",
      description: "Ricotta, radicchio, prosciutto salad, cabernet.",
    },
    {
      name: "Cachapas Queso",
      price: "$27.85",
      description: "Chilled tomato, cucumber, garlic,red pepper",
    },
    {
      name: "Roasted Lamb Rump",
      price: "$20.00",
      description: "Grilled lamb cutlets, pomegranate glaze",
      badge: "SEASONAL",
    },

    // Right Column
    {
      name: "Coconut Chia Bowl",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "Cassonut Salad",
      price: "$27.85",
      description: "Tomato, Salt, Black Pepper, Lemon",
      badge: "CHEF CHOICE",
    },
    {
      name: "Pan Con Berenjina Frita",
      price: "$27.85",
      description: "Marinated seabass with sour sauce, dill & coriander",
    },
    {
      name: "BBQ Wings",
      price: "$27.85",
      description: "Poached eggs, Avocado, Tomato, Muffin",
      badge: "BOGO OFFER",
    },
    {
      name: "Ebony Fillet Steak",
      price: "$27.85",
      description: "Truffle mash, pepper sauce",
    },
  ];

  const dinnerItems = [
    // Left Column
    {
      name: "Beer Battered Fish & Chips",
      price: "$27.85",
      description: "Atlantic cod fillet, chips, salad, tartare, lemon",
    },
    {
      name: "Summertime Pesto Pasta",
      price: "$18.10",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "Crispy Skin Chicken",
      price: "$12.85",
      description: "Ricotta, radicchio, prosciutto salad, cabernet.",
      badge: "RECOMMENDED",
    },
    {
      name: "Pan Fried Barramundi",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "BBQ ribs",
      price: "$20.00",
      description: "Soft and juice, with garlic & ginger",
      badge: "SEASONAL",
    },

    // Right Column
    {
      name: "Coconut Chia Bowl",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "Cassonut Salad",
      price: "$27.85",
      description: "Tomato, Salt, Black Pepper, Lemon",
      badge: "CHEF CHOICE",
    },
    {
      name: "Fish Oysters Dozen",
      price: "$27.85",
      description: "Soft and juice, with garlic & ginger",
    },
    {
      name: "BBQ Wings",
      price: "$27.85",
      description: "Tomato, Salt, Black Pepper, Lemon",
      badge: "SEASONAL",
    },
    {
      name: "Fish & Chips",
      price: "$27.85",
      description: "Tomato, Salt, Black Pepper, Lemon",
      badge: "RECOMMENDED",
    },
  ];

  return (
    <>
      <PageHeader title="Menu" breadcrumb="OUR MENU" />
   

      <MenuCategory
        category="BREAKFAST"
        title="Breakfast Menu"
        items={breakfastItems}
      />

      <MenuCategory category="LUNCH" title="Lunch Menu" items={lunchItems} />
      <MenuCategory category="DINNER" title="Dinner Menu" items={dinnerItems} />
      <TestimonialSection />
    </>
  );
}
