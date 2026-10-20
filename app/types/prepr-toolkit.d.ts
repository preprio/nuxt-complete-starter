// @preprio/toolkit ships its Nuxt components as .vue source without type
// declarations, so tell TypeScript what these imports are.
declare module '@preprio/toolkit/nuxt/components/*' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>>
  export default component
}
