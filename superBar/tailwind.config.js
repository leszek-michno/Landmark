/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "30%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        typing: "typing 7s",
      },
    },
  },
  plugins: [],
};
