import { GallerySection } from "@/components/GallerySection";
import { PageHeader } from "@/components/PageHeader";
export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" breadcrumb="GALLERY" />
      <GallerySection />
    </>
  );
}
