import { toList } from './List';

export const keysC = <K>(c: { keys: () => IterableIterator<K> }) => toList(c.keys());
export const entriesC = <K, V>(c: { entries: () => IterableIterator<[K, V]> }) => toList(c.entries());
export const valuesC = <V>(c: { values: () => IterableIterator<V> }) => toList(c.values());
