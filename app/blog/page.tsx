import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { BlogCard } from "@/components/sections/BlogCard";

export const metadata: Metadata = {
  title: `Blog — ${SITE.name}`,
  description:
    "Artigos sobre contratação PJ, reforma tributária, gestão fiscal e boas práticas para empresas e prestadores de serviço.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Blog ContrataPJ</h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Conteúdo especializado em contratação PJ, reforma tributária e gestão de prestadores
            de serviço para agências e consultorias.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
