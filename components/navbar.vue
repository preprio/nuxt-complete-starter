<template>
  <header class="bg-primary-100 py-4">
    <nav aria-label="Global">
      <div class="mx-auto max-w-8xl p-spacing flex items-center justify-between">
        <a href="/">
            <span class="flex md:hidden">
            <Logo :text="false" />
            </span>
          <span class="hidden md:flex">
            <Logo />
            </span>
        </a>
        <ul class="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          <li v-for="(item, index) in navItems" :key="index">
            <RouterLink :to="item.href">
              <template v-if="typeof item.text === 'string'">
                {{ item.text }}
              </template>

            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/logo'
import { RouterLink } from 'vue-router'

export default {
  components: {
    Logo,
    RouterLink
  },
  data() {
    return {
      navItems: [
        {
          text: 'Find a car',
          href: '#',
        },
        {
          text: 'About Acme',
          href: '/about-acme',
        },
        {
          text: 'Blog',
          href: '#',
        },
        {
          text: 'Contacts',
          href: '#',
        },
      ]
    }
  }
}
</script>