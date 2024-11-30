/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexendExa: ["var(--font-lexend-exa)", "sans-serif"],
        workSans: ["var(--font-work-sans)", "sans serif"],
      },
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
