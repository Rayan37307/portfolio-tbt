/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
    inter: ['Inter', 'sans-serif'],
    outfit: ['Outfit', 'sans-serif'],
    prata: ['Prata', 'serif'],
    dmsans: ['DM Sans', 'sans-serif'],
    space : ['Space Grotesk', 'sans-serif']
  },
    },
  },
  plugins: [],
}

