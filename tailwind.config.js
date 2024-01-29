/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkCharcoal: '#292828' /* almost black / container bg */,
        darkGray: '#323031' /* almost black / page bg */,
        warmOrange: '#FF9800' /* orange / navigation elements */,
        lightGray: '#CFCFCF' /* gray / neutral color for text */,
        oliveGreen: '#556B2F' /* dark green */,
        brightRed: '#DB3A34' /* red / for emphasis */,
      },
    },
    fontFamily: {
      handwriting: ['Kalam', 'cursive'],
      mono: ['Roboto Mono', 'monospace'],
      sans: ['Inter', 'sans-serif'],
      lato: ['Lato', 'sans-serif']
    },
  },
  plugins: [],
  content: [
    `~/components/**/*.{vue,js,ts}`,
    `~/layouts/**/*.vue`,
    `~/pages/**/*.vue`,
    `~/composables/**/*.{js,ts}`,
    `~/plugins/**/*.{js,ts}`,
    `~/utils/**/*.{js,ts}`,
    `~/App.{js,ts,vue}`,
    `~/app.{js,ts,vue}`,
    `~/Error.{js,ts,vue}`,
    `~/error.{js,ts,vue}`,
    `~/app.config.{js,ts}`
  ]
}

