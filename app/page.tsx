"use client";

import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { VibeSection } from "../components/VibeSection";
import { MenuSection } from "../components/MenuSection";
import { GallerySection } from "../components/GallerySection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EventBookingSection } from "../components/EventBookingSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { BlogSection } from "../components/BlogSection";

import { EventBookingSection2 } from "../components/EventBookingSection2";
import UpcomingEvents from "@/components/UpcomingEvents";
import HeroSection from "@/components/HeroSection";
import SpecialOfferModal from "@/components/modal/SpecialOfferModal";

export default function Home() {
  const HERO_IMAGES = [
    "/patio1.jpeg",
    "/DSC03063.jpg",
    "/insta/DSC03107.webp",
    "/insta/DSC02110.webp",
    "/insta/DSC02108.webp",
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isSpecialOfferModalOpen, setIsSpecialOfferModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const specialOfferModalTimer = window.setTimeout(() => {
      setIsSpecialOfferModalOpen(true);
    }, 3000);

    return () => window.clearTimeout(specialOfferModalTimer);
  }, []);

  return (
    <>
      <div className="relative min-h-screen font-sans selection:bg-brand selection:text-white">
        <SpecialOfferModal
          open={isSpecialOfferModalOpen}
          onClose={() => setIsSpecialOfferModalOpen(false)}
        />
        <div className="bg-texture" />
        <div className="flex flex-col w-full h-full relative z-10">
          <HeroSection
            heroImages={HERO_IMAGES}
            currentBgIndex={currentBgIndex}
          />
          {/* <Hero /> */}
          <AboutSection />
          {/* <UpcomingEvents /> */}
          {/* <EventBookingSection2 /> */}
          <VibeSection />
          <MenuSection />
          <GallerySection />
          <ExperienceSection />
          <EventBookingSection />
          <TestimonialSection />
          <BlogSection />
        </div>
      </div>
    </>
  );
}
