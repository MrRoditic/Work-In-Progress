/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1c1817",
          "200": "#1a1817",
        },
        black: "#000",
        white: "#fff",
      },
      fontFamily: {
        "lexend-giga": "'Lexend Giga'",
      },
      borderRadius: {
        "mini-5": "14.5px",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
