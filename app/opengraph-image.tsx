import { ImageResponse } from "next/og";
import { IconArt } from "@/components/og/IconArt";

export const alt = "Kodakian — Patience… Ça développe.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background: "#F4EEE3",
          color: "#1D1A16",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 680 }}>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>Kodakian</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>
            <span>Patience...</span>
            <span style={{ color: "#E4572E" }}>Ça développe.</span>
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.4, color: "#4A3F33" }}>
            L’appareil photo jetable partagé : l’album se révèle le lendemain pour tout le monde.
          </div>
        </div>
        <div style={{ display: "flex", transform: "rotate(6deg)" }}>
          <IconArt s={280} radius={64} />
        </div>
      </div>
    ),
    size,
  );
}
