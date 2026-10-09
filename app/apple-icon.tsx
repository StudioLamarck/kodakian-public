import { ImageResponse } from "next/og";
import { IconArt } from "@/components/og/IconArt";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<IconArt s={180} />, size);
}
