import type { CSSProperties } from "react";
import styles from "./Stats.module.css";

const stats = [
  { value: "27", text: "poses par invité, ou 12, 24, 36 selon ton envie" },
  { value: "0", text: "aperçu : on ne voit pas ses photos, même pas l’organisateur" },
  { value: "12", unit: "h", text: "le lendemain, l’album se révèle pour tout le monde" },
];

export default function Stats() {
  return (
    <section aria-label="En chiffres" className={styles.section}>
      <div aria-hidden="true" className={styles.perfs} />
      <ul className={styles.list}>
        {stats.map((s, i) => (
          <li key={s.text} className={`reveal ${styles.item}`} style={{ "--i": i } as CSSProperties}>
            <span className={styles.value}>
              {s.value}
              {s.unit && <span className={styles.unit}>{s.unit}</span>}
            </span>
            <span className={styles.text}>{s.text}</span>
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className={styles.perfs} />
    </section>
  );
}
