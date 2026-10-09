import { FrameStrip } from "./Phone";
import styles from "./Steps.module.css";

function CreateIllustration() {
  return (
    <div className={styles.form}>
      <div className={styles.field}>Soirée vendredi SLA</div>
      <div className={styles.option}>
        <span className={styles.filmBox}>
          <span>27</span>
          <span>poses</span>
        </span>
        <span className={styles.optionText}>
          <span>Pellicule</span>
          <span>27 poses · effet pellicule</span>
        </span>
      </div>
      <div className={`${styles.option} ${styles.optionWide}`}>
        <span className={styles.radio} />
        <span className={styles.optionText}>
          <span>Le lendemain à 12 h</span>
          <span>dim. 4 oct. · 12 h 00</span>
        </span>
      </div>
      <div className={styles.primary}>Créer et inviter</div>
    </div>
  );
}

function ShootIllustration() {
  return (
    <div className={styles.cam}>
      <div className={styles.camRow}>
        <span className={styles.counter}>17</span>
        <span className={styles.camText}>
          <span>poses restantes</span>
          <span>10 prises sur 27</span>
        </span>
      </div>
      <FrameStrip used={10} height={10} gap={2} usedColor="#3A352E" />
      <div className={styles.shutterWrap}>
        <span className={styles.shutter}>
          <span />
        </span>
      </div>
    </div>
  );
}

function AlbumIllustration() {
  const thumbs = ["#B5835A", "#6E5A4C", "#D9A276", "#8E6F55", "#C9B79C", "#A7593F"];
  return (
    <div className={styles.album}>
      <div className={styles.chips}>
        <span className={styles.chipOn}>Toutes</span>
        <span>Claire</span>
        <span>Hugo</span>
        <span>Papi Jean</span>
      </div>
      <div className={styles.grid}>
        {thumbs.map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
      </div>
      <div className={styles.download}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v11M7 10l5 5 5-5" />
          <path d="M5 19h14" />
        </svg>
        Télécharger l’album
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Crée l’événement",
    text: "Donne-lui un nom, choisis le nombre de poses par invité et le moment de la révélation. Partage ensuite le code ou le QR code.",
    art: <CreateIllustration />,
  },
  {
    n: "02",
    title: "Photographie à l’aveugle",
    text: "Chacun a sa pellicule. Clic, la photo part dans la pellicule commune sans aperçu. Chaque pose compte.",
    art: <ShootIllustration />,
  },
  {
    n: "03",
    title: "Découvre l’album ensemble",
    text: "Le lendemain, toutes les photos apparaissent en même temps pour tout le monde. Filtre par photographe et télécharge l’album.",
    art: <AlbumIllustration />,
  },
];

export default function Steps() {
  return (
    <section id="comment" className={styles.section}>
      <div className={styles.head}>
        <div className={styles.headTitle}>
          <span className="eyebrow">Comment ça marche</span>
          <h2 className="h2">Trois étapes, zéro aperçu.</h2>
        </div>
        <p className={`lead ${styles.headText}`}>
          Pas besoin d’acheter dix appareils jetables ni de courir chez le développeur. Tout se passe dans
          l’app.
        </p>
      </div>
      <ol className={styles.cards}>
        {steps.map((s) => (
          <li key={s.n} className={styles.card}>
            <div aria-hidden="true" className={styles.art}>
              {s.art}
            </div>
            <div className={styles.body}>
              <span className={styles.num}>{s.n}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
