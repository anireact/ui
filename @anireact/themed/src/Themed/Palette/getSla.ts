import { isNone, Vector3 } from '@anireact/prelude';

export const getSla = ([s1, l1, a1]: Vector3<number>, [s2, l2, a2]: Partial<Vector3<number>>): Vector3<number> => {
    return [isNone(s2) ? s1 : s2, isNone(l2) ? l1 : l2, isNone(a2) ? a1 : a2];
};
