import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { VibeSection } from "./components/VibeSection";
import { MenuSection } from "./components/MenuSection";
import { GallerySection } from "./components/GallerySection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EventBookingSection } from "./components/EventBookingSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { BlogSection } from "./components/BlogSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { EventBookingSection2 } from "./components/EventBookingSection2";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen font-sans selection:bg-brand selection:text-white">
        <div className="bg-texture" />
        <div className="flex flex-col w-full h-full relative z-10">
         <Header />
          <Hero />
          <AboutSection />
          <EventBookingSection2 />
          <VibeSection />
          <MenuSection />
          <GallerySection />
          <ExperienceSection />
          <EventBookingSection />
          <TestimonialSection />
          <BlogSection />
          <NewsletterSection />
          <Footer />
          <BackToTop />
        </div>
      </div>
    </>
  );
}
