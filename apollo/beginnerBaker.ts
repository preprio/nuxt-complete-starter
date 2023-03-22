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
      "Prepr-Customer-Id": "6d6049ad-b4bb-4344-9501-085b0770856f"
    },
  },
});
