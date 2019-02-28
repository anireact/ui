import { RawIcons } from '../Icons/RawIcons';
import { RawPalette } from '../Palette/RawPalette';
import { RawFonts } from '../Fonts/RawFonts';
import { RawMedia } from '../Media/RawMedia';
import { RawX } from '../X/RawX';

export interface RawTheme extends RawX, RawFonts, RawPalette, RawMedia, RawIcons {
    readonly id: string;
    readonly name: string;
}
