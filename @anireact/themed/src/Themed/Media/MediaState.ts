export interface MediaState {
    readonly hasKeyboard: boolean;
    readonly hasHover: boolean;
    readonly hasTouch: boolean;
    readonly isPrinting: boolean;
    readonly size: Size;
}

export type Size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
