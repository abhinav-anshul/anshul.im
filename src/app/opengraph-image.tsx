import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Abhinav Anshul — Product Engineer";

export default function OpengraphImage() {
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
                    anshul.im
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", fontSize: 96, fontWeight: 600, letterSpacing: "-0.04em" }}>
                        Abhinav Anshul
                    </div>
                    <div style={{ display: "flex", fontSize: 40, color: "#a1a1aa" }}>
                        Product Engineer
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
