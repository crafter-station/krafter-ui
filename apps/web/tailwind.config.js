/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "hsl(var(--color-blue-50))",
          100: "hsl(var(--color-blue-100))",
          200: "hsl(var(--color-blue-200))",
          300: "hsl(var(--color-blue-300))",
          400: "hsl(var(--color-blue-400))",
          500: "hsl(var(--color-blue-500))",
          600: "hsl(var(--color-blue-600))",
          700: "hsl(var(--color-blue-700))",
          800: "hsl(var(--color-blue-800))",
          900: "hsl(var(--color-blue-900))",
        },
        purple: {
          50: "hsl(var(--color-purple-50))",
          100: "hsl(var(--color-purple-100))",
          200: "hsl(var(--color-purple-200))",
          300: "hsl(var(--color-purple-300))",
          400: "hsl(var(--color-purple-400))",
          500: "hsl(var(--color-purple-500))",
          600: "hsl(var(--color-purple-600))",
          700: "hsl(var(--color-purple-700))",
          800: "hsl(var(--color-purple-800))",
          900: "hsl(var(--color-purple-900))",
        },
        green: {
          50: "hsl(var(--color-green-50))",
          100: "hsl(var(--color-green-100))",
          200: "hsl(var(--color-green-200))",
          300: "hsl(var(--color-green-300))",
          400: "hsl(var(--color-green-400))",
          500: "hsl(var(--color-green-500))",
          600: "hsl(var(--color-green-600))",
          700: "hsl(var(--color-green-700))",
          800: "hsl(var(--color-green-800))",
          900: "hsl(var(--color-green-900))",
        },
        red: {
          50: "hsl(var(--color-red-50))",
          100: "hsl(var(--color-red-100))",
          200: "hsl(var(--color-red-200))",
          300: "hsl(var(--color-red-300))",
          400: "hsl(var(--color-red-400))",
          500: "hsl(var(--color-red-500))",
          600: "hsl(var(--color-red-600))",
          700: "hsl(var(--color-red-700))",
          800: "hsl(var(--color-red-800))",
          900: "hsl(var(--color-red-900))",
        },
        orange: {
          50: "hsl(var(--color-orange-50))",
          100: "hsl(var(--color-orange-100))",
          200: "hsl(var(--color-orange-200))",
          300: "hsl(var(--color-orange-300))",
          400: "hsl(var(--color-orange-400))",
          500: "hsl(var(--color-orange-500))",
          600: "hsl(var(--color-orange-600))",
          700: "hsl(var(--color-orange-700))",
          800: "hsl(var(--color-orange-800))",
          900: "hsl(var(--color-orange-900))",
        },
        yellow: {
          50: "hsl(var(--color-yellow-50))",
          100: "hsl(var(--color-yellow-100))",
          200: "hsl(var(--color-yellow-200))",
          300: "hsl(var(--color-yellow-300))",
          400: "hsl(var(--color-yellow-400))",
          500: "hsl(var(--color-yellow-500))",
          600: "hsl(var(--color-yellow-600))",
          700: "hsl(var(--color-yellow-700))",
          800: "hsl(var(--color-yellow-800))",
          900: "hsl(var(--color-yellow-900))",
        },
        teal: {
          50: "hsl(var(--color-teal-50))",
          100: "hsl(var(--color-teal-100))",
          200: "hsl(var(--color-teal-200))",
          300: "hsl(var(--color-teal-300))",
          400: "hsl(var(--color-teal-400))",
          500: "hsl(var(--color-teal-500))",
          600: "hsl(var(--color-teal-600))",
          700: "hsl(var(--color-teal-700))",
          800: "hsl(var(--color-teal-800))",
          900: "hsl(var(--color-teal-900))",
        },
        pink: {
          50: "hsl(var(--color-pink-50))",
          100: "hsl(var(--color-pink-100))",
          200: "hsl(var(--color-pink-200))",
          300: "hsl(var(--color-pink-300))",
          400: "hsl(var(--color-pink-400))",
          500: "hsl(var(--color-pink-500))",
          600: "hsl(var(--color-pink-600))",
          700: "hsl(var(--color-pink-700))",
          800: "hsl(var(--color-pink-800))",
          900: "hsl(var(--color-pink-900))",
        },
        primary: {
          base: "hsl(var(--primary-base))",
          dark: "hsl(var(--primary-dark))",
          darker: "hsl(var(--primary-darker))",
          darkest: "hsl(var(--primary-darkest))",
          light: "hsl(var(--primary-light))",
          lighter: "hsl(var(--primary-lighter))",
          lightest: "hsl(var(--primary-lightest))",
        },
        secondary: {
          base: "hsl(var(--secondary-base))",
          dark: "hsl(var(--secondary-dark))",
          darker: "hsl(var(--secondary-darker))",
          darkest: "hsl(var(--secondary-darkest))",
          light: "hsl(var(--secondary-light))",
          lighter: "hsl(var(--secondary-lighter))",
          lightest: "hsl(var(--secondary-lightest))",
        },
        success: {
          base: "hsl(var(--success-base))",
          dark: "hsl(var(--success-dark))",
          darker: "hsl(var(--success-darker))",
          darkest: "hsl(var(--success-darkest))",
          light: "hsl(var(--success-light))",
          lighter: "hsl(var(--success-lighter))",
          lightest: "hsl(var(--success-lightest))",
        },
        warning: {
          base: "hsl(var(--warning-base))",
          dark: "hsl(var(--warning-dark))",
          darker: "hsl(var(--warning-darker))",
          darkest: "hsl(var(--warning-darkest))",
          light: "hsl(var(--warning-light))",
          lighter: "hsl(var(--warning-lighter))",
          lightest: "hsl(var(--warning-lightest))",
        },
        danger: {
          base: "hsl(var(--danger-base))",
          dark: "hsl(var(--danger-dark))",
          darker: "hsl(var(--danger-darker))",
          darkest: "hsl(var(--danger-darkest))",
          light: "hsl(var(--danger-light))",
          lighter: "hsl(var(--danger-lighter))",
          lightest: "hsl(var(--danger-lightest))",
        },
        info: {
          base: "hsl(var(--info-base))",
          dark: "hsl(var(--info-dark))",
          darker: "hsl(var(--info-darker))",
          darkest: "hsl(var(--info-darkest))",
          light: "hsl(var(--info-light))",
          lighter: "hsl(var(--info-lighter))",
          lightest: "hsl(var(--info-lightest))",
        },
        highlight: {
          base: "hsl(var(--highlight-base))",
          dark: "hsl(var(--highlight-dark))",
          darker: "hsl(var(--highlight-darker))",
          darkest: "hsl(var(--highlight-darkest))",
          light: "hsl(var(--highlight-light))",
          lighter: "hsl(var(--highlight-lighter))",
          lightest: "hsl(var(--highlight-lightest))",
        },
        verified: {
          base: "hsl(var(--verified-base))",
          dark: "hsl(var(--verified-dark))",
          darker: "hsl(var(--verified-darker))",
          darkest: "hsl(var(--verified-darkest))",
          light: "hsl(var(--verified-light))",
          lighter: "hsl(var(--verified-lighter))",
          lightest: "hsl(var(--verified-lightest))",
        },
      },
      textColor: {
        main: "hsl(var(--text-main))",
        muted: "hsl(var(--text-muted))",
        faint: "hsl(var(--text-faint))",
      },
      backgroundColor: {
        main: "hsl(var(--background-main))",
        surface: "hsl(var(--background-surface))",
        muted: "hsl(var(--background-muted))",
        faint: "hsl(var(--background-faint))",
        accent: "hsl(var(--background-accent))",
        hover: "hsl(var(--background-hover))",
        active: "hsl(var(--background-active))",
        focus: "hsl(var(--background-focus))",
        selected: "hsl(var(--background-selected))",
        disabled: "hsl(var(--background-disabled))",
      },
      borderColor: {
        main: "hsl(var(--border-main))",
        muted: "hsl(var(--border-muted))",
        faint: "hsl(var(--border-faint))",
        disabled: "hsl(var(--border-disabled))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};