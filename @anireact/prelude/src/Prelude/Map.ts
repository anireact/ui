import { Maybe } from './Maybe';

export const getM = <K, V>(m: { get(k: K): V | undefined; has(k: K): boolean }, k: K): Maybe<V> => {
    return m.has(k) && [m.get(k)!];
};
