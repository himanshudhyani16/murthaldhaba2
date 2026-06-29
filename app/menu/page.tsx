import { MenuCategory } from "@/components/menu/MenuCategory";
import { PageHeader } from "@/components/PageHeader";
import { TestimonialSection } from "@/components/TestimonialSection";

import {
  breakfastItems,
  lunchItems,
  dinnerItems,
  vegItems,
  nonVegItems,
  breadsItems,
  riceItems,
  parathaItems,
  rollsItems,
  chineseItems,
  vegStartersItems,
  nonVegStartersItems,
  momosItems,
  chaiCoffeeItems,
  dessertsItems,
} from "@/data/menu";

export default function MenuPage() {
  return (
    <>
      <PageHeader title="Menu" breadcrumb="OUR MENU" />

      <MenuCategory
        category="menu"
        title="VEG STARTERS"
        items={vegStartersItems}
      />
      <MenuCategory
        category="menu"
        title="NON-VEG STARTERS"
        items={nonVegStartersItems}
      />

      <MenuCategory category="menu" title="VEG" items={vegItems} />
      <MenuCategory category="menu" title="NON-VEG" items={nonVegItems} />

      <MenuCategory category="menu" title="BREADS" items={breadsItems} />
      <MenuCategory category="menu" title="RICE" items={riceItems} />
      <MenuCategory category="menu" title="PARATHA" items={parathaItems} />
      <MenuCategory category="menu" title="ROLLS" items={rollsItems} />
      <MenuCategory
        category="menu"
        title="CHINESE & MORE.."
        items={chineseItems}
      />
      <MenuCategory category="menu" title="MOMOS" items={momosItems} />


      <MenuCategory
        category="menu"
        title="CHAI & COFFEE"
        items={chaiCoffeeItems}
      />
      <MenuCategory category="menu" title="DESSERTS" items={dessertsItems} />

      {/* <MenuCategory
        category="menu"
        title="Breakfast Menu"
        items={breakfastItems}
      />
      <MenuCategory category="menu" title="Lunch Menu" items={lunchItems} />
      <MenuCategory category="menu" title="Dinner Menu" items={dinnerItems} /> */}
      <TestimonialSection />
    </>
  );
}
