import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostMeta = {
    slug: string;
    title: string;
    date: string;
    description?: string;
};

export type BlogPost = BlogPostMeta & {
    content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPostFile(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: String(data.title ?? slug),
        date: data.date instanceof Date ? data.date.toISOString() : String(data.date ?? ""),
        description: data.description ? String(data.description) : undefined,
        content,
    };
}

export function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    return fs
        .readdirSync(BLOG_DIR)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => readPostFile(f.replace(/\.mdx$/, "")))
        .filter((p): p is BlogPost => p !== null)
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map(({ content: _content, ...meta }) => meta);
}

export function getPost(slug: string): BlogPost | null {
    return readPostFile(slug);
}
