import Image from "next/image";
import { AppIcon } from "./Logo";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

const legal = [
  { label: "Conditions générales", href: site.links.terms },
  { label: "Confidentialité", href: site.links.privacy },
  { label: "Contact", href: site.links.contact },
];

export default function Footer() {
  const studio = (
    <>
      <Image src="/studio-lamarck.png" alt="" width={14} height={17} />
      <span>Studio Lamarck</span>
    </>
  );

  return (
    <footer className={styles.footer}>
      <a href="#" aria-label="Kodakian, accueil" className={styles.brand}>
        <AppIcon size={32} className={styles.icon} />
        <span className={styles.name}>Kodakian</span>
      </a>
      <nav aria-label="Liens légaux" className={styles.legal}>
        {legal.map((l) =>
          l.href ? (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ) : (
            <span key={l.label}>{l.label}</span>
          ),
        )}
      </nav>
      <span className={styles.copyright}>© 2026 Kodakian. Tous droits réservés.</span>
      <span className={styles.credit}>
        <span>Créé avec le soutien de</span>
        {site.links.studio ? (
          <a href={site.links.studio} className={styles.studio}>
            {studio}
          </a>
        ) : (
          <span className={styles.studio}>{studio}</span>
        )}
      </span>
    </footer>
  );
}
