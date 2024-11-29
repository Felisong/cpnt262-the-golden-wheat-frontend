/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brownBg: "#4A2D0F",
        darkBlue: "#0F1223",
        yellowBright: "#FFD754",
        softYellow: "#FFF6DB",
      },
    },
  },
  plugins: [],
};
