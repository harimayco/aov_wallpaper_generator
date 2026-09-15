/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arcade: {
          bg: "#F4F0FF",       // Lavender cream
          violet: "#7C3AED",   // Electric violet
          mint: "#00E5A3",     // Cyber mint
          ink: "#120E16",      // Deep ink violet
          panel: "#1A1528",    // Midnight violet dark panel
          panelDark: "#211B33",// Dark panel secondary
          muted: "#5C526A",    // Muted plum body text
          white: "#FFFFFF",
        }
      },
      fontFamily: {
        display: ["'Fredoka'", "'Boogaloo'", "cursive"],
        mono: ["'Courier Prime'", "'Courier New'", "monospace"],
      },
      boxShadow: {
        arcade: "3px 3px 0 #120E16",
        'arcade-lg': "4px 4px 0 #120E16",
        'arcade-sm': "2px 2px 0 #120E16",
        'arcade-mint': "3px 3px 0 #00E5A3",
      }
    },
  },
  plugins: [],
}
