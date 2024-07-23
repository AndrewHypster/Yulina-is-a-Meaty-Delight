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
        bodily: "#F7E8C2",
        mustard: "#E8D888",
        "my-white": "#FFF",
        "my-gray": "#5C5C5C",
        "my-black": "#413636",
        "dark-red": "#8B0000",
        "my-green": "#228B22",
        "dark-brown": "#654321",
        "light-brown": "#D2B48C",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        "long-cang": ["Long Cang", "cursive"],
        "marck-script": ["Marck Script", "cursive"],
        "pt-sans-narrow": ["PT Sans Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
