/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=light]"
                    ],
                    primary: "#ffffff",
                    secondary: "#4A5056",
                    "primary-content": "#00833D",
                    "primary-focus": "#006A31",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=dark]"
                    ],
                    primary: "#ffffff",
                    secondary: "#4A5056",
                    "primary-content": "#00833D",
                    "primary-focus": "#006A31",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
