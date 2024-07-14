/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { screens: {
    sm: '375px',
    md: '768px',
    lg: '1100px',
    xl: '1280px',
    '2xl': '1536px',
  },
    extend: {
      colors: {
        primary: '#200D41',   // Primärfarbe
        secondary: '#80E7A6', // Sekundärfarbe
        accent: '#B6F1CC',    // Akzentfarbe
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
