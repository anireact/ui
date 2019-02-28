import { RawTheme } from '../Theme/RawTheme';
import { MediaState, Size } from './MediaState';
import { watchBounds } from './watchBounds';
import { hoverQuery } from './watchHover';
import { printQuery } from './watchPrint';
import { touchQuery } from './watchTouch';

export const getInitialMedia = (raw: RawTheme, setSize: (size: Size) => unknown): MediaState => {
    return {
        hasTouch: matchMedia(touchQuery).matches,
        hasHover: matchMedia(hoverQuery).matches,
        hasKeyboard: true,
        isPrinting: matchMedia(printQuery).matches,
        size: watchBounds(raw, setSize).indexOf(true) as Size,
    };
};
