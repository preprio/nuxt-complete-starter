# Nuxt Complete Starter

Check out the [Complete guide to Nuxt and Prepr](https://docs.prepr.io/connecting-a-front-end-framework/nuxtjs/nuxt-complete-guide) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Add the environment file

Copy the .env.example file in this directory to .env (which will be ignored by Git) by running the following command:

```bash
cp .env.example .env
```

## Update the environment file

In the `.env` file, replace `<YOUR_PREPR_GRAPHQL_URL>` with the *API URL* of the Prepr *GraphQL Preview* access token from your Acme Lease Demo environment.

![preview API URL](https://assets-site.prepr.io//35k5a4g45wuy-preview-access-token.png)

`npm run codegen` (also run automatically as part of `npm run build`) regenerates the GraphQL types in `app/gql/` from this schema, reading `NUXT_PREPR_GRAPHQL_URL` from `.env`.

Set `NUXT_PREPR_ENV=preview` to show the Prepr preview toolbar (and let query params override segments/variants); set it to `production` to hide the toolbar and lock the page down to production content. Both variables are [Nuxt runtime config](https://nuxt.com/docs/guide/going-further/runtime-config) overrides, so in a deployed environment set them on the host at runtime — they're server-only and never baked into the build.

> `typescript` is pinned to `^6` because `vue-tsc` doesn't yet support TypeScript 7 — bumping it without also bumping `vue-tsc` will break `npm run typecheck`.

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Start the production build:

```bash
npm run start
```

This runs `node --env-file-if-exists=.env .output/server/index.mjs`, which serves the app with Nitro's Node.js preset and loads `.env` if one is present (host-provided environment variables still take precedence).

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

The Prepr Toolkit's Nuxt middleware needs Nitro's Node.js runtime (the default). Deploying to an edge runtime such as Cloudflare Workers is not supported.
