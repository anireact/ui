import { every, fold, size } from './List';

export type Typecheck<A> = (x: any) => x is A;
export type Typechecks<A> = { [K in keyof A]: Typecheck<A[K]> };

export const isList = (x: any): x is ReadonlyArray<any> => Array.isArray(x);
export const isListOf = <A>(x: any, p: Typecheck<A>): x is ReadonlyArray<A> => isList(x) && every(x, p);

export const isTupleOf = <A extends any[]>(x: any, ...p: Typechecks<A>): x is A =>
    isList(x) && size(x) === size(p) && every(x, (x, i) => p[i](x));

export const isString = (x: any): x is string => typeof x === 'string' || x instanceof String;
export const isNumber = (x: any): x is number => typeof x === 'number' || x instanceof Number;
export const isBigint = (x: any): x is bigint => typeof x === 'bigint' || x instanceof BigInt;
export const isSymbol = (x: any): x is symbol => typeof x === 'symbol' || x instanceof Symbol;
export const isBoolean = (x: any): x is boolean => typeof x === 'boolean' || x instanceof Boolean;
export const isNone = (x: any): x is null | undefined | void => typeof x === 'undefined' || x === null;

export const isObject = (x: any): x is object => typeof x === 'object' && x !== null;
export const isFunction = (x: any): x is Function => typeof x === 'function';
export const isRegexp = (x: any): x is RegExp => x instanceof RegExp;
export const isDate = (x: any): x is Date => x instanceof Date;
export const isPromise = (x: any): x is Promise<any> => x instanceof Promise;

export const isSet = (x: any): x is Set<any> => x instanceof Set;
export const isMap = (x: any): x is Map<any, any> => x instanceof Map;
export const isWeakset = (x: any): x is WeakSet<any> => x instanceof WeakSet;
export const isWeakmap = (x: any): x is WeakMap<any, any> => x instanceof WeakMap;

export type Pred<A> = (a: A) => boolean;

export const not = <A>(p: Pred<A>): Pred<A> => {
    return a => {
        return !p(a);
    };
};

export const or = <A>(...ps: Pred<A>[]): Pred<A> => {
    return a => {
        return fold(
            ps,
            (result, p) => {
                return result || p(a);
            },
            false,
        );
    };
};

export const and = <A>(...ps: Pred<A>[]): Pred<A> => {
    return a => {
        return fold(
            ps,
            (result, p) => {
                return result && p(a);
            },
            true,
        );
    };
};
