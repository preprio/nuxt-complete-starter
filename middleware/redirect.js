export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name === 'page') {
    console.log(to)
    return navigateTo('/page/home')
  }
})
