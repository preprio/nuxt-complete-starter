import { defineApolloClient } from "@nuxtjs/apollo";

export default defineApolloClient({
  httpEndpoint: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN}`,
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: "apollo:<client-name>.token",
  tokenStorage: "cookie",
});
