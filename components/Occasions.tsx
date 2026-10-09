import type { CSSProperties } from "react";
import Scene, { palettes } from "./Scene";
import styles from "./Occasions.module.css";

const occasions = [
  {
    title: "Anniversaires",
    text: "Le gâteau, les bougies et les photos de tous les invités.",
    palette: palettes.dusk,
  },
  {
    title: "Mariages",
    text: "Des centaines de photos de la soirée, sans un seul téléphone levé trop longtemps.",
    short: "Toute la soirée, sans téléphone levé trop longtemps.",
    palette: palettes.warm,
  },
  {
    title: "Week-ends entre amis",
    text: "Le gîte, la plage, le dernier verre, et l’album pour le trajet du retour.",
    short: "Le gîte, la plage, le dernier verre.",
    palette: palettes.green,
  },
  {
    title: "Noël en famille",
    text: "Les cousins, les cadeaux, et la surprise le 26 au matin.",
    short: "La surprise arrive le 26 au matin.",
    palette: palettes.ember,
  },
];

export default function Occasions() {
  return (
    <section className={styles.section}>
      <div className={`reveal ${styles.head}`}>
        <span className="eyebrow">Pour quelles occasions</span>
        <h2 className="h2">Tous les moments où on sort les téléphones.</h2>
      </div>
      <div className={styles.grid}>
        {occasions.map((o, i) => (
          <article key={o.title} className={`reveal ${styles.item}`} style={{ "--i": i } as CSSProperties}>
            <Scene palette={o.palette} className={styles.photo}>
              <span aria-hidden="true" className={styles.num}>
                N° {String(i + 1).padStart(2, "0")}
              </span>
            </Scene>
            <h3 className={styles.title}>{o.title}</h3>
            <p className={styles.text}>
              {o.short ? (
                <>
                  <span className="only-desktop">{o.text}</span>
                  <span className="only-mobile">{o.short}</span>
                </>
              ) : (
                o.text
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
