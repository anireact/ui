import { A, H, Hsla, L, S } from './Components';
import { hslToHex } from './HexHsl';

export class Color {
    readonly hsla: Hsla;

    constructor(h: H, s: S, l: L, a = 1 as A) {
        this.hsla = [h, s, l, a];
    }

    dh(h: number) {
        const [h_, s, l, a] = this.hsla;

        return new Color((h_ + h) as H, s, l, a);
    }

    ds(s: number) {
        const [h, s_, l, a] = this.hsla;

        return new Color(h, (s_ + s) as S, l, a);
    }

    dl(l: number) {
        const [h, s, l_, a] = this.hsla;

        return new Color(h, s, (l_ + l) as L, a);
    }

    da(a: number) {
        const [h, s, l, a_] = this.hsla;

        return new Color(h, s, l, (a_ + a) as A);
    }

    h(h: number) {
        const [, s, l, a] = this.hsla;

        return new Color(h as H, s, l, a);
    }

    s(s: number) {
        const [h, , l, a] = this.hsla;

        return new Color(h, s as S, l, a);
    }

    l(l: number) {
        const [h, s, , a] = this.hsla;

        return new Color(h, s, l as L, a);
    }

    a(a: number) {
        const [h, s, l] = this.hsla;

        return new Color(h, s, l, a as A);
    }

    toString() {
        return hslToHex(this.hsla);
    }

    valueOf() {
        return this.toString();
    }

    [Symbol.toPrimitive]() {
        return this.toString();
    }
}
