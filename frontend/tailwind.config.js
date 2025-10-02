/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#333333",
        slate: "#5A5A5A",
        emeraldMist: "#10B981",
        customWhite: "#F5F5F5",
        customSilver: "#D1D5DB",
        customGreen: "#0F766E",
        customBlack: "#000000",
        customTeal: "#134E4A",
        customGray: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
