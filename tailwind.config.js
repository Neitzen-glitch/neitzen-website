/** @type {import(`tailwindcss`).config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A2540", // Deep Blue
                secondary: "#7B3FE4", // Elecrtic purple
                accent: "#00FF9F", // Vibrant Green
                neutralLight: "#FFFFFF", // White
                neutralDark: "#1C1C1C", // Dark Gray
            },
            fontFamily: {
                heading: ["Montserrat", "Poppins", "sans-serif"],
                body: ["Roboto", "Inter", "sans-serif"],
                futuristic: ["Orbitron", "Exo2", "sans-serif"],
            },
        },
    },
    plugins: [],
}
