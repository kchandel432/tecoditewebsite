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
        brand: {
          50: '#EFF5FF',
          100: '#DBE8FF',
          200: '#BED7FF',
          300: '#91BCFF',
          400: '#5C99FD',
          500: '#2F76F0',
          600: '#1A58D6',
          700: '#1645AC',
          800: '#173C8A',
          900: '#183670',
        },
        ink: {
          950: '#060B14',
          900: '#0B1220',
          800: '#111A2B',
          700: '#1B2537',
          600: '#2A3648',
          500: '#475569',
          400: '#64748B',
          300: '#94A3B8',
          200: '#CBD5E1',
          100: '#E7ECF3',
          50: '#F6F8FB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '10px',
        xl: '14px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,18,32,.04), 0 8px 24px -12px rgba(11,18,32,.10)',
      },
      transitionTimingFunction: {
        corporate: 'cubic-bezier(.2,.6,.2,1)',
      },
    },
  },
  plugins: [],
}
