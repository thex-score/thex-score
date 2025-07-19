// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/ui', '@nuxtjs/seo', '@nuxt/image-edge'],
  css: ['~/assets/css/main.css'],
    icon: {
    provider: 'iconify',
    serverBundle: false,
    clientBundle: { scan: true }
  },
  site: {
    url: 'https://thex-score.github.io',
    name: '裏スコボEX',
    defaultLocale: 'ja',
    trailingSlash: false,
    indexable: true
  },
  image: {                                         // nuxt/image
    dir: 'public',
    presets: {
      og: { modifiers: { fit: 'cover', width: 1395, height: 630 } }
    }
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