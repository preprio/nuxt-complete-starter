# Nuxt 3 Starter

Look at the [Complete guide to Nuxt and Prepr personalization](https://docs.prepr.io/connecting-front-end-apps/nuxt-complete-guide) to learn more.

[Stackblitz demo](https://stackblitz.com/edit/nuxt-starter-prepr-cms)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Add the environment file 
Copy the .env.example file in this directory to .env (which will be ignored by Git) by running the following command: 
```bash
cp .env.example .env
```
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

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
