/* eslint-env node */

const dedent = require('dedent');
const { Confirm } = require('enquirer');

const lerna = require('./lerna');
const pkg = require('./package');

module.exports = {
    scopes: ['anireact', 'tld'],
    workspaces: ['@anireact', '@tld'],
    repository: pkg.repository,
    homepage: (name, workspace) => `https://github.com/anireact/ui/tree/master/${workspace}/${name}`,
    bugs: (name, workspace) => `https://github.com/anireact/ui/issues?q=is:issue+label:${workspace}/${name}`,
    author: pkg.author,
    context: __dirname,
    version: lerna.version,
    private: false,
    license: 'GPL-3.0-or-later',
    main: 'dist/index.js',
    package: x => ({
        ...x,
        types: x.main.replace(/\.js$/u, '.d.ts'),
        scripts: {
            build: 'yarn build:js && yarn build:ts',
            'build:js': 'rollup -c ../../rollup.config.js',
            'build:ts': 'tsc --declaration --emitDeclarationOnly --outDir dist --pretty --rootDir src',
            clean: 'rimraf dist',
            prepublishOnly: 'yarn run clean && yarn run build',
        },
    }),
    finalize: async pkg_ => {
        const add = await new Confirm({
            message: 'Add to Git:',
            initial: true,
        }).run();

        return [
            { root: true, run: ['yarn'] },
            ['yarn', 'add', '@babel/runtime', 'core-js'],
            {
                file: 'README.md',
                // language=Markdown
                data: dedent`
                    # ${pkg_.name}

                    > ${pkg_.description}

                    ## License

                    GPL-3.0-or-later`,
            },
            {
                file: 'babel.config.js',
                data: `
                    module.exports = require('../../babel.config');
                `,
            },
            {
                file: 'tsconfig.json',
                data: {
                    extends: '../../tsconfig.json',
                    compilerOptions: {
                        rootDir: 'src',
                        outDir: 'dist',
                    },
                    exclude: ['dist'],
                },
            },
            ['mkdirp', 'src'],
            {
                file: 'src/index.ts',
                data: '',
            },
            ['prettier', '--write', './**/*.{js,jsx,ts,tsx,css,less,scss,html,json,md}'],
            add && ['git', 'add', './*'],
        ];
    },
};
