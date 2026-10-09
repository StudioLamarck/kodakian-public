import { site } from "@/lib/site";
import styles from "./StoreBadges.module.css";

const stores = [
  {
    key: "appStore" as const,
    name: "l’App Store",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="2.5" width="12" height="19" rx="3" />
        <path d="M10.5 18.5h3" />
      </svg>
    ),
    availablePrefix: "Télécharger dans",
  },
  {
    key: "googlePlay" as const,
    name: "Google Play",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 3.5v17l14-8.5z" />
      </svg>
    ),
    availablePrefix: "Disponible sur",
  },
];

// Boutons des stores. Tant qu'une URL n'est pas renseignée dans lib/site.ts,
// le badge affiche « Bientôt sur… » et n'est pas cliquable.
export default function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={`${styles.row} ${className ?? ""}`}>
      {stores.map((s) => {
        const href = site.stores[s.key];
        const content = (
          <>
            {s.icon}
            <span className={styles.label}>
              <span className={styles.prefix}>{href ? s.availablePrefix : "Bientôt sur"}</span>
              <span className={styles.name}>{s.name}</span>
            </span>
          </>
        );
        return href ? (
          <a key={s.key} href={href} className={`${styles.badge} ${styles.link}`}>
            {content}
          </a>
        ) : (
          <div key={s.key} className={styles.badge}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
