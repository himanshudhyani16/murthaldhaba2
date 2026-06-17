"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      date: "November 9, 2023",
      author: "Rose",
      title: "New menu added our menu you can exchange your test",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
      date: "November 9, 2023",
      author: "Smith",
      title: "It's very important to make healthy kitchen for fresh food",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      date: "November 7, 2023",
      author: "David",
      title: "Great food can make your all party more enjoyable",
    },
  ];

  return (
    <section className="relative w-full ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="/restaurant4.jpg"
          alt="Background food"
          // className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-80" />
      </div>
      <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-allura text-brand text-4xl mb-4 block z-10"
        >
          Our Blog
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-16 text-center z-10"
        >
          Latest Blog Post
        </motion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex flex-col bg-[var(--color-bg-darker)] rounded-sm overflow-hidden group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-[13px] text-brand mb-4">
                  <span>Date: {post.date}</span>
                  <span className="mx-2">/</span>
                  <span>By: {post.author}</span>
                </div>

                <h3 className="text-white text-xl md:text-2xl font-medium leading-snug mb-6 transition-colors duration-300">
                  {post.title}
                </h3>

                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-white group-hover:text-brand transition-colors duration-300">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
