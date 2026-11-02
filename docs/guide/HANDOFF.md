# Hand-off for Mandy: rewriting the Nuxt complete guide

The `nuxt-complete-starter` has been rebuilt from scratch on Nuxt 4, following the same structure as the Next.js and Astro complete starters. The published Nuxt guide (Nuxt 3, Apollo, hand-pasted tracking snippet, no preview toolbar) no longer matches the code, so every page needs replacing.

Everything you need is in this folder:

| Path | What it is |
| --- | --- |
| `nuxt-complete-guide/` | **Drop-in MDX** for docs.prepr.io: `index.mdx`, `introduction.mdx`, `step-1` … `step-6`, `_meta.js`. Written in the docs site's Nextra format (`<Steps>`, `<Tabs>`, `<Callout>`, `filename=`, line highlights, react-icons). |
| `templates/` | Source of the MDX above. Prose is hand-written; code blocks are `@@code <tag> <path>@@` placeholders. |
| `build.py` | Renders `templates/` → `nuxt-complete-guide/`. Pulls every code block verbatim from the `guide-step-N` git tags and computes the highlighted lines from the diff with the previous step. |

## Step by step

### 1. Copy the new pages into the docs repo

Target folder: `docs.prepr.io/src/content/connecting-a-front-end-framework/nuxtjs/nuxt-complete-guide/`

1. Replace `index.mdx`, `introduction.mdx`, `_meta.js` and `step-1` … `step-5` with the files from `nuxt-complete-guide/`. File names and URL slugs of steps 1–5 are unchanged, so no redirects are needed.
2. Add the new page `step-6-install-the-preview-bar.mdx`. The slug matches the Next.js guide (`…/next-complete-guide/step-6-install-the-preview-bar`); the page title says "toolbar".
3. The overview page (`index.mdx`) now has the step 6 card enabled (it was commented out) and the step 2 card says "typed GraphQL composable" instead of "Apollo Client".
4. Search the docs repo for other links to the Nuxt guide that mention Apollo or "preview bar" — e.g. `nuxtjs/index.mdx` and the quick start cross-links — and check their wording still fits.

### 2. Replace the screenshots

Every image placeholder that needs a new capture is marked `TODO-SCREENSHOT` in its alt text. Placeholders with an existing URL show the old image as a stand-in; placeholders with `(NEW)` as URL have no image yet.

**New captures needed** (site screenshots from the starter, run with `npm run dev`):

| Page | Screenshot | Why |
| --- | --- | --- |
| Step 1 | `npm create nuxt@latest` prompts — `(NEW)` | The old image shows `nuxi init` prompts from Nuxt 3. |
| Step 1 | Empty home page | Retake on Nuxt 4. |
| Step 1 | Home page with Tailwind styling | Now uses the Ubuntu font. |
| Step 1 | Home page with navigation bar | Navbar now has the *CALCULATOR* button and page gutter, like Next.js/Astro. |
| Step 1 | Static components (used twice) | Static sections now use placeholder blocks, matching Astro. |
| Step 2 | Dynamic home page | Reused from Next.js; retake from this starter so it shows the fixed gutter and mobile heading sizes. |
| Step 6 | Toolbar with *Electric Car Lovers* segment | Reused from Next.js; retake from this starter. |
| Step 6 | Toolbar with B variant | Reused from Next.js; retake from this starter. |

**Reused as-is** (Prepr UI, framework independent): access tokens, stack field, event tracking code, page view events, A/B test item/settings/awaiting data/metrics, clear cookies, segment, matching visitors, adaptive content awaiting data/metrics, preview access token, stega example, toolbar overview. Asset URLs are the same ones the Next.js guide uses.

The step 2 "query results in console" screenshot is gone: the new step 2 renders the content straight away instead of logging it first.

**Video:** the old Nuxt guide had none, so none is referenced. Add one later if planned.

### 3. If the code changes later, regenerate — don't hand-edit code blocks

```bash
git tag -f -a guide-step-N -m "…" <commit>   # move the tag for the step you changed
python3 docs/guide/build.py                  # re-renders nuxt-complete-guide/
```

Edit prose in `templates/`, never in `nuxt-complete-guide/` (it's overwritten).

## What changed for the reader, chapter by chapter

| Chapter | Old Nuxt guide | New Nuxt guide |
| --- | --- | --- |
| Intro | "latest Nuxt" | Nuxt 4. Prerequisite is **Node.js 22.22+** (Nuxt 4.6's minimum). |
| 1. Set up | `npx nuxi init`, files in project root, Options-API components, `img.icons8.com` placeholder images | `npm create nuxt@latest -- --template minimal`, code in `app/` (Nuxt 4 layout), `<script setup lang="ts">` components, auto-imported components, **Nuxt Fonts** self-hosts Ubuntu, fixed `main.css` (see below). |
| 2. Make it dynamic | `@nuxtjs/apollo` + 40-line Apollo plugin, query in a `.js` file with `gql`, API URL in **public** runtime config (sent to the browser) | GraphQL Codegen + typed `.graphql` query and fragments (same files as Next.js/Astro), a 20-line `usePrepr` composable around `useAsyncData`, API URL in **server-only** runtime config (`NUXT_PREPR_GRAPHQL_URL`), custom `error.vue` for 404s. |
| 3. Data collection | Paste the tracking snippet from Prepr into a client plugin and strip the `<script>` tags | `npm install @preprio/toolkit`, server middleware (`handlePreprRequest`), `<PreprTrackingPixel>` in `app.vue`. Nothing to copy from Prepr. Same flow as the Next.js guide. |
| 4. A/B testing | Read the `__prepr_uid` cookie manually and set `Prepr-Customer-Id` | Two lines in `usePrepr`: forward `getPreprHeaders(...)`. Also sends segment/variant headers the toolbar needs later. |
| 5. Personalization | Repeated the same code change as step 4 | **No code changes** — explains that step 4's headers already cover it. The tracking-attributes section now points back to step 4 instead of repeating the Hero code. |
| 6. Preview toolbar | Didn't exist | New. `NUXT_PREPR_ENV=preview`, `preprEnv` runtime config, `preview` flag in the middleware, `<PreprToolbar>` in `app.vue`. |

## Deviations from the Next.js guide (reader-visible)

- **Env variable names have a `NUXT_` prefix** (`NUXT_PREPR_GRAPHQL_URL`, `NUXT_PREPR_ENV`). Nuxt only fills runtime config from environment variables with this prefix, which is what keeps the values out of the build and lets the host set them at runtime.
- **Apollo Client → `usePrepr` composable.** Same reasoning as the Astro guide: the Nuxt Apollo module is still an alpha, and a small typed fetch is easier to follow.
- **No image config step.** Next.js needs `images.remotePatterns`, Astro `image.domains`. This guide uses plain `<img>` (Prepr already resizes images through the query's `url(width, height)` arguments), so there's nothing to configure.
- **Tracking pixel token goes through `useState`.** The API URL is server-only, so `app.vue` extracts the access token on the server and passes it to the browser in the Nuxt payload. One extra sentence in step 3 explains this.
- **Type shim for the toolkit's Vue components** (`app/types/prepr-toolkit.d.ts`, step 3). The toolkit ships `PreprToolbar.vue` / `PreprTrackingPixel.vue` without type declarations, so editors show an error on the import without it. See *Follow-ups*: once the toolkit ships types, delete this step.
- **Preview flag comes from `NUXT_PREPR_ENV`**, not a hardcoded `preview: true`. Same improvement as the Astro guide: the Next.js guide's step 6 hardcodes `{ preview: true }`, which lets production visitors override segments and variants through query parameters. Worth fixing in the Next.js guide too.
- **Links are plain `<a>`, not `<NuxtLink>`.** Content is fetched per request on the server (personalization depends on the visitor's request headers), so every navigation is a full page load. Not called out in the guide; mention it if readers ask why.
- Commands use `npm`/`npx` (the repo itself uses pnpm), port `3000`.

## `main.css` bugs fixed (same as the Astro hand-off)

The old Nuxt `main.css` had the same three bugs as the Next.js `globals.css`: `--font-size-mb-*` instead of `--text-mb-*` (mobile headings fell back to 16px), `p-spacing` used but never defined (no page gutter), and the invalid colour `#4748B`. All fixed; step 1 shows the corrected CSS.

## Demo content used in the text

- A/B headings on *Electric Lease Landing Page*: A = *Drive electric ⚡ Save more. Lease smarter.*, B = *Lease electric ⚡ Save bigger. Lease smarter.* (checked against the live demo environment).
- Segment name: *Electric Car Lovers* everywhere (the old Nuxt and Next.js step 5 say "Electric Car Buyers"). The segment image filename still says `electric-car-buyers`; cosmetic only.

## Verification

Checked in a browser against the Acme Lease demo environment (preview token):

- Every step tag passes `nuxt build` (and `nuxt typecheck` from step 2 on); the site renders the static page, dynamic home page, `/electric-lease` and the custom 404.
- `__prepr_uid` cookie is set, the tracking pixel loads, and the `prepr:id` meta tag is present.
- A/B: new visitors get A or B; a returning visitor keeps the same variant.
- Personalization end to end: after visiting `/electric-lease`, the home page switched to the electric hero within seconds — so Prepr recorded the view event and put the visitor in the segment.
- Toolbar: opens, lists the segments from Prepr, switching segment changes the home page hero, `?prepr_preview_ab=A|B` switches the variant.
- `NUXT_PREPR_ENV=production` (production build via `npm run start`): override query parameters are ignored and the toolbar is not rendered.
- `npm run typecheck` and `npm run build` pass.

**Not verified** (no Prepr login in this session) — please confirm while taking screenshots: the visitor appearing on the *Segments* page with a *View* event (step 3), and A/B and adaptive content **metrics** appearing in Prepr after clicking **Find your car** (steps 4 and 5).

## Follow-ups (not blocking the guide)

1. **Toolkit:** ship type declarations for `@preprio/toolkit/nuxt/components/*`, then drop the shim step from step 3.
2. **Toolkit README / `examples/nuxt`:** uses a *public* runtime config for the GraphQL URL and still has the `#4748B` / `p-spacing` CSS bugs. Worth aligning with this starter.
3. **Next.js guide:** hardcoded `preview: true` in step 6, and "Electric Car Buyers" vs "Lovers" (also flagged in the Astro hand-off).
4. **GitHub repo:** this work is on the local branch `feature/nuxt-4-rebuild` with local tags `guide-step-1` … `guide-step-6`. The guide links to `github.com/preprio/nuxt-complete-starter`, so merge the branch before publishing, or readers who clone the repo get the old Nuxt 3 version.
