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
        primary: '#8545A8',   // Primärfarbe
        secondary: '#AA4A82', // Sekundärfarbe
        accent: '#6E5971',    // Akzentfarbe
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
