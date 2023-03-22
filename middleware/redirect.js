export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path == '/') {
      return navigateTo('/page-pattern')
    }

  })