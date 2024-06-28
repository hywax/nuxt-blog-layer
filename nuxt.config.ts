export default defineNuxtConfig({
  srcDir: 'src',
  runtimeConfig: {
    githubToken: '',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
})
