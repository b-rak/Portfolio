/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /** Dark mode */
        darkCharcoal: '#292828' /* almost black / container bg */,
        darkGray: '#323031' /* almost black / page bg */,
        warmOrange: '#FF9800' /* orange / navigation elements */,
        lightGray: '#CFCFCF' /* gray / neutral color for text */,
        oliveGreen: '#556B2F' /* dark green */,
        brightRed: '#DB3A34' /* red / for emphasis */,
        /** Light Mode */
        lightCharcoal: '#F5F5F5' /** light gray / container bg */,
        lightGray: '#E0E0E0' /** light gray / page bg */,
        orangeBrown: '#855000',  /** orange-brown / navigation elements; alternatively: coolBlue: '#2196F3' blue / navigation elements */
        darkGray: '#333333' /** dark gray / neutral color for text */,
        forestGreen: '#2E7D32' /** dark green */,
        deepRed: '#BD2C00' /** deep red / for emphasis */,
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

