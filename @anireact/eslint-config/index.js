const off = 'off';
const error = 'error';

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 10,
        codeFrame: true,
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        commonjs: true,
        'shared-node-browser': true,
    },
    plugins: [
        'babel',
        'import',
        'unicorn',
        'array-func',
        'fp',
        'promise',
        '@typescript-eslint',
        'jest',
        'no-use-extend-native',
        'prettier',
    ],
    rules: {
        // region Possible errors
        'for-direction': error,
        'getter-return': error,
        'no-compare-neg-zero': error,
        'no-cond-assign': error,
        'no-console': error,
        'no-constant-condition': error,
        'no-control-regex': error,
        'no-debugger': error,
        'no-dupe-args': error,
        'no-dupe-keys': error,
        'no-duplicate-case': error,
        'no-empty': [error, { allowEmptyCatch: true }],
        'no-empty-character-class': error,
        'no-ex-assign': error,
        'no-extra-boolean-cast': error,
        'no-func-assign': error,
        'no-inner-declarations': error,
        'no-invalid-regexp': error,
        'no-irregular-whitespace': error,
        'no-misleading-character-class': error,
        'no-obj-calls': error,
        'no-prototype-builtins': error,
        'no-regex-spaces': error,
        'no-sparse-arrays': error,
        'no-template-curly-in-string': error,
        'no-unreachable': error,
        'no-unsafe-finally': error,
        'no-unsafe-negation': error,
        'require-atomic-updates': error,
        'use-isnan': error,
        // endregion Possible errors

        // region Best practices
        'accessor-pairs': error,
        'array-callback-return': error,
        'block-scoped-var': error,
        complexity: error,
        'consistent-return': error,
        curly: off, // Fuck off.
        'default-case': error,
        'dot-notation': error,
        eqeqeq: error,
        'guard-for-in': error,
        'no-alert': error,
        'no-caller': error,
        'no-case-declarations': error,
        'no-div-regex': error,
        'no-else-return': error,
        'no-empty-function': error,
        'no-eval': error,
        'no-extend-native': error,
        'no-extra-bind': error,
        'no-extra-label': error,
        'no-global-assign': off,
        'no-implicit-coercion': error,
        'no-implicit-globals': error,
        'no-implied-eval': error,
        'no-iterator': error,
        'no-lone-blocks': error,
        'no-loop-func': error,
        'no-multi-str': error,
        'no-new': error,
        'no-new-func': error,
        'no-new-wrappers': error,
        'no-octal': error,
        'no-octal-escape': error,
        'no-param-reassign': error,
        'no-proto': error,
        'no-return-assign': error,
        'no-return-await': error,
        'no-script-url': error,
        'no-self-assign': error,
        'no-self-compare': error,
        'no-sequences': error,
        'no-throw-literal': error,
        'no-unmodified-loop-condition': error,
        'no-unused-labels': error,
        'no-useless-call': error,
        'no-useless-concat': error,
        'no-useless-escape': error,
        'no-useless-return': error,
        'no-warning-comments': off, // TODO: Configure.
        'no-with': error,
        'prefer-promise-reject-errors': error,
        radix: error,
        'require-await': error,
        'require-unicode-regexp': error,
        'vars-on-top': error,
        yoda: error,
        // endregion Best practices

        // region Strict mode
        strict: error,
        // endregion Strict mode

        // region Variables
        'no-delete-var': error,
        'no-label-var': error,
        'no-restricted-globals': error,
        // endregion Variables

        // region NodeJS and CommonJS
        'callback-return': error,
        'global-require': error,
        'handle-callback-err': error,
        'no-buffer-constructor': error,
        'no-mixed-requires': error,
        'no-new-require': error,
        'no-path-concat': error,
        'no-restricted-modules': [
            error,
            {
                paths: [
                    {
                        name: 'path',
                        message: 'Use `upath` instead.',
                    },
                ],
            },
        ],
        'no-sync': error,
        // endregion NodeJS and CommonJS

        // region Stylistic issues
        'linebreak-style': error,
        'max-depth': error,
        'max-lines-per-function': error,
        'max-nested-callbacks': [error, 3],
        'max-params': [error, 7],
        'max-statements': [error, 20],
        'no-array-constructor': error,
        'no-bitwise': error,
        'no-lonely-if': error,
        'no-multi-assign': error,
        'no-new-object': error,
        'no-unneeded-ternary': error,
        'padding-line-between-statements': [
            error,
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'block-like',
                    'break',
                    'cjs-import',
                    'const',
                    'continue',
                    'debugger',
                    'import',
                    'let',
                    'multiline-expression',
                    'return',
                    'throw',
                    'var',
                ],
            },
            {
                blankLine: 'always',
                prev: [
                    'block-like',
                    'break',
                    'cjs-import',
                    'const',
                    'continue',
                    'debugger',
                    'import',
                    'let',
                    'multiline-expression',
                    'return',
                    'throw',
                    'var',
                ],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['cjs-import', 'const', 'import', 'let', 'var'],
                next: ['cjs-import', 'const', 'import', 'let', 'var'],
            },
        ],
        'prefer-object-spread': error,
        'spaced-comment': error,
        // endregion Stylistic issues

        // region ES6
        'constructor-super': error,
        'no-class-assign': error,
        'no-const-assign': error,
        'no-dupe-class-members': error,
        'no-duplicate-imports': error,
        'no-new-symbol': error,
        'no-restricted-imports': [
            error,
            {
                paths: [
                    {
                        name: 'path',
                        message: 'Use `upath` instead.',
                    },
                ],
            },
        ],
        'no-this-before-super': error,
        'no-useless-computed-key': error,
        'no-useless-constructor': error,
        'no-useless-rename': error,
        'no-var': error,
        'object-shorthand': error,
        'prefer-arrow-callback': error,
        'prefer-const': error,
        'prefer-destructuring': [
            error,
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'prefer-numeric-literals': error,
        'prefer-rest-params': error,
        'prefer-spread': error,
        'prefer-template': error,
        'require-yield': error,
        'symbol-description': error,
        // endregion ES6

        // region Babel
        'babel/camelcase': error,
        'babel/no-invalid-this': error,
        'babel/no-unused-expressions': error,
        // endregion Babel

        // region Import
        'import/no-absolute-path': error,
        'import/no-useless-path-segments': error,
        'import/no-default-export': error,
        // endregion Import

        // region Unicorn
        'unicorn/catch-error-name': [error, { name: 'error' }],
        'unicorn/explicit-length-check': error,
        'unicorn/no-process-exit': error,
        'unicorn/throw-new-error': error,
        'unicorn/no-array-instanceof': error,
        'unicorn/no-hex-escape': error,
        'unicorn/prefer-starts-ends-with': error,
        'unicorn/prefer-type-error': error,
        'unicorn/regex-shorthand': error,
        'unicorn/prefer-spread': error,
        'unicorn/error-message': error,
        'unicorn/prefer-add-event-listener': error,
        'unicorn/prefer-exponentiation-operator': error,
        // endregion Unicorn

        // region Array
        'array-func/from-map': error,
        'array-func/no-unnecessary-this-arg': error,
        'array-func/avoid-reverse': error,
        // endregion Array

        // region FP
        'fp/no-arguments': error,
        'fp/no-delete': error,
        'fp/no-mutating-assign': error,
        // endregion FP

        // region Promise
        'promise/catch-or-return': error,
        'promise/no-return-wrap': error,
        'promise/param-names': error,
        'promise/no-nesting': error,
        'promise/no-promise-in-callback': error,
        'promise/no-callback-in-promise': error,
        'promise/avoid-new': error,
        'promise/no-return-in-finally': error,
        'promise/valid-params': error,
        'promise/prefer-await-to-then': error,
        'promise/prefer-await-to-callbacks': error,
        // endregion Promise

        // TODO: React.
        // TODO: JSX a11y.
        // TODO: Node.
        // TODO: Markdown.
        // TODO: Notice.
        // TODO: Security.
        // TODO: Jest.

        // region Misc
        'no-use-extend-native/no-use-extend-native': error,
        'prettier/prettier': error,
        // endregion Misc
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 10,
                codeFrame: true,
                ecmaFeatures: {
                    jsx: true,
                },
                jsx: true,
                project: './tsconfig.json',
            },
            rules: {
                // region TypeScript
                '@typescript-eslint/adjacent-overload-signatures': error,
                '@typescript-eslint/class-name-casing': error,
                '@typescript-eslint/member-ordering': [
                    error,
                    {
                        default: [
                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',
                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',
                            'public-instance-field',
                            'protected-instance-field',
                            'private-instance-field',
                            'constructor',
                            'public-instance-method',
                            'protected-instance-method',
                            'private-instance-method',
                        ],
                    },
                ],
                '@typescript-eslint/no-angle-bracket-type-assertion': error,
                '@typescript-eslint/no-inferrable-types': error,
                '@typescript-eslint/no-namespace': error,
                '@typescript-eslint/no-triple-slash-reference': error,
                '@typescript-eslint/no-var-requires': error,
                '@typescript-eslint/prefer-namespace-keyword': error,
                // endregion TypeScript
            },
        },
        {
            files: ['*.spec.ts', '*.spec.tsx'],
        },
        {
            files: ['*.js'],
            rules: {
                'import/no-commonjs': off,
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};
