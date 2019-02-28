import { map } from '@anireact/prelude';
import { A, Rgb, Rgba, Xyz, Xyza } from './Components';
import { m, mInv, NumberX3 } from './Constants';
import { dotProduct, fromLinear, toLinear } from './Math';

export const xyzToRgb = ([x, y, z, a = 1 as A]: Xyz): Rgba => {
    return [
        ...map(m, line => {
            return fromLinear(dotProduct(line, [x, y, z]));
        }),
        a,
    ] as Rgba;
};

export const rgbToXyz = ([r, g, b, a = 1 as A]: Rgb): Xyza => {
    const rgbLinear = map([r, g, b], x => toLinear(x)) as NumberX3;

    return [
        ...map(mInv, line => {
            return dotProduct(line, rgbLinear);
        }),
        a,
    ] as Xyza;
};
