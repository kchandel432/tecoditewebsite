/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./context/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        techblue: "#00b4ff",
        techviolet: "#7c3aed",
        techaqua: "#2dd4bf",
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          text: '#1e293b',
          muted: '#64748b',
          border: '#e2e8f0',
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#f1f5f9',
          muted: '#94a3b8',
          border: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}