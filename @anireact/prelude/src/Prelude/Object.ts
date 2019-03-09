import { fold, map } from './List';
import { Maybe } from './Maybe';

export type Writable<O> = { -readonly [K in keyof O]: O[K] };

export const keysO = <K extends keyof any>(o: { [L in K]?: any }): ReadonlyArray<keyof typeof o> => {
    return (Object.keys(o) as unknown) as ReadonlyArray<keyof typeof o>;
};

export const entriesO = <K extends keyof any, V>(o: { [L in K]?: V }): ReadonlyArray<[keyof typeof o, V]> => {
    return fold(
        keysO(o),
        (entries, key) => {
            return [...entries, [key, o[key]] as [keyof typeof o, V]];
        },
        [] as ReadonlyArray<[keyof typeof o, V]>,
    );
};

export const valuesO = <K extends keyof any, V>(o: { [L in K]?: V }): ReadonlyArray<V> => {
    return map(keysO(o), k => {
        return o[k]!;
    });
};

export const fromEntriesO = <K extends keyof any, V>(entries: Iterable<[K, V]>): { [L in K]: V } => {
    return fold(
        entries,
        (o, [k, v]) => {
            return {
                ...o,
                [k]: v,
            };
        },
        {} as { [L in K]: V },
    );
};

export const getO = <K extends keyof any, V>(o: { [L in K]: V }, k: K): Maybe<V> => {
    return k in o && [o[k]];
};
