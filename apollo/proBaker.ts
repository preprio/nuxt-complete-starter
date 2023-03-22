import { defineApolloClient } from "@nuxtjs/apollo";

export default defineApolloClient({
  httpEndpoint: "https://graphql.prepr.io/graphql",
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: "apollo:<client-name>.token",
  tokenStorage: "cookie",
  authType: "Bearer",
  authHeader: "Authorization",
  httpLinkOptions: {
    headers: {
      Authorization: `Bearer ${process.env.PREPR_ACCESS_TOKEN}`,
      "Prepr-Customer-Id": "78ae6d4d-1c59-4180-bb9a-f203918b9452"
    },
  },
});
