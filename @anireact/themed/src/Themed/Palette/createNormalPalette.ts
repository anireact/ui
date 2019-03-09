import { hsl } from '@anireact/hsl';
import { Vector4 } from '@anireact/prelude';
import { LevelPalette } from './LevelPalette';
import { RawPalette } from './RawPalette';

export const createNormalPalette = ({ normal: { plain, ...normal } }: RawPalette, focus: boolean): LevelPalette => {
    const focusHsla: Vector4<number> = focus ? normal.focus : [normal.focus[0], normal.focus[1], normal.focus[2], 0];

    return {
        backdrop: hsl(...normal.backdrop),
        focus: hsl(...focusHsla),

        active: hsl(...normal.active),
        hover: hsl(...normal.hover),
        even: hsl(...normal.even),
        glow: hsl(...normal.glow),
        bg: hsl(...normal.bg),
        fg: hsl(...normal.fg),

        plain: {
            active: hsl(...plain.active),
            hover: hsl(...plain.hover),
            even: hsl(...plain.even),
            glow: hsl(...plain.glow),
            bg: hsl(...plain.bg),
            fg: hsl(...plain.fg),
        },
    };
};
