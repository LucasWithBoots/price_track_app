/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      textPrimary: "#001F3F",
    },
    extend: {
      fontFamily: {
        poppins_regular: "Poppins_400Regular",
        poppins_medium: "Poppins_500Medium",
        poppins_semibold: "Poppins_600SemiBold",
        poppins_bold: "Poppins_700Bold",
        poppins_extrabold: "Poppins_800ExtraBold",
        poppins_black: "Poppins_900Black",
      },
    },
  },
  plugins: [],
};
