import { map, px, Vector6 } from '@anireact/prelude';
import { sizes } from '../Constants/Constants';
import { MediaState } from '../Media/MediaState';
import { Fonts, Heading } from './Fonts';
import { RawFonts } from './RawFonts';

type UiHeight =
    | 'uiHeightUnsupported'
    | 'uiHeightNano'
    | 'uiHeightMicro'
    | 'uiHeightMini'
    | 'uiHeightSmall'
    | 'uiHeightMedium'
    | 'uiHeightLarge'
    | 'uiHeightLunatic'
    | 'uiHeightExtra'
    | 'uiHeightPhantasm';

type TextHeight =
    | 'textHeightUnsupported'
    | 'textHeightNano'
    | 'textHeightMicro'
    | 'textHeightMini'
    | 'textHeightSmall'
    | 'textHeightMedium'
    | 'textHeightLarge'
    | 'textHeightLunatic'
    | 'textHeightExtra'
    | 'textHeightPhantasm';

export const createFonts = (raw: RawFonts, media: MediaState): Fonts => {
    const { uiWeight, uiFamily, textWeight, textFamily, codeWeight, codeFamily } = raw;

    const size = sizes[media.size];

    const ui = raw[`uiHeight${size}` as UiHeight];

    const text = raw[`textHeight${size}` as TextHeight];

    const [uiSize, uiSizeL1, uiSizeL2, uiHeight, uiHeightL1, uiHeightL2] = fontSizes(ui);
    const [textSize, textSizeL1, textSizeL2, textHeight, textHeightL1, textHeightL2] = fontSizes(text);

    return {
        ...{ uiWeight, uiFamily, uiSize, uiSizeL1, uiSizeL2, uiHeight, uiHeightL1, uiHeightL2 },
        ui: fontMixin(uiFamily, uiWeight, uiHeight, uiSize),

        ...{ textWeight, textFamily, textSize, textSizeL1, textSizeL2, textHeight, textHeightL1, textHeightL2 },
        text: fontMixin(textFamily, textWeight, textHeight, textSize),

        ...{ codeWeight, codeFamily },
        code: fontMixin(codeFamily, codeWeight),

        h: headings(text, text * 0.6),
    };
};

const fontSizes = (init: number): ReadonlyArray<string> => {
    return map([init * 0.6, init * 0.9, init * 1.2, init, init * (1 + 1 / 3), init * 2], px);
};

const fontMixin = (family: string, weight: string, height?: string, size?: string) => {
    const mixin = [`font-family:${family}`, `font-weight:${weight}`];

    if (height) mixin.push(`line-height:${height}`);
    if (size) mixin.push(`font-size:${size}`);

    return mixin.join(';');
};

const headings = (h: number, s: number): Vector6<Heading> => {
    const bt = h * 0.5;
    const t = h;
    const b = h * (1 / 3);
    const ds = s * (11 / 9);
    const dh = h;

    return map([1, 2, 3, 4, 5, 6], n => {
        const f = (n - 1) / 6;

        const size = px(s + (ds - f * ds));
        const height = px(h + (dh - f * dh));
        const top = px(bt + (t - f * t));
        const bottom = px(b - f * b);

        return {
            size,
            height,
            top,
            bottom,
            mixin: [`margin:${top} 0 ${bottom}`, `line-height:${height}`, `font-size:${size}`].join(';'),
        };
    }) as Vector6<Heading>;
};
