import { AppIcon } from "./Logo";
import StoreBadges from "./StoreBadges";
import { storesAvailable } from "@/lib/site";
import styles from "./Download.module.css";

export default function Download() {
  return (
    <section id="telecharger" className={styles.section}>
      <div className={styles.card}>
        <span aria-hidden="true" className={`${styles.perfs} ${styles.top}`} />
        <span aria-hidden="true" className={`${styles.perfs} ${styles.bottom}`} />
        <div className={styles.iconWrap}>
          <AppIcon size={220} className={styles.icon} />
        </div>
        <div className={styles.copy}>
          <h2 className={`h2 ${styles.title}`}>Ta prochaine fête mérite sa pellicule.</h2>
          <p className={styles.text}>
            {storesAvailable
              ? "Télécharge Kodakian, crée ton premier événement et partage le code à tes invités."
              : "Kodakian arrive très bientôt sur iPhone et Android. Dès la sortie, crée ton premier événement et partage le code à tes invités."}
          </p>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
