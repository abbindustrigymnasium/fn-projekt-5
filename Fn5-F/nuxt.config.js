import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
    css: ["@/assets/styles/style.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            }
        },
    },
})