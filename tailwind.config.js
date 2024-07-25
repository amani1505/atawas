/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeTop: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeBottom: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
        fadeLeft: "fadeLeft 0.5s ease-in-out",
        fadeRight: "fadeRight 0.5s ease-in-out",
        fadeTop: "fadeTop 0.5s ease-in-out",
        fadeBottom: "fadeBottom 0.5s ease-in-out",
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
    fontFamily: {
      "pt-serif": ["PT Serif", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      raleway: ["Raleway"],
      varela: ["Varela Round", "sans-serif"],
    },
  },
  variants: {
    extend: {
      animationDelay: ["responsive"],
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const animationDelayUtilities = {};
      const delays = theme("animationDelay");

      Object.keys(delays).forEach((key) => {
        animationDelayUtilities[`.delay-${key}`] = {
          animationDelay: delays[key],
        };
      });

      addUtilities(animationDelayUtilities, ["responsive"]);
    },
  ],
};
