/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#050814",
          card: "#0d1326",
          hover: "#141c38",
          border: "#1d294d",
          cyan: "#00f0ff",
          purple: "#7000ff",
          gold: "#e5a93b",
          pink: "#ff007f"
        }
      },
      fontFamily: {
        heading: ["'Staatliches'", "sans-serif"]
      }
    },
  },
  plugins: [],
}
