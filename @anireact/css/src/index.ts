import { Color } from '@anireact/hsl';
import { entriesO, isNone, map, Vector20 } from '@anireact/prelude';

export interface Pos {
    readonly left?: string;
    readonly top?: string;
    readonly width?: string;
    readonly height?: string;
    readonly right?: string;
    readonly bottom?: string;
}

let i = 0;

export const px = (x: number) => `${x}px`;
export const cssid = (name?: string) => `--${isNone(name) ? (i++).toString(36) : `${(i++).toString(36)}--${name}`}`;
export const classes = (...classes: (string | null | undefined | void)[]) => classes.filter(Boolean).join(' ');
export const colors = (bg: Color, fg: Color) => `background-color:${bg};color:${fg}`;
export const pos = (pos: Pos) => map(entriesO(pos), ([k, v]) => `${k}:${v}`).join(';');

const filtersCache = new Map<string, string>();

const filtersRoot = (() => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.setAttribute('aria-hidden', 'true');
    document.body.appendChild(svg);

    return svg;
})();

export const filter = (source: string) => {
    if (filtersCache.has(source)) return filtersCache.get(source)!;

    const id = cssid('filter');
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');

    filter.setAttribute('id', id);
    filter.setAttribute('color-interpolation-filters', 'sRGB');
    filter.innerHTML = source;

    filtersRoot.appendChild(filter);

    const url = `url('#${id}')`;

    filtersCache.set(source, url);

    return url;
};

export const colorMatrix = (...m: Vector20<number>) =>
    filter(`<feColorMatrix
        type='matrix'
        values='${map(m, x => x.toFixed(8)).join(' ')}'
    />`);
