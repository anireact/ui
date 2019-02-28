#!/usr/bin/env node

/* eslint-env node */

/*
 eslint-disable
 import/no-dynamic-require,
 global-require,
 fp/no-loops,
 no-console,
 max-statements,
 max-lines-per-function,
 complexity,
 */

const { writeFileSync: writeFile } = require('fs');

const cosmiconfig = require('cosmiconfig');
const { sync: spawn } = require('cross-spawn');
const { Input, Select } = require('enquirer');
const { sync: mkdirp } = require('mkdirp');
const stringify = require('json-stable-stringify');
const { resolve, dirname, basename } = require('upath');
const yargs = require('yargs');

const prompt = (Type, message, options = {}, initial = undefined) => new Type({ message, initial, ...options }).run();

(async () => {
    const configFinder = cosmiconfig('new');
    const foundConfig = await configFinder.search();

    if (!foundConfig || foundConfig.isEmpty) throw new Error('`new.config.js` not found or empty.');

    const { config } = foundConfig;

    const { argv } = yargs
        .option('n', {
            alias: 'name',
            describe: 'Name.',
            type: 'string',
        })
        .option('d', {
            alias: 'description',
            describe: 'Description.',
            type: 'string',
        })
        .option('s', {
            alias: 'scope',
            describe: 'npm scope.',
            choices: [...config.scopes],
        })
        .option('w', {
            alias: 'workspace',
            describe: 'Workspace.',
            choices: [...config.workspaces],
        })
        .option('l', {
            alias: 'license',
            describe: 'License.',
            type: 'string',
        })
        .option('a', {
            alias: 'author',
            describe: 'Author.',
            type: 'string',
        })
        .option('r', {
            alias: 'repository',
            describe: 'Repository.',
            type: 'string',
        })
        .option('p', {
            alias: 'private',
            describe: 'Private.',
            type: 'boolean',
        })
        .option('h', {
            alias: 'homepage',
            describe: 'Homepage.',
            type: 'string',
        })
        .option('b', {
            alias: 'bugs',
            describe: 'Bugs.',
            type: 'string',
        })
        .option('m', {
            alias: 'main',
            describe: 'Main.',
            type: 'string',
        })
        .option('v', {
            alias: 'version',
            describe: 'Version.',
            type: 'string',
        })
        .help();

    const name = argv.name || (await prompt(Input, 'Name:')) || undefined;

    const description = argv.description || (await prompt(Input, 'Description:')) || undefined;

    const scope = argv.scope || (await prompt(Select, 'npm scope:', { choices: [...config.scopes] })) || undefined;

    const workspace =
        argv.workspace || (await prompt(Select, 'Workspace:', { choices: [...config.workspaces] })) || undefined;

    const license = argv.license || config.license || (await prompt(Input, 'License:')) || undefined;

    const author = argv.author || config.author || (await prompt(Input, 'Author:')) || undefined;

    const repository = argv.repository || config.repository || (await prompt(Input, 'Repository:')) || undefined;

    const p = argv.p || undefined;

    if (typeof name !== 'string') throw new TypeError('Invalid name.');

    if (!config.scopes.includes(scope)) throw new TypeError('Invalid scope.');
    if (!config.workspaces.includes(workspace)) throw new TypeError('Invalid workspace.');

    const homepage =
        argv.homepage ||
        (config.homepage && config.homepage(name, workspace, scope)) ||
        (await prompt(Input, 'Homepage:')) ||
        undefined;

    const bugs =
        argv.bugs ||
        (config.bugs && config.bugs(name, workspace, scope)) ||
        (await prompt(Input, 'Bugs:')) ||
        undefined;

    const main = argv.main || config.main || (await prompt(Input, 'Main:')) || undefined;

    const version = argv.version || config.version || (await prompt(Input, 'Version:')) || undefined;

    const pkg = await config.package({
        name: `@${scope}/${name}`,
        description,
        license,
        author,
        repository,
        homepage,
        bugs,
        main,
        private: p,
        version,
    });

    const path = resolve(config.context, workspace, name);

    mkdirp(path);
    writeFile(resolve(path, 'package.json'), stringify(pkg, { space: '  ' }));

    for (let entry of await config.finalize(pkg, name, scope, workspace)) {
        entry = await entry;

        if (!entry) continue;

        let run = false;
        let root = false;
        let command = '';
        let args = [];
        let env = {};

        let write = false;
        let file = '';
        let data = '';

        if (Array.isArray(entry)) {
            run = true;
            [command, ...args] = entry;
        }

        if (Array.isArray(entry.run)) {
            run = true;

            [command, ...args] = entry.run;
            root = entry.root;
            env = entry.env;
        }

        if (typeof entry === 'string') {
            run = true;
            command = entry;
        }

        if (typeof entry.file === 'string') {
            write = true;
            ({ file, data } = entry);

            if (typeof data === 'object') data = JSON.stringify(data);
        }

        if (run)
            spawn(command, args, {
                cwd: root ? config.context : path,
                stdio: [0, 1, 2],
                env: {
                    ...process.env,
                    env,
                },
            });

        if (write) writeFile(resolve(path, dirname(file), basename(file)), data);
    }
})().catch(error => {
    console.error(error);

    process.exit(1);
});
