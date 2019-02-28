import { hsl } from '@anireact/hsl';
import { Vector3 } from '@anireact/prelude';
import { getSla } from './getSla';
import { LevelPalette } from './LevelPalette';
import { RawPalette } from './RawPalette';

export const createLevelPalette = (
    { plain, ...raw }: RawPalette,
    focus: boolean,
    h: number,
    sla = [] as Partial<Vector3<number>>,
): LevelPalette => {
    const focusSla: Vector3<number> = focus ? raw.focus : [raw.focus[0], raw.focus[1], 0];

    return {
        backdrop: hsl(h, ...getSla(raw.backdrop, sla)),
        focus: hsl(h, ...getSla(focusSla, sla)),

        active: hsl(h, ...getSla(raw.active, sla)),
        hover: hsl(h, ...getSla(raw.hover, sla)),
        even: hsl(h, ...getSla(raw.even, sla)),
        glow: hsl(h, ...getSla(raw.glow, sla)),
        bg: hsl(h, ...getSla(raw.bg, sla)),
        fg: hsl(h, ...getSla(raw.fg, sla)),

        plain: {
            active: hsl(h, ...getSla(plain.active, sla)),
            hover: hsl(h, ...getSla(plain.hover, sla)),
            even: hsl(h, ...getSla(plain.even, sla)),
            glow: hsl(h, ...getSla(plain.glow, sla)),
            bg: hsl(h, ...getSla(plain.bg, sla)),
            fg: hsl(h, ...getSla(plain.fg, sla)),
        },
    };
};
