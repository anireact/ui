import { fold } from './List';

type MathF1 = {
    (x: number): number;
    (x: bigint): bigint;
};

type MathF3 = {
    (x: number, y: number, z: number): number;
    (x: bigint, y: bigint, z: bigint): bigint;
};

type MathV1 = {
    (x: number, ...xs: number[]): number;
    (x: bigint, ...xs: bigint[]): bigint;
};

export type Numbers = ReadonlyArray<number>;

export const sgn = (x: number | bigint) => (x > 0 ? 1 : x < 0 ? -1 : 0);
export const abs: MathF1 = (x: any) => (x >= 0 ? x : -x) as any;

export const inc: MathF1 = (x: any) => ++x as any; // eslint-disable-line no-param-reassign
export const dec: MathF1 = (x: any) => --x as any; // eslint-disable-line no-param-reassign

export const max: MathV1 = (...xs: any[]) => fold(xs, (max, x) => (x > max ? x : max), -Infinity as any);
export const min: MathV1 = (...xs: any[]) => fold(xs, (min, x) => (x < min ? x : min), Infinity as any);
export const sum: MathV1 = (x: any, ...xs: any[]) => fold(xs, (sum, x) => sum + x, x);
export const prod: MathV1 = (x: any, ...xs: any[]) => fold(xs, (sum, x) => sum * x, x);

export const clamp: MathF3 = (lower: any, x: any, upper: any) => max(lower, min(x, upper)) as any;

export const {
    sin,
    cos,
    tan,

    asin,
    acos,
    atan,

    sinh,
    cosh,
    tanh,

    asinh,
    acosh,
    atanh,

    atan2,

    ceil,
    floor,
    round,
    trunc,
    fround,
    imul,
    clz32,

    sqrt,
    cbrt,
    hypot,

    exp,
    expm1,

    log,
    log1p,
    log2,
    log10,

    random,

    E,
    PI,
    SQRT1_2,
    SQRT2,
    LN2,
    LN10,
    LOG2E,
    LOG10E,
} = Math;
