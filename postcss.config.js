module.exports = {
    plugins: {
        'postcss-import': {},
        // tailwindcss: {},
        '@csstools/postcss-oklab-function': { 'preserve': true },
        autoprefixer: {},
        // Vanilla CSS from =JFG.
        '@csstools/postcss-nesting-experimental': {},
    },
};
