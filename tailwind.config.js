/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light: '#f0d98d',
          dark: '#b8941f'
        },
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
          light: '#2a2a2a'
        }
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
