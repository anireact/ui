import { RawTheme } from '@anireact/themed';

const emoji = [`'Twemoji'`, `'Apple Color Emoji'`, `'Segoe UI Emoji'`, `'Segoe UI Symbol'`, `'Noto Color Emoji'`];

const gothic = [
    `'Noto Sans CJK JP'`,
    `'Noto Sans JP'`,
    `'ヒラギノ角ゴ ProN'`,
    `'Hiragino Kaku Gothic ProN'`,
    `'游ゴシック'`,
    `'游ゴシック体'`,
    `'YuGothic'`,
    `'Yu Gothic'`,
    `'Source Han Sans'`,
    `IPAGothic`,
    `IPAPGothic`,
    `'メイリオ'`,
    `'Meiryo'`,
    `'ＭＳ ゴシック'`,
    `'MS Gothic'`,
    `'HiraKakuProN-W3'`,
    `'TakaoExゴシック'`,
    `'TakaoExGothic'`,
    `'MotoyaLCedar'`,
    `'Droid Sans Japanese'`,
];

const mincho = [
    `'Noto Serif CJK JP'`,
    `'Noto Serif JP'`,
    `'ヒラギノ明朝 ProN'`,
    `'Hiragino Mincho ProN'`,
    `'游明朝'`,
    `'游明朝体'`,
    `'YuMincho'`,
    `'Yu Mincho'`,
    `'Source Han Serif'`,
    `IPAMincho`,
    `IPAPMincho`,
    `'ＭＳ 明朝'`,
    `'MS Mincho'`,
    `'HiraMinProN-W3'`,
    `'TakaoEx明朝'`,
    `'TakaoExMincho'`,
    ...gothic,
];

const uiFamily = [
    `'Noto Sans'`,
    `'Open Sans'`,
    `'Roboto'`,

    `'San Francisco'`,
    `'Helvetica Neue'`,
    `'Helvetica'`,
    `'Segoe UI'`,

    `'Liberation Sans'`,
    `'DejaVu Sans'`,
    `'Bitstream Vera Sans'`,
    `'PT Sans'`,
    `'Lucida Grande'`,
    `'Lucida Sans Unicode'`,
    `'Lucida Sans'`,
    `'Tahoma'`,
    `'Ubuntu'`,
    `'Droid Sans'`,

    ...gothic,
    `system-ui`,
    `sans-serif`,
    ...emoji,
].join(', ');

const textFamily = [
    `'Noto Serif'`,

    `'Palatino Linotype'`,
    `'Palatino'`,
    `'Palladio'`,
    `'URW Palladio L'`,
    `'Book Antiqua'`,
    `'Baskerville'`,
    `'Bookman Old Style'`,
    `'Bitstream Charter'`,
    `'Nimbus Roman No9 L'`,
    `'Garamond'`,
    `'Apple Garamond'`,
    `'New Century Schoolbook'`,
    `'Century Schoolbook'`,
    `'Century Schoolbook L'`,

    `'Constantia'`,
    `'Cambria'`,
    `'Liberation Serif'`,
    `'DejaVu Serif'`,
    `'Bitstream Vera Serif'`,
    `'PT Serif'`,
    `'Lucida Bright'`,
    `'Lucida Serif'`,
    `'Georgia'`,

    ...mincho,
    `serif`,
    ...emoji,
].join(', ');

const codeFamily = [
    `'Fira Code'`,
    `'Iosevka'`,
    `'IosevkaCC'`,
    `'Iosevka CC'`,
    `'IosevkaTerm'`,
    `'Iosevka Term'`,
    `'IosevkaType'`,
    `'Iosevka Type'`,
    `'IosevkaCC Slab'`,
    `'Iosevka CC Slab'`,
    `'IosevkaTerm Slab'`,
    `'Iosevka Term Slab'`,
    `'IosevkaType Slab'`,
    `'Iosevka Type Slab'`,

    `'Hack'`,
    `'Source Code Pro'`,
    `'San Francisco Mono'`,
    `'Menlo'`,
    `'Monaco'`,
    `'Consolas'`,
    `'Anonymous Pro'`,

    `'Liberation Mono'`,
    `'DejaVu Sans Mono'`,
    `'Bitstream Vera Sans Mono'`,
    `'PT Mono'`,
    `'Ubuntu Mono'`,

    `'Lucida Console'`,
    `'Droid Sans Mono'`,
    `'Lucida Sans Typewriter'`,

    `'Sarasa Mono J'`,
    `'Sarasa Mono T J'`,
    `'Sarasa Mono'`,
    `'Sarasa Term J'`,
    `'Sarasa Term'`,
    `'Sarasa UI J'`,
    `'Sarasa UI'`,
    `'Sarasa Gothic J'`,
    `'Sarasa Gothic'`,

    `'Courier New'`,

    ...gothic,
    'monospace',
    ...emoji,
].join(', ');

export const black: Partial<RawTheme> = {
    uiFamily,
    textFamily,
    codeFamily,
};
