/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0b0f1a',
        blueish: '#1e2a38',
        steel: '#3b4e66',
      },
    },
  },
  plugins: [],
}
