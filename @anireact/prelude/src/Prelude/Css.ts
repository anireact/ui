import { map } from './List';
import { isNone } from './Pred';
import { uuidv4 } from './Uuid';
import { Vector20 } from './Vector';

export const px = (x: number) => `${x}px`;

export const cssvar = (name?: string) => `--${isNone(name) ? uuidv4() : `${uuidv4()}-${name}`}`;

export const colorMatrix = (...m: Vector20<number>) => [pu, ps, map(m, x => x.toFixed(8)).join(' '), ss, su].join('');

const pu = `url("data:image/svg+xml;utf8,`;
const ps = `<svg xmlns='http://www.w3.org/2000/svg'><filter id='matrix'><feColorMatrix type='matrix' values='`;
const ss = `' /></filter></svg>`;
const su = `#matrix")`;

export const classes = (...classes: (string | null | undefined | void)[]) => classes.filter(Boolean).join(' ');
