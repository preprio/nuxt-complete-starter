import { handlePreprRequest } from '@preprio/toolkit/nuxt'

// Gives every visitor a Prepr customer ID cookie and prepares the Prepr
// request headers (customer ID, segment, A/B variant) for the page fetch.
export default defineEventHandler((event) => {
  handlePreprRequest(event)
})
