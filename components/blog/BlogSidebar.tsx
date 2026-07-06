import Link from "next/link";
import { Search } from "lucide-react";
import { blogData, blogCategories } from "@/data/blog";

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 text-white text-lg font-semibold mb-6">
      <span className="w-2 h-2 rounded-full bg-brand" />
      {children}
    </h4>
  );
}

export function BlogSidebar({ currentSlug }: { currentSlug?: string }) {
  const recentPosts = blogData
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);
  const allTags = Array.from(new Set(blogData.flatMap((p) => p.tags)));

  return (
    <aside className="flex flex-col gap-10 w-full">
      {/* Search */}
      {/* <div>
        <SidebarHeading>Search</SidebarHeading>
        <form className="relative">
          <input
            type="text"
            placeholder="Keywords"
            className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/50 px-4 py-3 text-sm focus:outline-none focus:border-brand"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-0 top-0 h-full px-4 bg-brand text-white hover:bg-brand-dark transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div> */}

      {/* Categories */}
      {/* <div>
        <SidebarHeading>Categories</SidebarHeading>
        <ul className="flex flex-col gap-3">
          {blogCategories.map((category) => (
            <li key={category}>
              <span className="text-white/80 hover:text-brand transition-colors cursor-pointer text-sm">
                {category}
              </span>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Recent Posts */}
      <div>
        <SidebarHeading>Recent Post</SidebarHeading>
        <ul className="flex flex-col gap-5">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} className="flex gap-4 group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-sm shrink-0"
                />
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-brand text-xs">Date: {post.date}</span>
                  <span className="text-white text-sm leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                    {post.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Promo banner */}
      <div className="relative overflow-hidden rounded-sm">
        <img
          src="/poster.heic"
          alt="Fresh & Organic Healthy Food"
          className="w-full object-cover"
        />
      </div>

      {/* Tags */}
      {/* <div>
        <SidebarHeading>Tags</SidebarHeading>
        <div className="flex flex-wrap gap-3">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="text-white/80 hover:text-brand transition-colors cursor-pointer text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div> */}
    </aside>
  );
}
