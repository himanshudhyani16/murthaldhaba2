export type BlogPost = {
  id: number;
  slug: string;
  image: string;
  gallery?: string[];
  date: string;
  author: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  tags: string[];
};

export const blogData: BlogPost[] = [
  {
    id: 1,
    slug: "new-menu-added-our-menu",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    ],
    date: "November 9, 2023",
    author: "Rose",
    title: "New menu added our menu you can exchange your test",
    category: "Recipes",
    excerpt:
      "Japanese food is one of the most popular Restaurant with unique & special menu made by our passionate chefs with love in quality.",
    content: [
      "Japanese food is one of the most popular Restaurant with unique & special menu made by our passionate chefs with love in quality which can impress you more than great test that can happy with the passionate Chef's we always provide the with love and quality with can impress more than great test that can happy with the passionate and love with the test for all our customers.",
      "Japanese food is one of the most popular Restaurant with unique & special menu made by our passionate chefs with love and quality with can impress you more than great test that can happy with the passionate Chef's we always provide the best with love and quality with can impress more than great test that can happy with the passionate and love with the test for all our customers.",
    ],
    tags: ["Lunch", "Dinner", "Desert"],
  },
  {
    id: 2,
    slug: "healthy-kitchen-for-fresh-food",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    ],
    date: "November 9, 2023",
    author: "Smith",
    title: "It's very important to make healthy kitchen for fresh food",
    category: "Food Story",
    excerpt:
      "Keeping a healthy kitchen means fresher ingredients, better hygiene and a happier dining experience for every guest.",
    content: [
      "A healthy kitchen is the foundation of every great meal we serve. Our chefs source fresh ingredients daily, follow strict hygiene standards and take pride in a spotless, well organised kitchen that respects both the food and the people who prepare it.",
      "From the storage of vegetables to the final plating, every step is designed to preserve nutrition and flavour, so that what reaches your table is always fresh, safe and full of taste.",
    ],
    tags: ["Food", "Lunch", "Dinner"],
  },
  {
    id: 3,
    slug: "great-food-more-enjoyable-party",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    ],
    date: "November 7, 2023",
    author: "David",
    title: "Great food can make your all party more enjoyable",
    category: "Events",
    excerpt:
      "Whether it's a birthday, an anniversary or a get together with friends, great food is what people remember the most.",
    content: [
      "Whether it's a birthday, an anniversary or a get together with friends, great food is what people remember the most. Our event menus are crafted to bring people together, with sharing platters, live counters and desserts that keep the celebration going.",
      "We work closely with our guests to plan a menu that fits the mood of the party, making sure every dish adds to the enjoyment of the evening.",
    ],
    tags: ["Events", "Dinner", "Desert"],
  },
  {
    id: 4,
    slug: "convert-your-dinner-more-enjoyable",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    ],
    date: "November 5, 2023",
    author: "Smith",
    title: "How can convert your Dinner more enjoyable and testy",
    category: "Food Reviews",
    excerpt:
      "A few simple changes to how a table is set and paced can turn an ordinary dinner into a memorable one.",
    content: [
      "A few simple changes to how a table is set and paced can turn an ordinary dinner into a memorable one. Start with a light appetiser, let the main course breathe with the right sides, and finish with a dessert that isn't too heavy.",
      "Our team plates every dinner course with this rhythm in mind, so the whole meal feels balanced from the first bite to the last.",
    ],
    tags: ["Dinner", "Food", "Lunch"],
  },
  {
    id: 5,
    slug: "discover-new-menu-new-chef",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    ],
    date: "November 5, 2023",
    author: "Rose",
    title: "Discover the new Menu with our new Chef & mistry test",
    category: "Recipes",
    excerpt:
      "Our new chef brings years of experience and a fresh set of recipes that we can't wait for you to try.",
    content: [
      "Our new chef brings years of experience and a fresh set of recipes that we can't wait for you to try. Every dish on the new menu has been tested and refined in our kitchen before it reaches your table.",
      "Expect bold flavours, thoughtful plating and a few signature dishes that will soon become guest favourites.",
    ],
    tags: ["Lunch", "Dinner", "Food"],
  },
  {
    id: 6,
    slug: "new-year-celebration-events",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    ],
    date: "November 4, 2023",
    author: "David",
    title: "Details about our all Events for New Year celebration",
    category: "Events",
    excerpt:
      "This New Year, we are hosting a full evening of live music, festive menus and a countdown to remember.",
    content: [
      "This New Year, we are hosting a full evening of live music, festive menus and a countdown to remember. Doors open early with a welcome drink, followed by a curated multi course dinner.",
      "Reservations are limited, so make sure to book your table in advance to be part of the celebration.",
    ],
    tags: ["Events", "Desert", "Dinner"],
  },
  {
    id: 7,
    slug: "secret-to-perfectly-grilled-steaks",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    ],
    date: "November 2, 2023",
    author: "Rose",
    title: "The secret to perfectly grilled steaks every time",
    category: "Recipes",
    excerpt:
      "Getting a steak right every time comes down to the cut, the resting time and the heat of the grill.",
    content: [
      "Getting a steak right every time comes down to the cut, the resting time and the heat of the grill. Our chefs rest every cut before it goes on, and again before it reaches the table, locking in the juices.",
      "Paired with the right sides and a simple sauce, it's a dish that never goes out of style on our menu.",
    ],
    tags: ["Dinner", "Food", "Lunch"],
  },
  {
    id: 8,
    slug: "seasonal-ingredients-make-difference",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    ],
    date: "October 28, 2023",
    author: "Smith",
    title: "Why our seasonal ingredients make the difference",
    category: "Food Story",
    excerpt:
      "Seasonal produce is picked at its peak, meaning better flavour, better texture and a menu that keeps evolving.",
    content: [
      "Seasonal produce is picked at its peak, meaning better flavour, better texture and a menu that keeps evolving through the year. We change parts of our menu with the seasons to make the most of what's fresh.",
      "It also means supporting local farms and reducing the distance our ingredients travel before they reach your plate.",
    ],
    tags: ["Food", "Lunch", "Desert"],
  },
  {
    id: 9,
    slug: "behind-the-scenes-busy-kitchen",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    ],
    date: "October 25, 2023",
    author: "David",
    title: "A behind the scenes look at our busy kitchen",
    category: "Food Festivals",
    excerpt:
      "Ever wondered what happens behind the pass during a busy service? Here's a look inside our kitchen.",
    content: [
      "Ever wondered what happens behind the pass during a busy service? Every station works in sync, from prep to grill to plating, so that each dish leaves the kitchen exactly on time and exactly as it should look.",
      "It takes a coordinated team and a lot of practice, and it's something our chefs take real pride in every single night.",
    ],
    tags: ["Food", "Dinner", "Lunch"],
  },
];

export const blogCategories = [
  "Events",
  "Food Reviews",
  "Recipes",
  "Food Story",
  "Food Festivals",
];
