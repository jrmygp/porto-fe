/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
      colors: {
        primary: "rgb(235, 89, 57)",
        "text-primary": "#3F434A",
        "text-orange": "rgb(235, 89, 57)",
      },
    },
  },
  plugins: [],
};
