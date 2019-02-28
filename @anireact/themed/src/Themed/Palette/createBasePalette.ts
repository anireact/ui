import { hsl } from '@anireact/hsl';
import { Vector4 } from '@anireact/prelude';
import { LevelPalette } from './LevelPalette';
import { RawPalette } from './RawPalette';

export const createBasePalette = ({ base: { plain, ...base } }: RawPalette, focus: boolean): LevelPalette => {
    const focusHsla: Vector4<number> = focus ? base.focus : [base.focus[0], base.focus[1], base.focus[2], 0];

    return {
        backdrop: hsl(...base.backdrop),
        focus: hsl(...focusHsla),

        active: hsl(...base.active),
        hover: hsl(...base.hover),
        even: hsl(...base.even),
        glow: hsl(...base.glow),
        bg: hsl(...base.bg),
        fg: hsl(...base.fg),

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
