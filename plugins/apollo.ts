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
  let token;

  if (cookieToken.value) {
    token = route.query.token ? route.query.token : cookieToken.value;
  } else {
    token = route.query.token
      ? route.query.token
      : runtimeConfig.public.PREPR_ACCESS_TOKEN;
  }

  // Update the token value
  cookieToken.value = token;

  const authLink = setContext(async (_, from) => {
    return {}
  });

  const httpLink = authLink.concat(
    createHttpLink({
      uri: `https://graphql.prepr.io/${token}`
    })
  );

  // For this example we override the client to pass the Customer-Id
  const httpLinkCustomerOne = authLink.concat(
      createHttpLink({
        uri: `https://graphql.prepr.io/${token}`,
        headers : {
          "Prepr-Customer-Id": "visitor-id-ef3125af"
        }
      })
  );

  // For this example we override the client to pass the Customer-Id
  const httpLinkCustomerTwo = authLink.concat(
      createHttpLink({
        uri: `https://graphql.prepr.io/${token}`,
        headers : {
          "Prepr-Customer-Id": "visitor-id-5feb47f4"
        }
      })
  );

  const errorLink = onError((err) => {
    nuxtApp.hook("apollo:error", (error) => {
      // Handle different error cases
    });
  });

  // Set custom links in the apollo client (in this case, the default apollo client or the Customer headers)
  $apollo.defaultClient.setLink(from([errorLink, httpLink]));
  $apollo.clients.asegment.setLink(from([httpLinkCustomerOne]));
  $apollo.clients.bsegment.setLink(from([httpLinkCustomerTwo]));

  nuxtApp.hook("apollo:error", (error) => {
  });
});
