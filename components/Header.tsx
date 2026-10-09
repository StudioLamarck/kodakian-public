import { AppIcon } from "./Logo";
import { storesAvailable } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" aria-label="Kodakian, accueil" className={styles.brand}>
        <AppIcon size={40} className={styles.icon} />
        <span className={styles.name}>Kodakian</span>
      </a>
      <nav aria-label="Navigation principale" className={styles.nav}>
        <a href="#comment" className={styles.link}>
          Comment ça marche
        </a>
        <a href="#revelation" className={styles.link}>
          La révélation
        </a>
        <a href="#faq" className={styles.link}>
          Questions
        </a>
        <a href="#telecharger" className={styles.cta}>
          {storesAvailable ? "Télécharger" : "Bientôt disponible"}
        </a>
      </nav>
    </header>
  );
}
