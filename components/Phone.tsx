import type { CSSProperties, ReactNode } from "react";
import styles from "./Phone.module.css";

type FrameProps = {
  label: string;
  size: "md" | "lg";
  className?: string;
  children: ReactNode;
};

// Cadre de téléphone : l'écran est dessiné en 390 × 844 puis réduit.
export function PhoneFrame({ label, size, className, children }: FrameProps) {
  return (
    <div role="img" aria-label={label} className={`${styles.frame} ${styles[size]} ${className ?? ""}`}>
      <div className={styles.viewport}>
        <div aria-hidden="true" className={styles.screen}>
          {children}
        </div>
      </div>
      <span aria-hidden="true" className={styles.notch} />
    </div>
  );
}

type StripProps = { used: number; total?: number; height: number; gap: number; usedColor: string };

// Bande de 27 cases : poses prises (sombres) et restantes (orange).
export function FrameStrip({ used, total = 27, height, gap, usedColor }: StripProps) {
  return (
    <div
      className={styles.strip}
      style={{ "--cells": total, gap, "--cell-h": `${height}px` } as CSSProperties}
    >
      {Array.from({ length: total }, (_, i) => (
        <span key={i} style={{ background: i < used ? usedColor : "var(--orange)" }} />
      ))}
    </div>
  );
}

export function CameraScreen() {
  return (
    <div className={styles.camera}>
      <div className={styles.camTop}>
        <span className={styles.roundBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </span>
        <div className={styles.camTitle}>
          <span>Soirée vendredi SLA</span>
          <span>8 photographes</span>
        </div>
        <span className={styles.roundBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2B632" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />
          </svg>
        </span>
      </div>
      <div className={styles.viewfinder}>
        <span className={styles.person1} />
        <span className={styles.person2} />
        <span className={styles.lamp} />
        <span className={styles.vignette} />
        <span className={`${styles.corner} ${styles.tl}`} />
        <span className={`${styles.corner} ${styles.tr}`} />
        <span className={`${styles.corner} ${styles.bl}`} />
        <span className={`${styles.corner} ${styles.br}`} />
        <div className={styles.hint}>
          <span>Tu la découvriras demain à 12 h</span>
        </div>
      </div>
      <div className={styles.counterRow}>
        <span className={styles.counter}>17</span>
        <span className={styles.counterText}>
          <span>poses restantes</span>
          <span>10 prises sur 27</span>
        </span>
      </div>
      <FrameStrip used={10} height={10} gap={3} usedColor="#3A352E" />
      <div className={styles.shutterWrap}>
        <span className={styles.shutter}>
          <span />
        </span>
      </div>
    </div>
  );
}

export function HomeScreen() {
  return (
    <div className={styles.home}>
      <div className={styles.homeTop}>
        <div>
          <div className={styles.greeting}>Bonsoir Claire</div>
          <div className={styles.homeTitle}>Tes pellicules</div>
        </div>
        <span className={styles.avatar}>C</span>
      </div>

      <div className={styles.liveCard}>
        <div className={styles.perfs} />
        <div className={styles.liveBody}>
          <div className={styles.liveTag}>
            <span className={styles.dot} />
            <span>En cours · ce soir</span>
          </div>
          <div className={styles.liveHead}>
            <span>Soirée vendredi SLA</span>
            <span>8 invités · révélation dim. 12 h</span>
          </div>
          <div className={styles.liveCount}>
            <span>17</span>
            <span>poses restantes sur 27</span>
          </div>
          <FrameStrip used={10} height={14} gap={3} usedColor="#4A443B" />
          <span className={styles.openBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="7" width="18" height="13" rx="3" />
              <path d="M8 7l1.5-3h5L16 7" />
              <circle cx="12" cy="13.5" r="3.5" />
            </svg>
            <span>Ouvrir l’appareil</span>
          </span>
        </div>
      </div>

      <div className={styles.rollCard}>
        <div className={styles.rollHead}>
          <span className={styles.rollTag}>En développement</span>
          <span className={styles.timeChip}>13 h 42 min</span>
        </div>
        <span className={styles.rollTitle}>Week-end à Étretat</span>
        <div className={styles.waiting}>
          <div className={styles.negs}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <span>94 photos attendent demain</span>
        </div>
      </div>

      <div className={styles.rollCard}>
        <div className={styles.rollHead}>
          <span className={styles.rollTag}>Révélée · 26 déc. 2025</span>
          <span className={styles.rollMeta}>142 photos</span>
        </div>
        <span className={styles.rollTitle}>Noël en famille</span>
        <div className={styles.thumbs}>
          <span style={{ background: "#D9A276" }} />
          <span style={{ background: "#8E6F55" }} />
          <span style={{ background: "#C9B79C" }} />
          <span style={{ background: "#6E5A4C" }} />
        </div>
      </div>
    </div>
  );
}
