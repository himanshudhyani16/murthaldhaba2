import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { PageHeader } from "@/components/PageHeader";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { blogData } from "@/data/blog";

export function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Murthal Dhaba`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageHeader title={post.title} breadcrumb="BLOG DETAIL" />

      <section className="relative w-full py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-bg-darker)]">
          <img
            src="/restaurant4.jpg"
            alt="Background restaurant"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-darker)] via-black/40 to-[var(--color-bg-darker)] opacity-90" />
        </div>

        <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <article className="lg:col-span-2 flex flex-col">
            <div className="w-full aspect-[16/10] overflow-hidden rounded-sm mb-8">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center text-[13px] text-brand mb-4">
              <span>Date: {post.date}</span>
              <span className="mx-2">/</span>
              <span>By: {post.author}</span>
            </div>

            <h1 className="text-white text-2xl md:text-3xl font-semibold leading-snug mb-6">
              {post.title}
            </h1>

            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-white/70 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}

            {post.gallery && post.gallery.length > 0 && (
              <>
                <h3 className="flex items-center gap-2 text-white text-lg font-semibold mt-4 mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  New Test of Sushi
                </h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {post.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-[4/3] overflow-hidden rounded-sm"
                    >
                      <Image
                        src={img}
                        alt={`${post.title} ${idx + 1}`}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="flex flex-wrap items-center justify-between gap-6 pt-8 mt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-white/60">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white/80 hover:text-brand transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white/60 text-sm">Share:</span>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-brand hover:bg-brand transition-all"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-brand hover:bg-brand transition-all"
                >
                  <FaTwitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-brand hover:bg-brand transition-all"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar currentSlug={post.slug} />
          </div>
        </div>
      </section>
    </>
  );
}
