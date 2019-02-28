module.exports = {
    extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
    rules: {
        'scope-empty': [0],
        'subject-case': [2, 'always', 'sentence-case'],
        'subject-full-stop': [2, 'always', '.'],
    },
};
