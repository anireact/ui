import { isNone } from './Pred';
import { uuidv4 } from './Uuid';

export const px = (x: number) => `${x}px`;

export const cssvar = (name?: string) => `--${isNone(name) ? uuidv4() : `${uuidv4()}-${name}`}`;
