// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
    icon: {
    provider: 'iconify',
    serverBundle: false,
    clientBundle: { scan: true }
  },
  app: {
    baseURL: process.env.NUXT_PUBLIC_DEPLOY_ENV === 'github_pages'
      ? '/thex-score/'
      : '/'
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
})
