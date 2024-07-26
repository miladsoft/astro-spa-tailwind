/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3748",
        secondary: "#1A202C",
        accent: "#F56565",
      },
    },
  },
  plugins: [],
};
