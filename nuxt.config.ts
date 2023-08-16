// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  devtools: { enabled: true },
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
    baseUrl: '/new-ui-asset/public/'
  },
})
