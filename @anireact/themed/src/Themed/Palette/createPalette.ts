import { MediaState } from '../Media/MediaState';
import { createNormalPalette } from './createNormalPalette';
import { createLevelPalette } from './createLevelPalette';
import { Palette } from './Palette';
import { RawPalette } from './RawPalette';

export const createPalette = (raw: RawPalette, { hasKeyboard }: MediaState): Palette => {
    const { view, info, ok, warning, error } = raw;

    return {
        view,

        normal: createNormalPalette(raw, hasKeyboard),

        info: createLevelPalette(raw, hasKeyboard, info),
        ok: createLevelPalette(raw, hasKeyboard, ok),
        warning: createLevelPalette(raw, hasKeyboard, warning),
        error: createLevelPalette(raw, hasKeyboard, error),
    };
};
