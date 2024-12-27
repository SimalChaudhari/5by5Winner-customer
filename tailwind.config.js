/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
      colors: {
        customPurple: {
          light: "#A855F7", 
          DEFAULT: "#580e7a",
          dark: "#5B21B6",
          back: "#1f044a",
        },
        skyBlue: "#7fffffff",
        customindigo: "#141245",
      },
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 2s infinite",
      },
      keyframes: {
        ping: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
      },
    },
  },
  plugins: [],
};
