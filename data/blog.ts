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
  sections?: {
    heading?: string;
    paragraphs: string[];
  }[];
  tags: string[];
};

export const blogData: BlogPost[] = [
  {
    id: 5,
    slug: "welcome-to-murthal-dhaba-indian-restaurant-calgary",
    image: "/patio1.jpeg",
    gallery: ["/DSC02971.jpg", "/insta/DSC03063.webp"],
    date: "July 28, 2026",
    author: "Murthal Dhaba",
    title: "Welcome to Murthal Dhaba",
    category: "Restaurant",
    excerpt:
      "Welcome to Murthal Dhaba in NE Calgary for fresh parathas, tandoori, curries, biryanis, warm hospitality, live music nights, and pet-friendly patio dining.",
    content: [],
    sections: [
      {
        heading: "Welcome to Murthal Dhaba",
        paragraphs: [
          "We're so glad you found us. If you've been searching for an Indian restaurant near me, we hope your search ends here. Located at 619 36 Ave NE, Calgary, AB T2E 2L8, Murthal Dhaba is our little slice of home, a cozy NE Calgary eatery where we bring you fresh-rolled parathas, sizzling tandoori, slow-cooked curries, aromatic biryanis, and classics like Butter Chicken and Dal Makhni.",
          "We're open Monday to Saturday, 11 AM to 11 PM, and Sunday from 2 PM to 9 PM. Whether it's a family dinner, a birthday, a corporate gathering, or a festive celebration like Diwali or Holi, we love turning meals into memories. Our pet-friendly patio, live music nights, and warm hospitality all come from one simple idea: we want you to feel like you're eating ghar jaisa khana, food made with the same love as home.",
        ],
      },
      {
        heading: "What We're Known For",
        paragraphs: [
          "Our parathas are handmade and stuffed fresh to order, Aloo, Paneer, Gobi, Egg, and Keema, all cooked to perfection right on the tawa. Pair one with our Dal Makhni, simmered overnight for that deep, comforting flavor, or try our Mix Veg and Palak Paneer for something lighter.",
          "We keep our kitchen true to traditional Punjabi methods, using fresh ingredients and carefully balanced spices in everything we make, from our silky Butter Chicken to our smoky Dal Tadka. We also offer generous portions of Biryani, Rolls, and a full range of vegetarian dishes, because we want there to be something here for everyone at your table.",
        ],
      },
      {
        heading: "Why Guests Call Us the Best Indian Restaurant Near Me",
        paragraphs: [
          "We hear it often, and it means the world to us: guests calling Murthal Dhaba the best Indian restaurant near me. We think it comes down to the little things, fresh produce, polite service, and recipes we've stayed true to for years. We're proud to be an Indo Canadian restaurant that blends authentic Punjabi cooking with the warmth of the community we serve, and we're honored to be considered among the top choices for an Indian restaurant in Calgary Alberta and across the wider search for an Indian restaurant in Calgary Canada.",
        ],
      },
      {
        heading: "More Than a Meal",
        paragraphs: [
          "We host kitty parties, engagements, festival specials, and live music evenings, because in our culture, food is never just food. It's a reason to gather, laugh, and linger a little longer over chai. Our outdoor patio is a favorite with pet owners looking for a relaxed evening under the Calgary sky.",
          "We're proud to be part of Calgary's diverse community, blending classic Punjabi recipes with the warm, welcoming spirit of the city we now call home.",
        ],
      },
      {
        heading: "Craving Something Different?",
        paragraphs: [
          "If you typed steak sandwich near me, best pizza in Calgary, or pizza in Calgary into your search, we'd love the chance to show you something different. Trade that craving for our flaky stuffed parathas or a bowl of slow-simmered curry, and we think you'll be glad you did.",
        ],
      },
      {
        heading: "Visit Us or Get in Touch",
        paragraphs: [
          "We'd love to host you, whether you're stopping by for a quiet lunch, ordering takeout, or planning an event.",
          "619 36 Ave NE, Calgary, AB T2E 2L8 | +1 204-951-5359 | murthal.dhaba36@gmail.com | murthaldhaba.com",
          "Come hungry, leave full, happy, and already planning your next visit.",
        ],
      },
    ],
    tags: [
      "Indian Restaurant",
      "Calgary",
      "North Indian Cuisine",
      "Punjabi Food",
      "Murthal Dhaba",
    ],
  },
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
