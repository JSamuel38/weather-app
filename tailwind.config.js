/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(8rem, 1fr))',
      }
    },
  },
  plugins: [],
}