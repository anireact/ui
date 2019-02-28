import { cos, PI, sin } from '@anireact/prelude';
import { A, H, Lch, Lcha, Luv, Luva, U, V } from './Components';
import { angleFromOrigin, distanceFromOrigin, Point2D } from './Geometry';

export const lchToLuv = ([l, c, h, a = 1 as A]: Lch): Luva => {
    const hrad = (h / 360.0) * 2 * PI;
    const u = (cos(hrad) * c) as U;
    const v = (sin(hrad) * c) as V;

    return [l, u, v, a];
};

export const luvToLch = ([l, u, v, a = 1 as A]: Luv): Lcha => {
    const uv = ([u, v] as unknown) as Point2D;

    const c = distanceFromOrigin(uv);

    let h: H; // eslint-disable-line init-declarations

    if (c < 0.00000001) {
        h = 0 as H;
    } else {
        const hrad = angleFromOrigin(uv);

        h = ((hrad * 180) / PI) as H;

        if (h < 0) {
            h = (360 + h) as H;
        }
    }

    return [l, c, h, a];
};
