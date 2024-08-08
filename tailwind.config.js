/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        header: "600px",
      },
      borderRadius : {
        header : "85px"
      }
    },
  },
  plugins: [],
};
