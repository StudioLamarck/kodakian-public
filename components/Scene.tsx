import type { ReactNode } from "react";
import styles from "./Scene.module.css";

export type Palette = {
  sky: [string, string];
  ground: [string, string];
  person1: string;
  person2: string;
  table: string;
};

export const palettes = {
  dusk: { sky: ["#9DB3BC", "#B9C4BE"], ground: ["#8C6B52", "#6E5241"], person1: "#4C3A2E", person2: "#5E4636", table: "#E9DCC6" },
  warm: { sky: ["#C9A27E", "#D8BC97"], ground: ["#7A5C46", "#5C4434"], person1: "#3E2F25", person2: "#4F3B2D", table: "#F2E3CB" },
  green: { sky: ["#7F9AA6", "#A9B9B5"], ground: ["#6E7A5A", "#56603F"], person1: "#2F3A2E", person2: "#3E4A3A", table: "#E6D9C0" },
  ember: { sky: ["#B38870", "#C9A48A"], ground: ["#5E4A3E", "#463529"], person1: "#2B201A", person2: "#3A2C22", table: "#EADBC2" },
} satisfies Record<string, Palette>;

// Photo illustrée : deux silhouettes, une table et une bougie.
export default function Scene({ palette, className, children }: { palette: Palette; className?: string; children?: ReactNode }) {
  return (
    <div
      className={`${styles.scene} ${className ?? ""}`}
      style={{
        background: `linear-gradient(180deg, ${palette.sky[0]} 0%, ${palette.sky[1]} 46%, ${palette.ground[0]} 46%, ${palette.ground[1]} 100%)`,
      }}
    >
      <span aria-hidden="true" className={styles.person1} style={{ background: palette.person1 }} />
      <span aria-hidden="true" className={styles.person2} style={{ background: palette.person2 }} />
      <span aria-hidden="true" className={styles.table} style={{ background: palette.table }} />
      <span aria-hidden="true" className={styles.candle} />
      <span aria-hidden="true" className={styles.flame} />
      {children}
    </div>
  );
}
