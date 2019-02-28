import { isList, map, valuesO } from '@anireact/prelude';
import { RawTheme } from '../Theme/RawTheme';
import { black } from './black';
import { RawLib } from './RawLib';

export const createLib = (raw: RawLib): ReadonlyMap<string, RawTheme> => {
    return new Map(
        map(isList(raw) ? raw : valuesO(raw), init => {
            return [init.id || 'black', { ...black, ...init }] as [string, RawTheme];
        }),
    );
};
