"use client";

import { useSyncExternalStore } from "react";
import styles from "./Reveal.module.css";

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

const nowInSeconds = () => Math.floor(Date.now() / 1000);

// Le rendu serveur n'a pas l'heure du visiteur : on affiche des tirets
// jusqu'à l'hydratation.
const serverSnapshot = () => null;

function nextRevealFrom(nowSec: number) {
  const target = new Date(nowSec * 1000);
  target.setDate(target.getDate() + 1);
  target.setHours(12, 0, 0, 0);
  return target;
}

const pad = (n: number) => String(n).padStart(2, "0");

const dateFormat = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" });

export default function Countdown() {
  const now = useSyncExternalStore(subscribe, nowInSeconds, serverSnapshot);

  let parts = ["--", "--", "--"];
  let dateLabel = "Demain à 12 h 00";

  if (now !== null) {
    const target = nextRevealFrom(now);
    const left = Math.max(0, Math.floor(target.getTime() / 1000) - now);
    parts = [pad(Math.floor(left / 3600)), pad(Math.floor((left % 3600) / 60)), pad(left % 60)];
    const day = dateFormat.format(target);
    dateLabel = `${day.charAt(0).toUpperCase()}${day.slice(1)} à 12 h 00`;
  }

  const units = ["heures", "minutes", "secondes"];

  return (
    <>
      <div role="timer" aria-label="Compte à rebours avant la révélation" className={styles.timer}>
        {parts.map((value, i) => (
          <div key={units[i]} className={styles.unit}>
            <span className={styles.digits}>{value}</span>
            <span className={styles.unitLabel}>{units[i]}</span>
          </div>
        ))}
      </div>
      <span className={styles.date}>{dateLabel}</span>
    </>
  );
}
