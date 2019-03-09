import { Color } from '@anireact/hsl';
import { LevelPalette } from './LevelPalette';

export interface Palette {
    readonly view: Color;

    readonly normal: LevelPalette;

    readonly info: LevelPalette;
    readonly ok: LevelPalette;
    readonly warning: LevelPalette;
    readonly error: LevelPalette;
}
