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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
}
