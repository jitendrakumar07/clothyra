/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ['Prata', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'underline-shine': 'underline-shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        'underline-shine': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors: {
        beige: '#fdfcfb',
        golden: '#d3ab66',
        lightBeige: '#faf9f7',
        borderBeige: '#ddd5c7',
      },
    },
  },
  plugins: [],
};