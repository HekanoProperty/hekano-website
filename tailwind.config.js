/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a84c',
        'gold-light': '#e8c97a',
        'hk-dark': '#0d0b09',
        'hk-mid': '#151210',
        'hk-card': '#1c1915',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        label: '0.2em',
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
