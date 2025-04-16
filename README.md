# Nuxt Complete Starter

Look at the [Complete guide to Nuxt and Prepr](https://docs.prepr.io/connecting-front-end-apps/nuxt-complete-guide) to learn more.

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

## Update the environment file
In the .env file, replace `<YOUR_PREPR_GRAPHQL_URL>` with the *API URL* of the Prepr *GraphQL Preview* access token from your Acme Lease Demo environment.

![preview API URL](https://assets-site.prepr.io//35k5a4g45wuy-preview-access-token.png)


## Add the Prepr tracking pixel

Go to the `plugins/tracking.client.js` file and replace the commented out code with your own tracking code in Prepr.

![event tracking page](https://assets-site.prepr.io//1j41fnhj1305-tracking-code.png)

Don't forget to remove the HTML tags `<!-- Prepr Tracking Code -->`, `<script>` and `</script>` tags from the embedded code.


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
