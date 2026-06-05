/** @type {import("prettier").Config} */
export default {
    printWidth: 100,
    singleQuote: false,
    semi: true,
    tabWidth: 4,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: { parser: "astro" },
        },
    ],
};
