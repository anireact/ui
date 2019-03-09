import { hsl } from '@anireact/hsl';
import { RawTheme } from '../Theme/RawTheme';

export const black: RawTheme = {
    id: 'black',
    name: 'Black',

    xUnsupported: 16,
    xNano: 16,
    xMicro: 16,
    xMini: 20,
    xSmall: 20,
    xMedium: 20,
    xLarge: 20,
    xLunatic: 20,
    xExtra: 20,
    xPhantasm: 30,

    ixUnsupported: 16,
    ixNano: 16,
    ixMicro: 16,
    ixMini: 20,
    ixSmall: 20,
    ixMedium: 20,
    ixLarge: 20,
    ixLunatic: 20,
    ixExtra: 20,
    ixPhantasm: 30,

    txUnsupported: 24,
    txNano: 24,
    txMicro: 24,
    txMini: 30,
    txSmall: 30,
    txMedium: 30,
    txLarge: 30,
    txLunatic: 30,
    txExtra: 30,
    txPhantasm: 45,

    uiWeight: '400',
    uiFamily: 'system-ui, sans-serif',

    uiHeightUnsupported: 16,
    uiHeightNano: 16,
    uiHeightMicro: 16,
    uiHeightMini: 20,
    uiHeightSmall: 20,
    uiHeightMedium: 20,
    uiHeightLarge: 20,
    uiHeightLunatic: 20,
    uiHeightExtra: 20,
    uiHeightPhantasm: 30,

    textWeight: '400',
    textFamily: 'serif',

    textHeightUnsupported: 24,
    textHeightNano: 24,
    textHeightMicro: 24,
    textHeightMini: 30,
    textHeightSmall: 30,
    textHeightMedium: 30,
    textHeightLarge: 30,
    textHeightLunatic: 30,
    textHeightExtra: 30,
    textHeightPhantasm: 45,

    codeWeight: '400',
    codeFamily: 'monospace',

    view: hsl(0, 0, 0, 1),

    normal: {
        backdrop: [0, 0, 0, 0.5],
        focus: [0, 0, 60, 1],

        active: [0, 0, 0, 1],
        hover: [0, 0, 80, 1],
        even: [0, 0, 100, 0.05],
        glow: [0, 0, 0, 0.25],
        bg: [0, 0, 100, 1],
        fg: [0, 0, 0, 1],

        plain: {
            active: [0, 0, 100, 0.3333],
            hover: [0, 0, 100, 0.25],
            even: [0, 0, 100, 0.1667],
            glow: [0, 0, 100, 0.1],
            bg: [0, 0, 0, 0],
            fg: [0, 0, 100, 1],
        },
    },

    info: 260,
    ok: 140,
    warning: 70,
    error: 10,

    backdrop: [0, 0, 0.5],
    focus: [100, 20, 1],

    active: [100, 0, 1],
    hover: [100, 25, 1],
    even: [0, 100, 0.05],
    glow: [0, 100, 0.25],
    bg: [100, 35, 1],
    fg: [0, 100, 1],

    plain: {
        active: [100, 60, 0.3333],
        hover: [100, 50, 0.25],
        even: [100, 50, 0.1667],
        glow: [100, 25, 1],
        bg: [0, 0, 0],
        fg: [100, 69, 1],
    },

    unsupported: 0,
    nano: 50,
    micro: 200,
    mini: 300,
    small: 400,
    medium: 900,
    large: 1200,
    lunatic: 1600,
    extra: 1900,
    phantasm: 3000,

    iconsBase: '/icons',
    iconsTheme: 'dark',
};
