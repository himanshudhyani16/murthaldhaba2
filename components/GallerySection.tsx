'use client';
import { motion } from "motion/react";
import { IoLogoInstagram } from "react-icons/io5";

const images = [
  { id: 1, src: "/club.jpg", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { id: 2, src: "patio1.jpeg", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 3, src: "/insta/DSC02108.webp", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 4, src: "/insta/DA256F25-03AE-4714-B231-1219C6B2D36C.webp", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { id: 5, src: "/insta/DSC02146.webp", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { id: 6, src: "/insta/DSC03171.webp", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { id: 7, src: "/insta/DSC03107.webp", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 8, src: "/insta/DSC02046.webp", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 9, src: "/insta/DSC03185.webp", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 10, src: "/insta/DSC02110.webp", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 11, src: "/insta/DSC02971.webp", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 12, src: "/patio2.jpeg", colSpan: "col-span-1", rowSpan: "row-span-1" },
];

export function GallerySection() {
  return (
    <section className="relative w-full bg-black/20">
      <div className="relative w-full mx-auto p-1.5 md:p-3">
        {/* Center Instagram Badge */}
        <motion.a 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: 1, x: "-50%", y: "-50%" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, x: "-50%", y: "-50%" }}
          className="absolute top-1/2 left-1/2 z-20 w-36 h-36 md:w-52 md:h-52 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          <span className="text-black font-semibold text-sm md:text-lg mb-1 tracking-tight">Follow Us on</span>
          <span className="text-brand font-bold text-base md:text-xl tracking-wide">Instagram</span>
        </motion.a>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-3 auto-rows-[160px] md:auto-rows-[220px] lg:auto-rows-[280px]">
          {images.map((img, idx) => (
            <motion.div 
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`relative overflow-hidden group cursor-pointer ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt={`Gallery food ${img.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center z-10">
                <IoLogoInstagram  className="w-10 h-10 md:w-12 md:h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
