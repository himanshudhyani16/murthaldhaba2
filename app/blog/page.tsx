import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog | Indian Food & Dining Tips - Murthal Dhaba Calgary",
  description:
    "Read Murthal Dhaba's blog for Calgary dining guides, must-try Indian dishes, event venue tips & stories about authentic North Indian cuisine.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" breadcrumb="BLOG" />
      <BlogGrid />
    </>
  );
}
