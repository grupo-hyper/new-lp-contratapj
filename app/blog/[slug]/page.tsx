import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts";
import { SITE } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${SITE.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date + "T12:00:00"));

  return (
    <>
      {/* Post Header */}
      <section className="bg-brand-900 py-10 md:py-16 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <time className="text-blue-300 text-sm uppercase tracking-wider">{formattedDate}</time>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-blue-100 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Cover Image */}
      <div className="container mx-auto px-4 max-w-3xl -mt-8">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="prose prose-slate prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-slate-900
              prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-slate-700 prose-p:leading-relaxed
              prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-li:text-slate-700
              prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
