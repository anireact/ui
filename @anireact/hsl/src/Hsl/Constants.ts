import { Vector3 } from '@anireact/prelude';
import { U, V, Y } from './Components';

export type NumberX3 = Vector3<number>;
export type NumberX3X3 = Vector3<NumberX3>;

export const m: NumberX3X3 = [
    [3.240969941904521, -1.537383177570093, -0.498610760293],
    [-0.96924363628087, 1.87596750150772, 0.041555057407175],
    [0.055630079696993, -0.20397695888897, 1.056971514242878],
];

export const mInv: NumberX3X3 = [
    [0.41239079926595, 0.35758433938387, 0.18048078840183],
    [0.21263900587151, 0.71516867876775, 0.072192315360733],
    [0.019330818715591, 0.11919477979462, 0.95053215224966],
];

export const refY = 1.0 as Y;
export const refU = 0.19783000664283 as U;
export const refV = 0.46831999493879 as V;
export const kappa = 903.2962962;
export const epsilon = 0.0088564516;
