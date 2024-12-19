/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004EE7",
        active: "#3D7EF3",
        secondary: "rgb(188, 208, 251, 1)",
      },
    },
  },
  plugins: [],
};
