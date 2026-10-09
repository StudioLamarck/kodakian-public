import type { CSSProperties } from "react";
import Countdown from "./Countdown";
import styles from "./Reveal.module.css";

const points = [
  { long: "Aucun aperçu après la photo" },
  { long: "Rien dans la galerie du téléphone" },
  { long: "Une notification au moment de la révélation", short: "Une notification à la révélation" },
];

export default function Reveal() {
  return (
    <section id="revelation" className={`reveal-scale ${styles.section}`}>
      <div className={styles.copy}>
        <span className={`eyebrow ${styles.eyebrow}`}>La révélation</span>
        <h2 className={`h2 ${styles.title}`}>Le suspense fait partie du souvenir.</h2>
        <p className={`lead ${styles.lead}`}>
          Pendant la fête, on profite au lieu de regarder son écran. Les photos restent au développement
          jusqu’à l’heure de la révélation, puis l’album s’ouvre pour tout le monde au même moment.
        </p>
        <ul className={styles.points}>
          {points.map((p, i) => (
            <li key={p.long} className="reveal" style={{ "--i": i } as CSSProperties}>
              <span aria-hidden="true" className={styles.check}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              {p.short ? (
                <>
                  <span className="only-desktop">{p.long}</span>
                  <span className="only-mobile">{p.short}</span>
                </>
              ) : (
                p.long
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHead}>
          <span className={styles.panelLabel}>Révélation dans</span>
          <span className={styles.status}>
            <span className={styles.dot} />
            En développement
          </span>
        </div>
        <Countdown />
        <div aria-hidden="true" data-reveal className={styles.negatives}>
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} style={{ "--i": i } as CSSProperties}>
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
        </div>
        <div className={styles.lock}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2A07F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2.5" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          <span>Personne ne voit les photos avant la révélation, même pas l’organisateur.</span>
        </div>
      </div>
    </section>
  );
}
