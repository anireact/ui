import { map } from './List';
import { isNone } from './Pred';
import { uuidv4 } from './Uuid';
import { Vector20 } from './Vector';

export const px = (x: number) => `${x}px`;

export const cssvar = (name?: string) => `--${isNone(name) ? uuidv4() : `${uuidv4()}-${name}`}`;

export const colorMatrix = (...matrix: Vector20<number>) =>
    `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='matrix'><feColorMatrix type='matrix' values='${map(
        matrix,
        x => x.toFixed(8),
    ).join(' ')}' /></filter></svg>#matrix")`;
