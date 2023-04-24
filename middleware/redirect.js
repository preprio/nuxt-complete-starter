export default defineNuxtRouteMiddleware((to, from) => {
    if (to.name == 'page-pattern') {
      console.log(to)
      return navigateTo('/page-pattern/home')
    }
  })