import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `/blog/${slug}`,
            type: "article",
            publishedTime: post.date,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    };
}

function formatDate(iso: string) {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    return (
        <article className="space-y-6">
            <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200 transition-colors"
            >
                <ArrowLeft size={14} />
                Back
            </Link>
            <header className="space-y-1">
                <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                    {post.title}
                </h1>
                <div className="text-sm text-gray-600 dark:text-neutral-400">
                    {formatDate(post.date)}
                </div>
            </header>
            <div className="prose-blog text-sm text-gray-700 dark:text-neutral-300 leading-relaxed space-y-4">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
