import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Abhinav Anshul — Blog";

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    const title = post?.title ?? "Blog";

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                    background: "#0a0a0a",
                    color: "#fafafa",
                    fontFamily: "Inter, sans-serif",
                }}
            >
                <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
                    anshul.im / blog
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 64,
                        fontWeight: 600,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                    }}
                >
                    {title}
                </div>
                <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
                    Abhinav Anshul · Product Engineer
                </div>
            </div>
        ),
        { ...size }
    );
}
