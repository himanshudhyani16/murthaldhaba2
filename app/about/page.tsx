import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { BlogSection } from "@/components/BlogSection";
import { EventBookingSection2 } from "@/components/EventBookingSection2";
import { PageHeader } from "@/components/PageHeader";
import { TestimonialSection } from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "About Us | Murthal Dhaba - North Indian Dhaba Calgary",
  description:
    "Learn the story behind Murthal Dhaba, Calgary's home-style North Indian dhaba. Authentic Punjabi recipes, community events & pet-friendly patio dining.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="ABOUT US" />
      <AboutSection />
      <EventBookingSection2 /> 
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
