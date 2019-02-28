/*
 eslint
 dot-notation: off,
 */

const {
    statSync: stat,
    readdirSync: readdir,
    realpathSync: realpath,
    writeFileSync: writeFile,
    copyFileSync: copyFile,
} = require('fs');

const { resolve, relative, basename, join } = require('upath');
const { sync: mkdir } = require('mkdirp');

const isdir = name => {
    try {
        return stat(name).isDirectory();
    } catch {
        return false;
    }
};

const trim = name => name.replace(/\.svg$/u, '');

const themes = ['Papirus-Dark', 'Papirus-Light'];
const sizes = ['8x8', '16x16', '22x22', '24x24', '32x32', '48x48', '64x64', 'symbolic'];
const categories = ['emblems', 'actions', 'apps', 'categories', 'devices', 'mimetypes', 'panel', 'places', 'status'];

const base = process.env.PAPIRUS_PATH || '.';
const root = resolve(__dirname, '..');

const icons = {};

for (const theme of themes) {
    for (const size of sizes) {
        for (const category of categories) {
            const dir = resolve(base, theme, size, category);

            if (!isdir(dir)) continue;

            for (const file of readdir(dir)) {
                const path = relative(base, realpath(resolve(dir, file)));
                const canonical = join(theme === 'Papirus-Dark' ? 'dark' : 'light', trim(basename(path)));
                const icon = icons[canonical] || {};

                icon[size] = path;
                icons[canonical] = icon;
            }
        }
    }
}

const types = [
    `export type IconSize = 8 | 16 | 22 | 24 | 32 | 48 | 64;
export type IconTheme = 'dark' | 'light';

export type IconName =`,
];

for (const [canonical, icon] of Object.entries(icons)) {
    icon['8'] =
        icon['8x8'] ||
        icon['16x16'] ||
        icon['22x22'] ||
        icon['24x24'] ||
        icon['32x32'] ||
        icon['48x48'] ||
        icon['64x64'] ||
        icon['symbolic'];

    icon['16'] =
        icon['16x16'] ||
        icon['8x8'] ||
        icon['22x22'] ||
        icon['24x24'] ||
        icon['32x32'] ||
        icon['48x48'] ||
        icon['64x64'] ||
        icon['symbolic'];

    icon['22'] =
        icon['22x22'] ||
        icon['16x16'] ||
        icon['8x8'] ||
        icon['24x24'] ||
        icon['32x32'] ||
        icon['48x48'] ||
        icon['64x64'] ||
        icon['symbolic'];

    icon['24'] =
        icon['24x24'] ||
        icon['22x22'] ||
        icon['16x16'] ||
        icon['8x8'] ||
        icon['32x32'] ||
        icon['48x48'] ||
        icon['64x64'] ||
        icon['symbolic'];

    icon['32'] =
        icon['32x32'] ||
        icon['24x24'] ||
        icon['22x22'] ||
        icon['16x16'] ||
        icon['8x8'] ||
        icon['48x48'] ||
        icon['64x64'] ||
        icon['symbolic'];

    icon['48'] =
        icon['48x48'] ||
        icon['32x32'] ||
        icon['24x24'] ||
        icon['22x22'] ||
        icon['16x16'] ||
        icon['8x8'] ||
        icon['64x64'] ||
        icon['symbolic'];

    icon['64'] =
        icon['64x64'] ||
        icon['48x48'] ||
        icon['32x32'] ||
        icon['24x24'] ||
        icon['22x22'] ||
        icon['16x16'] ||
        icon['8x8'] ||
        icon['symbolic'];

    delete icon['8x8']; // eslint-disable-line fp/no-delete
    delete icon['16x16']; // eslint-disable-line fp/no-delete
    delete icon['22x22']; // eslint-disable-line fp/no-delete
    delete icon['24x24']; // eslint-disable-line fp/no-delete
    delete icon['32x32']; // eslint-disable-line fp/no-delete
    delete icon['48x48']; // eslint-disable-line fp/no-delete
    delete icon['64x64']; // eslint-disable-line fp/no-delete
    delete icon['symbolic']; // eslint-disable-line fp/no-delete

    const [theme, name] = canonical.split('/');

    for (const [size, path] of Object.entries(icon)) {
        mkdir(resolve(root, theme, size));

        copyFile(resolve(base, path), resolve(root, theme, size, `${name}.svg`));
    }

    if (theme === 'dark') types.push(`'${name}'`);
}

const type = types.join('\n    | ');

writeFile(resolve(root, 'src', 'index.ts'), `${type};\n`);
