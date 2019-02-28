import { append, size } from './List';

export type F0<Z> = () => Z;
export type F1<A, Z> = (a: A) => Z;
export type F2<A, B, Z> = (a: A, b: B) => Z;
export type F3<A, B, C, Z> = (a: A, b: B, c: C) => Z;
export type F4<A, B, C, D, Z> = (a: A, b: B, c: C, d: D) => Z;
export type F5<A, B, C, D, E, Z> = (a: A, b: B, c: C, d: D, e: E) => Z;
export type F6<A, B, C, D, E, F, Z> = (a: A, b: B, c: C, d: D, e: E, f: F) => Z;
export type F7<A, B, C, D, E, F, G, Z> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Z;
export type F8<A, B, C, D, E, F, G, H, Z> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => Z;
export type F9<A, B, C, D, E, F, G, H, I, Z> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => Z;

export type C0<Z> = () => Z;
export type C1<A, Z> = (a: A) => Z;
export type C2<A, B, Z> = (a: A) => C1<B, Z>;
export type C3<A, B, C, Z> = (a: A) => C2<B, C, Z>;
export type C4<A, B, C, D, Z> = (a: A) => C3<B, C, D, Z>;
export type C5<A, B, C, D, E, Z> = (a: A) => C4<B, C, D, E, Z>;
export type C6<A, B, C, D, E, F, Z> = (a: A) => C5<B, C, D, E, F, Z>;
export type C7<A, B, C, D, E, F, G, Z> = (a: A) => C6<B, C, D, E, F, G, Z>;
export type C8<A, B, C, D, E, F, G, H, Z> = (a: A) => C7<B, C, D, E, F, G, H, Z>;
export type C9<A, B, C, D, E, F, G, H, I, Z> = (a: A) => C8<B, C, D, E, F, G, H, I, Z>;

export interface Curry {
    <A, Z>(f: F1<A, Z>, n?: number): C1<A, Z>;
    <A, B, Z>(f: F2<A, B, Z>, n?: number): C2<A, B, Z>;
    <A, B, C, Z>(f: F3<A, B, C, Z>, n?: number): C3<A, B, C, Z>;
    <A, B, C, D, Z>(f: F4<A, B, C, D, Z>, n?: number): C4<A, B, C, D, Z>;
    <A, B, C, D, E, Z>(f: F5<A, B, C, D, E, Z>, n?: number): C5<A, B, C, D, E, Z>;
    <A, B, C, D, E, F, Z>(f: F6<A, B, C, D, E, F, Z>, n?: number): C6<A, B, C, D, E, F, Z>;
    <A, B, C, D, E, F, G, Z>(f: F7<A, B, C, D, E, F, G, Z>, n?: number): C7<A, B, C, D, E, F, G, Z>;
    <A, B, C, D, E, F, G, H, Z>(f: F8<A, B, C, D, E, F, G, H, Z>, n?: number): C8<A, B, C, D, E, F, G, H, Z>;
    <A, B, C, D, E, F, G, H, I, Z>(f: F9<A, B, C, D, E, F, G, H, I, Z>, n?: number): C9<A, B, C, D, E, F, G, H, I, Z>;
    (f: Function): Function;
}

const curried = (f: any, r: number, p: any) => (x: any) => {
    const a = append(p, x);

    return r === 0 ? f(...a) : curried(f, r - 1, a);
};

export const curry: Curry = (f: Function, n = size(f) - 1) => curried(f, n, []);
export const identity = <A>(a: A) => a;
export const always = <A>(a: A) => () => a;
export const flip = <A, B, C extends [], Z>(f: (a: A, b: B, ...c: C) => Z) => (b: B, a: A, ...c: C) => f(a, b, ...c);
