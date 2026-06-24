import { AboutSection } from "@/components/AboutSection";
import { BlogSection } from "@/components/BlogSection";
import { EventBookingSection2 } from "@/components/EventBookingSection2";
import { PageHeader } from "@/components/PageHeader";
import { TestimonialSection } from "@/components/TestimonialSection";
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
