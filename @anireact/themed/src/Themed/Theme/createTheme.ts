import { createIcons } from '../Icons/createIcons';
import { createPalette } from '../Palette/createPalette';
import { createFonts } from '../Fonts/createFonts';
import { createMedia } from '../Media/createMedia';
import { MediaState } from '../Media/MediaState';
import { createX } from '../X/createX';
import { RawTheme } from './RawTheme';
import { Theme } from './Theme';

export const createTheme = ({ id, name, ...init }: RawTheme, media: MediaState): Theme => {
    return {
        id,
        name,
        ...createX(init, media),
        ...createFonts(init, media),
        ...createPalette(init, media),
        ...createMedia(media),
        ...createIcons(init),
    };
};
