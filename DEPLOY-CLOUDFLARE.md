# Publier bois-tunisie sur Cloudflare Pages (bois-tunisie.com)

Site 100% statique → aucun build. Deux méthodes ; la **A** est la plus rapide, la **B** redéploie à chaque `git push`.

## Avant de publier (checklist)
- `js/config.js` → coller `LEAD_ENDPOINT` (webhook n8n/Make/Zapier) ; sinon les formulaires basculent sur WhatsApp.
- (option) `ANALYTICS.enabled:true` + `ga4Id` + `metaPixelId`.
- Remplacer le logo placeholder `assets/brand/logo.svg`, le favicon `assets/favicon.svg` et l'image `assets/brand/og-image.png` par les visuels officiels.
- Compléter les pages légales (`legal/`) et valider les `<!-- CONFIRM -->`.
- Le domaine `bois-tunisie.com` est déjà réglé dans `js/config.js`; si tu changes de domaine, relance `node scripts/build-seo.mjs`.

---

## Méthode A — Upload direct (sans GitHub, ~3 min)
1. Crée un compte sur **dash.cloudflare.com** (gratuit).
2. Menu **Workers & Pages → Create → Pages → Upload assets**.
3. **Project name** : `bois-tunisie` → l'URL sera `bois-tunisie.pages.dev`.
4. Glisse-dépose **le contenu du dossier `bois-tunisie/`** (le dossier qui contient `index.html`, pas le dossier parent). Tu peux aussi déposer un .zip de ce contenu.
5. **Deploy**. Le site est en ligne sur `https://bois-tunisie.pages.dev`.
6. Pour mettre à jour plus tard : re-upload (nouveau déploiement).

## Méthode B — Connexion Git (auto-déploiement, recommandé)
1. Crée un dépôt GitHub (ex. `bois-tunisie`) et pousse ce dossier :
   ```bash
   cd bois-tunisie
   git remote add origin https://github.com/<ton-user>/bois-tunisie.git
   git push -u origin main
   ```
2. Cloudflare : **Workers & Pages → Create → Pages → Connect to Git** → choisis le dépôt.
3. **Build settings** : Framework preset = **None** · Build command = **(vide)** · Build output directory = **/** (racine).
4. **Save and Deploy**. Chaque `git push` redéploiera automatiquement.

---

## Brancher le domaine bois-tunisie.com (après achat)
Le plus simple = gérer le DNS **chez Cloudflare** :
1. Achète `bois-tunisie.com` (n'importe quel registrar, ou **Cloudflare Registrar**).
2. Cloudflare : **Add a site** → `bois-tunisie.com` → plan Free → Cloudflare te donne **2 nameservers**.
3. Chez le registrar, remplace les nameservers par ceux de Cloudflare (propagation : quelques minutes à 24 h).
4. Dans le projet Pages : **Custom domains → Set up a domain** → ajoute `bois-tunisie.com` **et** `www.bois-tunisie.com`. Cloudflare crée les enregistrements et le **certificat HTTPS** automatiquement.
5. (option) Redirige `www` → apex (ou l'inverse) via **Redirect Rules**.

Si tu gardes le DNS ailleurs : ajoute un **CNAME** `www` → `bois-tunisie.pages.dev`, et pour l'apex `bois-tunisie.com` utilise l'**ALIAS/ANAME** du registrar (ou les enregistrements fournis par Cloudflare).

## Après mise en ligne
- Teste : formulaires (succès/erreur + fallback WhatsApp), bouton WhatsApp, bascule FR/ع (RTL), mobile 390 px.
- **Google Search Console** : ajoute `bois-tunisie.com`, soumets `https://bois-tunisie.com/sitemap.xml`.
- **Google Business Profile** : crée/valide la fiche (Mornag), catégorie, photos.
- GEO : `llms.txt` et le `robots.txt` (crawlers IA autorisés) sont déjà en place.
