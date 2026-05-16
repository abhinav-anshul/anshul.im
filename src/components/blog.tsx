import Link from "next/link";
import Heading from "./ui/Heading";
import { getAllPosts } from "@/lib/blog";

function formatDate(iso: string) {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function Blog() {
    const posts = getAllPosts();
    if (posts.length === 0) return null;

    return (
        <section className="space-y-4">
            <Heading text="Blog" />
            <div className="space-y-3">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="flex items-baseline justify-between gap-4 group"
                    >
                        <div className="text-sm font-medium text-gray-800 dark:text-neutral-200 group-hover:underline underline-offset-2">
                            {post.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-neutral-400 shrink-0">
                            {formatDate(post.date)}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Blog;
