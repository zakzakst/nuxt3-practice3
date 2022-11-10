// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
  },
  privateRuntimeConfig: {
    HELLO: 'world in the server not the client'
  },
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
