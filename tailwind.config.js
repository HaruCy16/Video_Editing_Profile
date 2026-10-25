/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: { paper: "#f5f5f1", ink: "#181818", muted: "#66665f", line: "#dcdcd3", lime: "#d9ff67" },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
    },
  },
  plugins: [],
}
