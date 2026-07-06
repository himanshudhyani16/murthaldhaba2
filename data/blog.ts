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
    slug: "best-indian-restaurant-calgary-authentic-north-indian-food",
    image: "/patio1.jpeg",
    gallery: [
      "/photo-1585937421612-70a008356fbe.avif",
      "/photo-1603894584373-5ac82b2ae398.avif",
    ],
    date: "July 6, 2026",
    author: "Murthal Dhaba",
    title: "Experience Authentic North Indian Food at Murthal Dhaba in Calgary",
    category: "Restaurant",
    excerpt:
      "Discover why Murthal Dhaba is one of the best Indian restaurants in Calgary. From authentic North Indian cuisine and tandoori specialties to vibrant events and a pet-friendly patio, every visit is a celebration of great food and warm hospitality.",
    content: [
      "If you're searching for the best Indian restaurant in Calgary, Murthal Dhaba offers an unforgettable dining experience inspired by the rich culinary traditions of North India. Our menu features authentic recipes prepared with fresh ingredients, premium spices, and traditional cooking techniques that deliver the true flavors of India. From creamy butter chicken and aromatic biryani to sizzling tandoori platters and freshly baked naan, every dish is crafted with passion and care.",

      "Murthal Dhaba is more than just a place to eat—it's where families, friends, and the Calgary community come together. Whether you're planning a casual lunch, romantic dinner, weekend outing, birthday celebration, or corporate event, our welcoming atmosphere and exceptional hospitality make every occasion memorable. We also host private parties, cultural celebrations, and festive events throughout the year.",

      "Looking for outdoor dining? Our spacious pet-friendly patio allows you to enjoy authentic Indian cuisine while spending quality time with family, friends, and even your furry companions. Pair your favorite dishes with refreshing beverages and experience one of Calgary's most welcoming dining destinations.",

      "At Murthal Dhaba, our mission is simple: serve authentic Indian food, create memorable experiences, and bring people together through delicious cuisine and genuine hospitality. Visit us today and discover why guests continue to choose Murthal Dhaba for the best North Indian food in Calgary.",
    ],
    tags: [
      "Indian Restaurant",
      "North Indian Cuisine",
      "Calgary",
      "Murthal Dhaba",
    ],
  },
  {
    id: 2,
    slug: "top-10-must-try-indian-dishes-in-calgary",
    image: "/chickenBiryani.webp",
    gallery: ["/chicken.webp", "/paneerButterMasala.jpg"],
    date: "July 10, 2026",
    author: "Murthal Dhaba",
    title: "Must-Try Indian Dishes in Calgary",
    category: "Food Guide",
    excerpt:
      "Explore the most popular Indian dishes in Calgary, from Butter Chicken and Paneer Tikka to Biryani and Tandoori specialties. Find your next favorite meal at Murthal Dhaba.",
    content: [
      "Indian cuisine is known for its rich flavors, aromatic spices, and diverse regional specialties. At Murthal Dhaba, we bring the authentic taste of North India to Calgary with a menu that satisfies every craving.",
      "Our guests love signature dishes like Butter Chicken, Tandoori Chicken, Paneer Butter Masala, Dal Makhani,  Garlic Naan, and Chicken Biryani. Every recipe is prepared fresh using premium ingredients and traditional Indian spices.",
      "Whether you're trying Indian food for the first time or looking for your favorite comfort meal, Murthal Dhaba offers an unforgettable dining experience with authentic flavors and warm hospitality.",
    ],
    tags: ["Indian Food", "Calgary", "North Indian Cuisine", "Murthal Dhaba"],
  },
  {
    id: 3,
    slug: "best-place-for-private-parties-and-events-in-calgary",
    image: "/DSC02971.jpg",
    gallery: ["/insta/DSC03063.webp", "/insta/DSC02146.webp"],
    date: "July 15, 2026",
    author: "Murthal Dhaba",
    title: "Looking for the Perfect Venue for Parties and Events in Calgary?",
    category: "Events",
    excerpt:
      "Celebrate birthdays, anniversaries, corporate gatherings, and family events at Murthal Dhaba with authentic Indian food, exceptional service, and a vibrant atmosphere.",
    content: [
      "Planning a special celebration? Murthal Dhaba is one of Calgary's favorite destinations for birthdays, anniversaries, corporate events, family gatherings, and festive celebrations.",
      "Our experienced team helps create memorable events with customized food packages, delicious Indian cuisine, comfortable seating, and attentive service. Whether you're hosting an intimate dinner or a larger celebration, we ensure every guest enjoys an exceptional experience.",
      "From authentic North Indian dishes to refreshing drinks and lively hospitality, Murthal Dhaba is the perfect venue for creating unforgettable memories with family, friends, and colleagues.",
    ],
    tags: ["Private Events", "Party Venue", "Calgary", "Murthal Dhaba"],
  },
  {
    id: 4,
    slug: "why-authentic-indian-food-is-loved-around-the-world",
    image: "/chickenCurry.webp",
    gallery: ["/shahiKorma.webp", "/chickenRoll.jpg"],
    date: "July 20, 2026",
    author: "Murthal Dhaba",
    title: "Why Authentic Indian Cuisine Is Loved Around the World",
    category: "Culture",
    excerpt:
      "Discover what makes Indian cuisine one of the world's most celebrated culinary traditions, from bold spices and traditional recipes to unforgettable dining experiences.",
    content: [
      "Indian cuisine has earned worldwide recognition for its incredible variety of flavors, fragrant spices, and centuries-old cooking traditions. Every region of India offers unique recipes that reflect its culture and heritage.",
      "At Murthal Dhaba, we proudly bring these authentic North Indian flavors to Calgary using fresh ingredients, handcrafted spice blends, and traditional cooking methods. Every meal is prepared with care to deliver an authentic taste of India.",
      "Whether you're enjoying a rich curry, smoky tandoori dish, freshly baked naan, or flavorful biryani, every bite tells the story of India's culinary heritage and the warmth of its hospitality.",
    ],
    tags: ["Indian Cuisine", "Indian Food", "Calgary", "Murthal Dhaba"],
  },
];

export const blogCategories = [
  "Events",
  "Food Reviews",
  "Recipes",
  "Food Story",
  "Food Festivals",
];
