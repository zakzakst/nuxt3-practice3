// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // meta: {
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css',
  //     }
  //   ]
  // }
  css: [
    '~/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
