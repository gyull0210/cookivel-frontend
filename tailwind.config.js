/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({colors}) => ({
        primary: colors.sky[400],
        secondary: colors.sky[400],
        accent: colors.sky[400],
        info: colors.sky[400],
        success: colors.green[400],
        warning: colors.yellow[500],
        error: colors.red[500]
      }),
      keyframes: {
        'fadeIn': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out'
      },
      fontFamily: {
        sans: ['Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif'],
        pretendard: 'Pretendard Variable, Pretendard, sans-serif',
        jua:'Jua, sans-serif'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
  ],
}
