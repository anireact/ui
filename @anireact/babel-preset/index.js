/* eslint-disable global-require */
/* eslint-disable max-lines-per-function */

const env = process.env.NODE_ENV || process.env.BABEL_ENV;

module.exports = () => ({
    presets: [
        [
            require('@babel/preset-env'),
            {
                modules: env === 'test',
                shippedProposals: true,
                useBuiltIns: 'usage',
            },
        ],
        require('@babel/preset-typescript'),
        require('@babel/preset-react'),
    ],
    plugins: [
        require('@babel/plugin-transform-runtime'),
        require('@babel/plugin-proposal-class-properties'),
        require('@babel/plugin-syntax-dynamic-import'),
        [
            require('styled-jsx/babel'),
            {
                optimizeForSpeed: true,
                sourceMaps: true,
                vendorPrefixes: true,
            },
        ],
    ],
});
