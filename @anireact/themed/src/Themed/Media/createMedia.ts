import { Media } from './Media';
import { MediaState } from './MediaState';

export const createMedia = ({ hasKeyboard, hasHover, hasTouch, isPrinting, size }: MediaState): Media => {
    return {
        hasKeyboard,
        hasHover,
        hasTouch,
        isPrinting,
        size,
    };
};
