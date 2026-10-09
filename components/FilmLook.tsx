"use client";

import { useState } from "react";
import Scene, { palettes } from "./Scene";
import styles from "./FilmLook.module.css";

const filmSizes = [12, 24, 27, 36];

function Switch({ id, label, hint, on, onToggle }: { id: string; label: string; hint: string; on: boolean; onToggle: () => void }) {
  return (
    <div className={styles.setting}>
      <span className={styles.settingText}>
        <span id={id} className={styles.settingLabel}>
          {label}
        </span>
        <span className={styles.settingHint}>{hint}</span>
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-labelledby={id}
        onClick={onToggle}
        className={`${styles.switch} ${on ? styles.switchOn : ""}`}
      >
        <span />
      </button>
    </div>
  );
}

export default function FilmLook() {
  const [film, setFilm] = useState(27);
  const [effect, setEffect] = useState(true);
  const [stamp, setStamp] = useState(true);

  const label = `Aperçu d’une photo${effect ? " avec effet pellicule" : " sans effet"}${stamp ? " et date imprimée" : ""}`;

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <span className="eyebrow">Ta pellicule, tes règles</span>
        <h2 className="h2">Un vrai rendu de pellicule.</h2>
        <p className="lead">
          L’organisateur choisit le nombre de poses et le rendu des photos : couleurs chaudes et grain, avec
          ou sans la date imprimée en orange dans le coin. Essaie.
        </p>
      </div>

      <div role="img" aria-label={label} className={styles.previewWrap}>
        <Scene palette={palettes.dusk} className={styles.preview}>
          {effect && (
            <>
              <span aria-hidden="true" className={styles.tint} />
              <span aria-hidden="true" className={styles.grain} />
              <span aria-hidden="true" className={styles.vignette} />
            </>
          )}
          {stamp && (
            <span aria-hidden="true" className={styles.stamp}>
              3 10 ’26
            </span>
          )}
          <span aria-hidden="true" className={styles.tag}>
            Aperçu
          </span>
        </Scene>
      </div>

      <div className={styles.controls}>
        <div className={styles.films}>
          <span id="film-label" className={styles.filmsLabel}>
            Nombre de poses par invité
          </span>
          <div role="group" aria-labelledby="film-label" className={styles.filmGrid}>
            {filmSizes.map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={n === film}
                onClick={() => setFilm(n)}
                className={`${styles.film} ${n === film ? styles.filmOn : ""}`}
              >
                <span className={styles.filmN}>{n}</span>
                <span className={styles.filmUnit}>poses</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.settings}>
          <Switch
            id="s-effect"
            label="Effet pellicule"
            hint="Couleurs chaudes, grain et coins assombris"
            on={effect}
            onToggle={() => setEffect((v) => !v)}
          />
          <div className={styles.divider} />
          <Switch
            id="s-stamp"
            label="Horodatage"
            hint="La date s’imprime en orange dans le coin"
            on={stamp}
            onToggle={() => setStamp((v) => !v)}
          />
        </div>
      </div>
    </section>
  );
}
