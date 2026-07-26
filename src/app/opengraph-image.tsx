import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #201b14 0%, #3a3120 55%, #6b4a2f 100%)",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e08c58",
            display: "flex",
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            color: "#faf6ee",
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#d9cfba",
            maxWidth: 900,
            display: "flex",
          }}
        >
          Oil-on-canvas paintings — abstract biomorphic assemblages of shapes
          and memory.
        </div>
      </div>
    ),
    { ...size },
  );
}
