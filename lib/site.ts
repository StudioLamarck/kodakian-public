// Liens externes du site. `null` = pas encore disponible : l'élément est
// affiché sans lien (badges « Bientôt sur… », liens du pied de page).
export const site = {
  name: "Kodakian",
  // URL publique, utilisée pour les balises Open Graph. Sur Vercel, le domaine
  // de production est détecté automatiquement.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  description:
    "Kodakian transforme les téléphones de tes invités en appareils jetables partagés. Les photos restent cachées, et l’album se révèle le lendemain pour tout le monde.",
  stores: {
    appStore: null as string | null,
    googlePlay: null as string | null,
  },
  links: {
    terms: null as string | null,
    privacy: null as string | null,
    contact: null as string | null,
    studio: null as string | null,
  },
};

export const storesAvailable = Boolean(site.stores.appStore || site.stores.googlePlay);
