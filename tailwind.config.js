module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    // Preline が data-hs-* をスキャン出来るように
    './node_modules/preline/**/*.js'
  ],
  plugins: [
    require('preline/plugin'),   // ← Preline を Tailwind プラグインとして有効化
    require('@tailwindcss/forms')
  ],
}
