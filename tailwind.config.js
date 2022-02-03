module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '1280px',
      },
      zIndex: {
        500: '500',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
