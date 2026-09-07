# ourportico-site

Illustrative customer stories for [ourportico.com](https://ourportico.com) — fictional families using Lists, Conversation, and AI Chat on a Portico agent at home.

Essay site: [porticonow.com](https://porticonow.com) · Product onboarding: [web.porticoworks.dev](https://web.porticoworks.dev)

## Update the site

- Stories and copy: `index.html`
- Layout: `styles.css`
- Brand mark: `logo.png`; tab icons: `favicon-*.png`, `apple-touch-icon.png`

No build tools. Open `index.html` in a browser to preview.

**Note:** All testimonials are clearly marked as fictional illustrations until real customer stories exist.

## Publish on GitHub Pages

1. Repository: `tvangundy/ourportico-site` (public), branch `main`.
2. **Settings → Pages** → Deploy from a branch → `main` / `/(root)`.
3. **Custom domain:** `ourportico.com` (keep the `CNAME` file in the repo).
4. After DNS is healthy, enable **Enforce HTTPS**.

## GoDaddy DNS for ourportico.com

In GoDaddy: **My Products → Domains → ourportico.com → DNS**. Remove domain-forwarding and conflicting `@` / `www` records, then add:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | 1 hour |
| A | @ | 185.199.109.153 | 1 hour |
| A | @ | 185.199.110.153 | 1 hour |
| A | @ | 185.199.111.153 | 1 hour |
| CNAME | www | tvangundy.github.io | 1 hour |

Do not add a wildcard (`*`) record. Propagation can take up to 24 hours.

## Related sites

| URL | Repo | Role |
| --- | --- | --- |
| ourportico.com | this repo | Illustrative family stories |
| porticonow.com | porticonow-site | Essay / why home data |
| web.porticoworks.dev | ws-website | Product + onboarding |
| porticoworks.dev | porticoworks-site | Company + legal |
