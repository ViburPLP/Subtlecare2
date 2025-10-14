/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0198a7',
        secondary: '#253f94',
        text: '#0b1430',
        muted: '#f6f8fa',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'subtle': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '220': '220ms',
        '320': '320ms',
        '420': '420ms',
      },
    },
  },
  plugins: [],
};
