module.exports = {
    hooks: {
        'pre-push': 'lerna run build && yarn lint',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    },
};
