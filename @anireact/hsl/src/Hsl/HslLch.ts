import { A, C, Hsl, Hsla, Lch, Lcha, S } from './Components';
import { maxChromaForLh } from './Math';

export const hslToLch = ([h, s, l, a = 1 as A]: Hsl): Lcha => {
    if (l > 99.9999999) return [100, 0, h, a] as Lcha;
    if (l < 0.00000001) return [0, 0, h, a] as Lcha;

    const c = ((maxChromaForLh(l, h) / 100) * s) as C;

    return [l, c, h, a];
};

export const lchToHsl = ([l, c, h, a = 1 as A]: Lch): Hsla => {
    if (l > 99.9999999) return [h, 0, 100, a] as Hsla;
    if (l < 0.00000001) return [h, 0, 0, a] as Hsla;

    const s = ((c / maxChromaForLh(l, h)) * 100) as S;

    return [h, s, l, a];
};
