module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@vue-interface/variant/tailwindcss'),
        require('@vue-interface/btn/tailwindcss'),
        require('@vue-interface/dropdown-menu/tailwindcss'),
        require('./tailwindcss')
    ],
    safelist: [
        ...require('@vue-interface/btn/tailwindcss/safelist')(),
        ...require('@vue-interface/dropdown-menu/tailwindcss/safelist')()
    ]
};
