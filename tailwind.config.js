/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      padding: "20px",
      center: true
    },
    extend: {
      padding: {
        9: "2.25rem",
        18: "4.5rem"
      }
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      "gray-100": "#6e6d7a",
      "gray-200": "#dbdbde",
      "gray-300": "#333333",
      "gray-400": "#f3f3f4",
      "gray-500": "#9e9ea7",
      "gray-600": "#fafafb",
      "gray-700": "#0d0c22",
      "gray-800": "#cccccc",
      "pink-100": "#ea4c89"
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
