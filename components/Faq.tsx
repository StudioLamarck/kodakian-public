"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import styles from "./Faq.module.css";

const faqs = [
  {
    q: "Mes invités doivent-ils installer l’app ?",
    a: "Oui. Ils rejoignent ton événement avec le code ou le QR code que tu leur partages, puis se connectent avec Apple ou Google. Ça prend moins d’une minute.",
  },
  {
    q: "Qui peut voir les photos avant la révélation ?",
    a: "Personne, pas même l’organisateur. Les photos ne passent pas non plus par la galerie du téléphone : elles partent directement dans la pellicule commune.",
  },
  {
    q: "Combien de photos chacun peut-il prendre ?",
    a: "C’est l’organisateur qui choisit : 12, 24, 27 ou 36 poses par invité. Quand la pellicule est terminée, c’est terminé.",
  },
  {
    q: "Ça marche sans réseau ?",
    a: "Oui. Tu peux photographier hors ligne : les photos attendent sur le téléphone et partent dès que le réseau revient.",
  },
  {
    q: "Combien de temps l’album reste-t-il disponible ?",
    a: "L’album reste disponible 29 jours après la révélation. Pense à le télécharger avant qu’il disparaisse.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.head}>
        <span className="eyebrow">Questions</span>
        <h2 className="h2">Tu te demandes peut-être…</h2>
        <p className="lead">
          Une autre question ?{" "}
          {site.links.contact ? (
            <a href={site.links.contact} className={styles.contact}>
              Écris-nous
            </a>
          ) : (
            <span className={styles.contact}>Écris-nous</span>
          )}
          .
        </p>
      </div>
      <div className={styles.list}>
        {faqs.map((f, i) => {
          const isOpen = i === open;
          return (
            <div key={f.q} className={styles.item}>
              <h3 className={styles.heading}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  id={`faq-q-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={styles.question}
                >
                  <span className={styles.qText}>{f.q}</span>
                  <span aria-hidden="true" className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      {isOpen ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                    </svg>
                  </span>
                </button>
              </h3>
              <div id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                <p className={styles.answer}>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
