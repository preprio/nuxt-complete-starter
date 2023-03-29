import { createHttpLink, from } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

export default defineNuxtPlugin((nuxtApp) => {
  // This plug-in takes care of changing the Prepr access token on the fly so
  // that users can switch between the default and their own Prepr account.
  // add a ?token={yourtoken} query parameter to the URL to switch to a different account.

  const runtimeConfig = useRuntimeConfig();
  const { $apollo } = useNuxtApp();
  const route = useRoute();
  const cookieToken = useCookie("token");
  const showBanner = useCookie("showBanner");
  let token;

  if (cookieToken.value) {
    token = route.query.token ? route.query.token : cookieToken.value;
  } else {
    token = route.query.token
      ? route.query.token
      : runtimeConfig.PREPR_ACCESS_TOKEN;
  }

  cookieToken.value = token;

  // Create an authLink and set authentication token if necessary
  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const httpLink = authLink.concat(
    createHttpLink({
      uri: 'https://graphql.prepr.io/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  
  const errorLink = onError((err) => {
    nuxtApp.callHook("apollo:error", err);
  });

  // Set custom links in the apollo client (in this case, the default apollo client)
  $apollo.defaultClient.setLink(from([errorLink, httpLink]));

  nuxtApp.hook("apollo:error", (error) => {
    console.error(error);
  });
});
