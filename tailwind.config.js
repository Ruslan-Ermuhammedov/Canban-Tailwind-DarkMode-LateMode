/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    screens:{
      tablet:'20rem',//320px dan 1024px gacha
       desktop:'64rem',//1024px dan uyogi ga desktop
    },
    
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#FFFFFF",
        300: "#F4F7FD",
      },
      blue: {
        100: "#A8A4FF",
        500: "#635FC7",
      },
      gray: {
        100: "#E4EBFA",
        700: "#828FA3",
      },
      black: {
        300: "#3E3F4E",
        500: "#20212C",
        700: "#2B2C37",
        900: "#000112",
      },
      red:{
        300:"#FF9898",
        500:"#EA555 5"
      }
    },
    fontSize:{
     xs:['0.75rem','normal'],//12px
     base:['0.81rem','normal'],//13px
     sm:['0.94rem','normal'],//15px
     md:['1.125rem','normal'],//18px
     lg:['1.5rem','normal'],//24px
    },
    extend: {
      boxShadow: {
        '3xl': ' 0 0 5px rgb(183, 183, 183)',
        '2xl': '   0px 0px 2px rgb(186, 191, 212)',
      }
    },
  },
  plugins: [],
}