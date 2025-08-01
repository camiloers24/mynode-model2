/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mn-black': '#15171a',
        'mn-gray-banner': '#757575',
        'mn-gray-gradient': '#4D4D4D',
        'mn-orange': '#F08E20',
        'mn-orange-gradient': '#F4BB32',
        'card-color': '#2A2A2A',
        'card-border': '#5B5B5B', 
      },
      fontFamily: {
        'inter': ['Inter'],
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        grow: 'grow 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}