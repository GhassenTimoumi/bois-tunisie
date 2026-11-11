# Bois Tunisie — bois-tunisie.com

Site vitrine bilingue (FR/AR) — thème **Industrial** — opéré par la Société Galgaoui (SG Palette), Mornag, Ben Arous.
Angle : emballage & palettes en bois (caisses, emballage industriel, calage, export ISPM 15, sur-mesure).

Static (HTML/CSS/JS). Déploiement : **Cloudflare Pages** (voir le guide fourni).
Avant mise en ligne, renseigner les placeholders de `js/config.js` (LEAD_ENDPOINT, analytics) — voir `grep -rn "REPLACE_WITH\|TODO\|CONFIRM\|À compléter" .`.
Après changement de domaine : `node scripts/build-seo.mjs`.
