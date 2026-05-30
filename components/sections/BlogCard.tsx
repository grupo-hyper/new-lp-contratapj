import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date + "T12:00:00"));

  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-100">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-slate-100">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <time className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-3">
          {formattedDate}
        </time>

        <h2 className="font-heading text-lg font-bold text-slate-900 leading-snug mb-3 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-600 transition-colors">
            {post.title}
          </Link>
        </h2>

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
        >
          Ler artigo
          <svg
            className="ml-1.5 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
