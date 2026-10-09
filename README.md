# Kodakian — site vitrine

Site public de Kodakian, construit avec Next.js 16 (App Router). La page est entièrement statique ;
seuls le compte à rebours, l'aperçu « rendu pellicule » et la FAQ s'exécutent côté navigateur.

## Développement

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

## Contenu à compléter

Tout se règle dans [`lib/site.ts`](lib/site.ts) :

- `stores.appStore` / `stores.googlePlay` : tant qu'ils valent `null`, les badges affichent
  « Bientôt sur… » et le site annonce une sortie prochaine. Dès qu'une URL est renseignée,
  les textes repassent en « Télécharger ».
- `links.terms`, `links.privacy`, `links.contact`, `links.studio` : liens du pied de page et
  « Écris-nous » de la FAQ, affichés sans lien tant qu'ils valent `null`.

## Structure

- `app/` : mise en page, page d'accueil, icônes et image Open Graph générées au build.
- `components/` : une section par fichier (`Hero`, `Stats`, `Steps`, `Reveal`, `FilmLook`,
  `Occasions`, `Faq`, `Download`, `Footer`), chacune avec son module CSS.
- Les couleurs et polices sont définies dans `app/globals.css`.

## Déploiement sur Vercel

1. Pousser le dépôt sur GitHub, GitLab ou Bitbucket.
2. Sur Vercel, « Add New… › Project », importer le dépôt : le framework Next.js est détecté,
   aucune configuration n'est nécessaire.
3. Optionnel : définir `NEXT_PUBLIC_SITE_URL` (ex. `https://kodakian.fr`) pour les balises
   Open Graph. Sinon, le domaine de production Vercel est utilisé.
