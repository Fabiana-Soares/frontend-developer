
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/page.tsx',
    './src/components/Search.tsx',
    './src/components/SearchReturn.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [],
}
