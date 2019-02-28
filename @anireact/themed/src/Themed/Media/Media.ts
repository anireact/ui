import { Size } from './MediaState';

export interface Media {
    readonly hasKeyboard: boolean;
    readonly hasHover: boolean;
    readonly hasTouch: boolean;
    readonly isPrinting: boolean;
    readonly size: Size;
}
