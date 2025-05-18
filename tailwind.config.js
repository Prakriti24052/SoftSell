/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables dark mode support
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#6366f1',     // Indigo 500
        secondary: '#06b6d4',   // Cyan 400
        base: '#f8fafc',        // Light background
        text: '#1e293b',        // Slate 800
      },
    },
  },
  plugins: [],
}
