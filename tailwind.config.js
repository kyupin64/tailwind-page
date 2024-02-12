/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "purple": {
          lavender: "#efa0f7",
          lilac: "#b660cd",
          plum:  "#8d4585",
          eggplant: "#311432",
        },
        "red": {
          ferrari: "#ff2800",
          cherry: "#911402",
          mahogany: "#360904",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  plugins: [],
  }
}

