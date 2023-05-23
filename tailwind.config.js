/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ["Open Sans"],
      },
      colors: {
        gray_dark: "#1b1b1b",
        gray_dark_hover: "#181818",
        gray_dark_hover_mobile: "#151515",
        light_black: "#101010",
        android_green: "#85C808",
        windows_blue: "#00B6F0",
        linux_yellow: "#FDC037",
      },
    },
  },
  plugins: [],
};
