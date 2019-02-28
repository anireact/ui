import { F2, F3 } from './Function';
import { Maybe } from './Maybe';

export type NonEmpty<A> = [A, ...A[]];

export const concat = <A>(...a: Iterable<A>[]) => fold<Iterable<A>, ReadonlyArray<A>>(a, (z, a) => [...z, ...a], []);
export const prepend = <A>(a: A, b: Iterable<A>): ReadonlyArray<A> => [a, ...b];
export const append = <A>(a: Iterable<A>, b: A): ReadonlyArray<A> => [...a, b];
export const uniq = <A>(a: Iterable<A>): ReadonlyArray<A> => toList(new Set(a));
export const toList = <A>(a: Iterable<A>): ReadonlyArray<A> => [...a];
export const fold = <A, B>(a: Iterable<A>, f: F3<B, A, number, B>, b: B): B => toList(a).reduce(f, b);
export const foldR = <A, B>(a: Iterable<A>, f: F3<B, A, number, B>, b: B): B => toList(a).reduceRight(f, b);
export const every = <A>(a: Iterable<A>, f: F2<A, number, boolean>): boolean => toList(a).every(f);
export const some = <A>(a: Iterable<A>, f: F2<A, number, boolean>): boolean => toList(a).some(f);
export const size = (a: { length: number } | { size: number }) => ('length' in a ? a.length : a.size);
export const map = <A, B>(a: Iterable<A>, f: F2<A, number, B>): ReadonlyArray<B> => toList(a).map(f);
export const fst = <A>([a]: [A, ...any[]]): A => a;
export const snd = <A>([, a]: [any, A, ...any[]]): A => a;
export const includes = <A>(a: Iterable<A>, b: A) => toList(a).includes(b);
export const head = <A>(a: NonEmpty<A>) => fst(a);
export const tail = <A>([, ...a]: Iterable<A>) => a;
export const last = <A>(a: NonEmpty<A>) => a[size(a) - 1];
export const init = <A>(a: Iterable<A>) => toList(a).slice(0, -1);

export const maybeHead = <A>(a: Iterable<A>) => {
    const as = toList(a);

    return (size(as) === 0 ? 0 : [as[0]]) as Maybe<A>;
};

export const maybeLast = <A>(a: Iterable<A>) => {
    const as = toList(a);

    return size(as) === 0 ? 0 : [as[size(as) - 1]];
};

export const at = <A>(a: Iterable<A>, i: number) => {
    const as = toList(a);

    return (i < size(as) && i >= 0 && [as[i]]) as Maybe<A>;
};
