import { BLOG_POSTS } from "@/lib/blog-posts";
import { BlogCard } from "@/components/sections/BlogCard";

export function PopularPosts() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Posts populares do nosso blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
