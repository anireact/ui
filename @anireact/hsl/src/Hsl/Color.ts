import { A, H, Hsla, L, S } from './Components';
import { hslToRgb } from './Derived';
import { hslToHex } from './HexHsl';
import { getIntegerRgba } from './getIntegerRgba';

export class Color {
    readonly hsla: Hsla;

    constructor(h: H, s: S, l: L, a = 1 as A) {
        this.hsla = [h, s, l, a];
    }

    h(f: (h: H) => number) {
        const [h, s, l, a] = this.hsla;

        return new Color(f(h) as H, s, l, a);
    }

    s(f: (s: S) => number) {
        const [h, s, l, a] = this.hsla;

        return new Color(h, f(s) as S, l, a);
    }

    l(f: (l: L) => number) {
        const [h, s, l, a] = this.hsla;

        return new Color(h, s, f(l) as L, a);
    }

    a(f: (a: A) => number) {
        const [h, s, l, a] = this.hsla;

        return new Color(h, s, l, f(a) as A);
    }

    rgba() {
        return hslToRgb(this.hsla);
    }

    integerRgba() {
        return getIntegerRgba(this.rgba());
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
