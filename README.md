# ourportico-site

[ourportico.com](https://ourportico.com) shows how families and small teams use Portico. The intro has six use-case cards. Each card links to a step-by-step journey page with screenshots. The illustrative family stories follow the cards.

Essay site: [porticonow.com](https://porticonow.com) · Product onboarding: [web.porticoworks.dev](https://web.porticoworks.dev)

## Update the site

- Stories and copy: `index.html`
- Layout: `styles.css`
- Brand mark: `logo.png`; tab icons: `favicon.ico`, `favicon.svg`, `favicon-*.png`, `apple-touch-icon.png`, `apple-touch-icon-152.png`, `icon-192.png`, `icon-512.png`; PWA manifest: `manifest.webmanifest` (Add to Home Screen on iOS/Android). Browsers also fetch `/favicon.ico` directly — keep it at repo root.

No build tools. Preview with `task preview` (http://localhost:4324). Override the port with `task preview PORT=8080`. The journey links point at folders, so opening `index.html` straight from disk won't follow them.

## Journeys

Use-case cards in `index.html` (`#uses`) link to `journeys/<slug>/index.html`. All pages share `styles.css` and `journeys/journey.js`.

| Slug | Audience | Shows |
| --- | --- | --- |
| `grocery-list` | Family | Grocery list, list invites, notifications |
| `chores` | Family | Checklist, item + list reminders |
| `ai-memory` | Family | AI Chat with user, list, and agent memory |
| `family-photos` | Family | Portico Files folder, Things invite, Photos view, write access, watermark |
| `bar-closing` | Team | Checklist, nightly list reminder, "Just me" safety-net item reminder, Item checked off |
| `shift-handoff` | Team | Opening checklist + reminders, Conversation thread, Timers & alarms |
| `team-files` | Team | Team drive, per-user write, client folder via Share as Thing, network drive |

### Screenshots

Each step has a dashed slot labeled with what to capture and a filename. Save the image as `journeys/<slug>/shots/<filename>`. `journey.js` swaps in the real image when the file exists, so no HTML changes are needed. Phone shots are portrait (about 9:16). Slots marked `wide` are desktop shots of the Edge Agent console (about 16:10).

Slot filenames are unique across all journeys, so the easiest workflow is an inbox:

1. Drop screenshots into `Photo-inbox/` (git-ignored, never published).
2. Rename each one to its slot filename, e.g. `03-items.png`.
3. Run `task shots:file`. Each matching file moves to the right `journeys/<slug>/shots/` folder; anything without a slot stays in the inbox and is listed.
4. Run `task shots:missing` to see which slots still need a screenshot.

The slot label becomes the image's alt text, so if a shot doesn't match its label, fix the label in the journey page. Crop out or black-box real names, emails, and live invite links before filing.

**grocery-list:** `01-agent-provisioning` new Cloud Agent Provisioning / Linking · `01-agent-ready` home screen with agent connected · `02-open-lists` Apps card with Portico Lists · `02-new-list` New dialog, Groceries / Grocery · `03-items` list with a few items · `04-invite-form` Users panel invite form · `05-invite-qr` Invite link QR dialog · `06-accept` invitee Accept · `07-shared-list` invitee's Lists showing Groceries · `08-notifications` Item added / Item removed on · `09-done` Done header with Clear

**chores:** `01-checklist` Chores checklist · `02-mark-in-place` When marking items = Mark in place · `03-item-reminder` Thursday 6:30 PM / everyone / curb note · `03-on-item` reminder shown on the chore · `03-paused` recycling checked, reminder paused · `04-add-reminder` Saturday 5:00 PM check-in form · `04-list-reminder` Reminders section with that check-in · `05-users` Users panel · `06-push` lock-screen reminder

**ai-memory:** `01-ai-chat` private AI Chat · `02-user-memory` Save this user memory · `02-oyster-bar` allergy used in a reply · `03-list-memory` Meals confirm card, vegetarian through October · `04-agent-memory` confirm card, the dog is Biscuit · `04-meals-knows` Meals answers the dog’s name

**family-photos:** `01-edge-console` (wide) console Things panel with Beach Trip · `02-add-thing` Add Thing, Folder (Portico Files), Users read-only · `03-upload` (wide) Beach Trip tree with Upload · `04-invite-type` Things + Portico Relay · `04-invite-things` Grandmas iPad, Family Photos and Beach Trip ticked · `05-photos-grid` Beach Trip photo grid · `06-photo-wall` Portico Photos on the beach pictures · `07-can-write` Users panel with Can write · `08-share-photo` (wide) Share photo as Thing · `08-watermark` watermarked photo, View only

**bar-closing:** `01-closing-list` Closing checklist · `02-settings` Mark in place / Manual reorder / Mark all undone · `03-list-reminder` 1:30 AM Every day Everyone · `04-item-reminder` back door 2:15 AM Just me · `05-crew` Users panel · `06-checked-off` lock screen "X checked off …" · `07-done` all steps checked in place

**shift-handoff:** `01-opening` Opening checklist · `02-6am` 6:00 AM Every day Everyone · `03-milk` item reminder Every week Just me · `04-shift-notes` Conversation thread · `05-timer` running cold brew timer · `06-list-invitations` List invitations with Accept

**team-files:** `01-add-thing` (wide) Team Drive with quota · `02-tree` (wide) Tree view folders · `03-invite` (wide) Things invite with Team Drive · `04-users` Can write / Read-only mix · `05-share-as-thing` (wide) selection bar Share photo as Thing · `06-client-view` client's single watermarked folder · `07-network-drive` (wide) Connect as a network drive

All people and businesses in the journeys are fictional; each page says so in its footer note.

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
