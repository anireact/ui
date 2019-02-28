module.exports = {
    transform: {
        '^.+\\.ts$': 'babel-jest',
    },
    testEnvironment: 'node',
    testRegex: '\\.spec\\.ts$',
    testPathIgnorePatterns: ['/dist/', '/node_modules/'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
