/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        calypso: {
          red: '#8B0000',
          darkred: '#660000',
        },
        void: '#0a0a0a',
        offwhite: '#f5f5f5'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        marker: ['Permanent Marker', 'cursive'],
        heading: ['Clash Display', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
