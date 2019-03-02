import { clamp, map, round, Vector4 } from '@anireact/prelude';
import { A, Rgb } from './Components';

export const getIntegerRgba = ([r, g, b, a = 1 as A]: Rgb): Vector4<number> => {
    return map([r, g, b, a], x => round(clamp(0, x, 1) * 255)) as Vector4<number>;
};
