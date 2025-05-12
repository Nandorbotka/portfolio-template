// tailwind.config.js

module.exports = {
    content: [
        "./index.html", // Include the root HTML file
        "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in the 'src' folder
    ],
    theme: {
        extend: {
            screens: {
                sm: "480px",
            },
            spacing: {
                big: "48rem",
            },
        },
        fontFamily: {
            nunito: ["Nunito", "sans-serif"],
        },
    },
    plugins: [],
};
