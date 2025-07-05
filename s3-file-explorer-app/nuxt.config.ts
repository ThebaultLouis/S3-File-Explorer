// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-electron'
  ],
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart(options) {
          options.reload()
        },
      }
    ],
    disableDefaultOptions: true,
  },
  runtimeConfig: {
    public: {
      awsRegion: process.env.NUXT_PUBLIC_AWS_REGION,
      awsBucket: process.env.NUXT_PUBLIC_AWS_BUCKET,
      awsAccessKeyId: process.env.NUXT_PUBLIC_AWS_ACCESS_KEY_ID,
      awsSecretAccessKey: process.env.NUXT_PUBLIC_AWS_SECRET_ACCESS_KEY
    }
  }
})