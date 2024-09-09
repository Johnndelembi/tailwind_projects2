/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '14440px',
    },
    extend: {
      animation: {
        slide: "slide 3s linear infinite",
        blob: "blob 7s infinite",
    },
    keyframes: {
      slide: {
        "0%": {transform: "translateY(100%)", opacity: 0.1 },
        "15%": {transform: "translateY(0)", opacity: 1 },
        "30%": {transform: "translateY(0)", opacity: 1 },
        "45%": {transform: "translateY(-100%)", opacity: 1 },
        "100%": {transform: "translateY(-100%)", opacity: 0.1 },
      },
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
    },
  },
},
variants: {
  extend: {},
},
  plugins: [],
};

