// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  srcDir: 'src/',
  devtools: { enabled: true },
  css: [
    '~/assets/fontello/css/fontello-customize.css',
    '~/assets/fontello/css/fontello-codes.css',
    '~/assets/fontello/css/animation.css',
  ],
  modules: ['@nuxthq/ui'],
  // app: {
  //   head: {
  //     bodyAttrs: {
  //       class: 'antialiased font-sans text-gray-700 bg-white flex w-full min-h-screen flex flex-col'
  //     }
  //   },
  // },
  colorMode: {
    preference: 'light',
  },
  app: {
    baseUrl: '/new-ui-asset/',
  },
})
