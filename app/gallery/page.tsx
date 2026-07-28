import type { Metadata } from "next";
import { GallerySection } from "@/components/GallerySection";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery | Murthal Dhaba Restaurant Calgary Photos",
  description:
    "See photos of Murthal Dhaba's dishes, patio & dining space in NE Calgary. Explore our authentic North Indian food and restaurant atmosphere.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" breadcrumb="GALLERY" />
      <GallerySection />
    </>
  );
}
