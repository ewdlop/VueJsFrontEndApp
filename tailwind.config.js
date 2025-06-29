/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fantasy': ['Cinzel', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'fantasy': {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e9ddff',
          300: '#d7c1ff',
          400: '#bf9bff',
          500: '#a570ff',
          600: '#9149f7',
          700: '#7c2ee3',
          800: '#6926bf',
          900: '#56229c',
          950: '#341069',
        },
        'mythic': {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc071',
          400: '#ff9a38',
          500: '#ff7a11',
          600: '#f05d07',
          700: '#c74508',
          800: '#9e380f',
          900: '#7f3010',
          950: '#451606',
        }
      },
      backgroundImage: {
        'fantasy-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'mythic-gradient': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
} 