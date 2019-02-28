import { Vector3 } from '@anireact/prelude';
import { MediaState } from '../Media/MediaState';
import { createBasePalette } from './createBasePalette';
import { createLevelPalette } from './createLevelPalette';
import { Palette } from './Palette';
import { RawPalette } from './RawPalette';

export const createPalette = (raw: RawPalette, { hasKeyboard }: MediaState): Palette => {
    const { view, disabled, primary, secondary, info, ok, warning, error } = raw;

    return {
        view,

        base: createBasePalette(raw, hasKeyboard),

        disabled: createLevelPalette(raw, false, 0, [0, ...disabled] as Vector3<number>),

        primary: createLevelPalette(raw, hasKeyboard, primary),
        secondary: createLevelPalette(raw, hasKeyboard, secondary),
        info: createLevelPalette(raw, hasKeyboard, info),
        ok: createLevelPalette(raw, hasKeyboard, ok),
        warning: createLevelPalette(raw, hasKeyboard, warning),
        error: createLevelPalette(raw, hasKeyboard, error),
    };
};
