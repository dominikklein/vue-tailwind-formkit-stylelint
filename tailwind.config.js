const { formKitTailwind } = require('@formkit/themes')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    formKitTailwind
  ],
}