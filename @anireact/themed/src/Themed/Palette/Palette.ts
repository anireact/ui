import { Color } from '@anireact/hsl';
import { LevelPalette } from './LevelPalette';

export interface Palette {
    readonly view: Color;

    readonly base: LevelPalette;
    readonly disabled: LevelPalette;

    readonly primary: LevelPalette;
    readonly secondary: LevelPalette;
    readonly info: LevelPalette;
    readonly ok: LevelPalette;
    readonly warning: LevelPalette;
    readonly error: LevelPalette;
}
