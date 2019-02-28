import { abs } from '@anireact/prelude';
import { A, Luv, Luva, U, V, X, Xyz, Xyza, Y, Z } from './Components';
import { refU, refV } from './Constants';
import { lToY, yToL } from './Math';

export const luvToXyz = ([l, u, v, a = 1 as A]: Luv): Xyza => {
    if (abs(l) < 0.00000001) return [0, 0, 0, a] as Xyza;

    const varU = u / (13 * l) + refU;
    const varV = v / (13 * l) + refV;
    const y = lToY(l) as Y;
    const x = (-(9 * y * varU) / ((varU - 4) * varV - varU * varV)) as X;
    const z = ((9 * y - 15 * varV * y - varV * x) / (3 * varV)) as Z;

    return [x, y, z, a];
};

export const xyzToLuv = ([x, y, z, a = 1 as A]: Xyz): Luva => {
    const divider = x + 15 * y + 3 * z;
    const varU = (divider !== 0 ? (4 * x) / divider : NaN) as U;
    const varV = (divider !== 0 ? (9 * y) / divider : NaN) as V;
    const l = yToL(y);

    if (abs(l) < 0.00000001) return [0, 0, 0, a] as Luva;

    const u = (13 * l * (varU - refU)) as U;
    const v = (13 * l * (varV - refV)) as V;

    return [l, u, v, a];
};
