/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This covers all files in your src directory
    "./*.{js,ts,jsx,tsx,mdx}", // This covers files like Navbar.tsx, Footer.tsx directly in the root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};