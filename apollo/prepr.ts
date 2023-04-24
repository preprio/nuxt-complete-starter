import { defineApolloClient } from "@nuxtjs/apollo";

  export default defineApolloClient({
  httpEndpoint: "https://graphql.prepr.io/graphql",
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: "apollo:<client-name>.token",
  authType: "Bearer",
  authHeader: "Authorization",
  // httpLinkOptions: {
  //   headers: {
  //     Authorization: `Bearer ${process.env.PREPR_ACCESS_TOKEN}`,
  //   },
  // },
});
