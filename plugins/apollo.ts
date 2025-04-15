import { createHttpLink, from, ApolloLink } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const { $apollo } = useNuxtApp();
  let preprEndpoint = runtimeConfig.public.PREPR_GRAPHQL_URL;

  const authLink = setContext(async (_, from) => {
    return {}
  });

  const httpLink = authLink.concat(
    createHttpLink({
      uri: `${preprEndpoint}`
    })
  );

  const customLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((data) => {
      return data
    })
  })

  const errorLink = onError((err) => {
    nuxtApp.hook("apollo:error", (error) => {
      // Handle different error cases
    });
  });

  // Set custom links in the apollo client (in this case, the default apollo client )
  $apollo.defaultClient.setLink(from([errorLink, httpLink]));

  nuxtApp.hook("apollo:error", (error) => {
  });
});