module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {  
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gray: {
          600: 'var(--gray-600)'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
        display: ['var(--font-display)']
      }
    },
  },
  plugins: [],
}