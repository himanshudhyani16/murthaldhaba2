import { BlogGrid } from "@/components/blog/BlogGrid";
import { PageHeader } from "@/components/PageHeader";

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" breadcrumb="BLOG" />
      <BlogGrid />
    </>
  );
}
