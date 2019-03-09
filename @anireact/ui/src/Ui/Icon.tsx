import { px, colorMatrix } from '@anireact/css';
import { bLuma, Color, gLuma, rLuma } from '@anireact/hsl';
import { IconName, IconSize } from '@anireact/icons';
import React from 'react';
import css from 'styled-jsx/css';
import { ImgProps, ui } from './ui';

export interface Icon extends ImgProps {
    readonly name: IconName;
    readonly size?: IconSize;
    readonly tintColor?: Color;
    readonly tintStyle?: 'fill' | 'white' | 'black';
}

export const Icon = ui(({ name, tintColor, tintStyle, size = 16, ...rest }: Icon, { theme }) => {
    const { iconsBase, iconsTheme } = theme;
    const label = `icon: ${name}`;

    return (
        <>
            <img
                alt={label}
                aria-label={label}
                role={'presentation'}
                {...rest}
                src={`${iconsBase}/${iconsTheme}/${size}/${name}.svg`}
            />
            <style jsx>{styles}</style>
            <style jsx>{/* language=CSS */ `
                img {
                    width: ${px(size)};
                    height: ${px(size)};
                    filter: ${tint(tintColor, tintStyle)};
                }
            `}</style>
        </>
    );
}, 'Icon');

const styles = css`
    img {
        user-select: none;
    }
`;

const tint = (tintColor?: Color, tintStyle = 'white' as 'fill' | 'white' | 'black') => {
    if (tintColor) {
        const rgb = tintColor.rgba();
        const [r, g, b] = rgb;

        if (tintStyle === 'fill') {
            // prettier-ignore
            return colorMatrix(
                0, 0, 0, 0, r,
                0, 0, 0, 0, g,
                0, 0, 0, 0, b,
                0, 0, 0, 1, 0,
             // 0, 0, 0, 0, 0,
            );
        }

        if (tintStyle === 'black') {
            // prettier-ignore
            return colorMatrix(
                (1 - r) * rLuma, (1 - r) * gLuma, (1 - r) * bLuma, 0, r,
                (1 - g) * rLuma, (1 - g) * gLuma, (1 - g) * bLuma, 0, g,
                (1 - b) * rLuma, (1 - b) * gLuma, (1 - b) * bLuma, 0, b,
                0,               0,               0,               1, 0,
             // 0,               0,               0,               0, 0,
            );
        }

        // prettier-ignore
        return colorMatrix(
            r * rLuma, r * gLuma, r * bLuma, 0, 0,
            g * rLuma, g * gLuma, g * bLuma, 0, 0,
            b * rLuma, b * gLuma, b * bLuma, 0, 0,
            0,         0,         0,         1, 0,
         // 0,         0,         0,         0, 0,
        );

        // TODO: Black tinting: 0.2126 (1 - f x) + 0.7152 (1 - f x) + 0.0722 (1 - f x) + 0 + f x.
        // TODO: White tinting: 0.2126 f x       + 0.7152 f x       + 0.0722 f x       + 0 + (-f x + x).
    }

    return 'initial';
};
