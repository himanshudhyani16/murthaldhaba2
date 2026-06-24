'use client';
import { Bell } from "lucide-react";
import { motion } from "motion/react";

export function TopBar() {
  return (
    <div className="w-full flex items-center justify-between py-3 px-6 md:px-16 text-sm text-gray-300 font-light border-b border-white/5 relative z-10 w-full container mx-auto">
      <div className="flex gap-4 items-center">
        <a href="#" className="hover:text-white transition-colors cursor-pointer">Facebook</a>
        <span className="text-gray-600">|</span>
        <a href="#" className="hover:text-white transition-colors cursor-pointer">Instagram</a>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <Bell className="w-4 h-4 text-brand group-hover:animate-bounce" />
        <span className="hidden sm:inline">Get 35% Discount for all foods till Dec, 25</span>
      </motion.div>
    </div>
  );
}
