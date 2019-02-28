import { map, px, Vector10 } from '@anireact/prelude';
import { Size } from './MediaState';
import { RawMedia } from './RawMedia';

export type Bounds = Vector10<boolean>;

export const watchBounds = (init: RawMedia, setSize: (size: Size) => unknown): Bounds => {
    return map(
        [
            createBound(init.unsupported, init.nano - 1, setSize),
            createBound(init.nano, init.micro - 1, setSize),
            createBound(init.micro, init.mini - 1, setSize),
            createBound(init.mini, init.small - 1, setSize),
            createBound(init.small, init.medium - 1, setSize),
            createBound(init.medium, init.large - 1, setSize),
            createBound(init.large, init.lunatic - 1, setSize),
            createBound(init.lunatic, init.extra - 1, setSize),
            createBound(init.extra, init.phantasm - 1, setSize),
            createBound(init.phantasm, Number.MAX_SAFE_INTEGER, setSize),
        ],
        (f, size) => {
            return f(size as Size);
        },
    ) as Bounds;
};

const createBound = (l: number, u: number, setSize: (size: Size) => unknown) => (s: Size) => {
    const mql = matchMedia(`(min-width: ${px(l)}) and (max-width: ${px(u)})`);

    mql.addEventListener('change', () => mql.matches && setSize(s));

    return mql.matches;
};
