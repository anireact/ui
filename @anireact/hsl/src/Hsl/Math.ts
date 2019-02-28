import { fold, map, min, Numbers, PI, Vector6 } from '@anireact/prelude';
import { C, H, L, Y } from './Components';
import { epsilon, kappa, m, refY } from './Constants';
import { lengthOfRayUntilIntersect, Line } from './Geometry';

export type LineX6 = Vector6<Line>;

export const getBounds = (l: number) => {
    const result: Line[] = [];
    const sub1 = (l + 16) ** 3 / 1560896;
    const sub2 = sub1 > epsilon ? sub1 : l / kappa;

    map(m, ([m1, m2, m3]) => {
        for (let i = 0; i < 2; i++) {
            const top1 = (284517 * m1 - 94839 * m3) * sub2;
            const top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * l * sub2 - 769860 * i * l;
            const bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * i;

            result.push([top1 / bottom, top2 / bottom] as Line);
        }
    });

    return result as LineX6;
};

export const maxChromaForLh = (l: L, h: H) => {
    const hrad = (h / 360) * PI * 2;

    return fold(
        getBounds(l),
        (l, bound) => {
            const length = lengthOfRayUntilIntersect(hrad, bound);

            return (length >= 0 ? min(l, length) : l) as C;
        },
        Infinity as C,
    );
};

export const dotProduct = (a: Numbers, b: Numbers) => fold(a, (sum, a, i) => sum + a * b[i], 0);
export const fromLinear = (c: number) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** 0.416666666666666685 - 0.055);
export const toLinear = (c: number) => (c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92);
export const yToL = (y: Y) => (y <= epsilon ? (y / refY) * kappa : 116 * (y / refY) ** 0.333333333333333315 - 16) as L;
export const lToY = (l: L) => (l <= 8 ? (refY * l) / kappa : refY * ((l + 16) / 116) ** 3) as Y;
