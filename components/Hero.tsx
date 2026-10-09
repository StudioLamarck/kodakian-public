import { CameraScreen, HomeScreen, PhoneFrame } from "./Phone";
import StoreBadges from "./StoreBadges";
import { storesAvailable } from "@/lib/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.badge}>
            <span className={styles.dot} />
            {storesAvailable ? "Sur iPhone et Android" : "Bientôt sur iPhone et Android"}
          </span>
          <h1 className={styles.title}>
            Patience...
            <br />
            <span className={styles.accent}>Ça développe.</span>
          </h1>
          <p className={styles.intro}>
            Kodakian transforme les téléphones de tes invités en appareils jetables partagés. Les photos
            restent cachées, et l’album se révèle le lendemain pour tout le monde.
          </p>
          <StoreBadges />
        </div>

        <div className={styles.stage}>
          <span aria-hidden="true" className={styles.sun} />
          <span aria-hidden="true" className={styles.film} />
          <PhoneFrame
            size="lg"
            label="L’appareil photo de Kodakian, 17 poses restantes"
            className={styles.cameraPhone}
          >
            <CameraScreen />
          </PhoneFrame>
          <PhoneFrame size="lg" label="L’accueil de Kodakian avec trois pellicules" className={styles.homePhoneLg}>
            <HomeScreen />
          </PhoneFrame>
          <PhoneFrame size="md" label="L’accueil de Kodakian avec trois pellicules" className={styles.homePhoneMd}>
            <HomeScreen />
          </PhoneFrame>
          <span className={styles.toast}>Clic. Photo glissée dans la pellicule.</span>
        </div>
      </div>
    </section>
  );
}
