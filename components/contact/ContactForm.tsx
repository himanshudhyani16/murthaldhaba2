'use client';
import { motion } from "motion/react";

export function ContactForm() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80"
          alt="Restaurant table setup"
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-darker)] via-black/50 to-[var(--color-bg-darker)] opacity-90" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand uppercase tracking-[0.2em] text-sm font-semibold block mb-3">
            MESSAGE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Send us a Message
          </h2>
        </motion.div>

        {/* Form Container */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Top Row: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border border-white/20 text-white px-5 py-4 outline-none focus:border-brand transition-colors placeholder:text-gray-400 font-light"
                required
              />
            </div>
            <div className="w-full">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border border-white/20 text-white px-5 py-4 outline-none focus:border-brand transition-colors placeholder:text-gray-400 font-light"
                required
              />
            </div>
          </div>

          {/* Second Row: Phone & Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full bg-transparent border border-white/20 text-white px-5 py-4 outline-none focus:border-brand transition-colors placeholder:text-gray-400 font-light"
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-transparent border border-white/20 text-white px-5 py-4 outline-none focus:border-brand transition-colors placeholder:text-gray-400 font-light"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="w-full">
            <textarea 
              placeholder="Message" 
              rows={8}
              className="w-full bg-transparent border border-white/20 text-white px-5 py-4 outline-none focus:border-brand transition-colors placeholder:text-gray-400 font-light resize-none"
              required
            ></textarea>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 mt-4">
            
            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full sm:w-auto px-10 py-4 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
            >
              Send Message
            </button>

            {/* Newsletter Checkbox */}
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="newsletter" 
                className="w-4 h-4 cursor-pointer accent-brand"
              />
              <label htmlFor="newsletter" className="text-gray-300 font-light cursor-pointer text-sm md:text-base">
                Send me your <span className="text-brand font-medium">Newsletter</span>
              </label>
            </div>

          </div>
        </motion.form>

      </div>
    </section>
  );
}
