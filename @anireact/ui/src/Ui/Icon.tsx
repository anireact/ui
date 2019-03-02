import { bLuma, Color, gLuma, rLuma } from '@anireact/hsl';
import { IconName, IconSize } from '@anireact/icons';
import { colorMatrix, px } from '@anireact/prelude';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { decorate } from './decorate';

export type Icon = DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    readonly name: IconName;
    readonly size?: IconSize;
    readonly tintColor?: Color;
    readonly tintStyle?: 'fill' | 'white' | 'black';
};

export const Icon = decorate<Icon, HTMLImageElement>(
    { name: 'Icon' },
    ({ name, tintColor, tintStyle, size = 16, ...props }, { ref, className, theme }) => {
        const { iconsBase, iconsTheme } = theme;

        return (
            <>
                <img
                    title={`Icon: ${name}`}
                    {...props}
                    ref={ref}
                    className={className}
                    src={`${iconsBase}/${iconsTheme}/${size}/${name}.svg`}
                    alt={`icon (${name})`}
                />
                <style jsx>{/* language=CSS */ `
                    img {
                        vertical-align: ${size === 8 ? px(-1) : size === 16 ? px(-2) : 'middle'};

                        width: ${px(size)};
                        height: ${px(size)};

                        filter: ${tint(tintColor, tintStyle)};
                    }
                `}</style>
            </>
        );
    },
);

const tint = (tintColor?: Color, tintStyle = 'white' as 'fill' | 'white' | 'black') => {
    if (tintColor) {
        const rgbT = tintColor.rgba();
        const [rT, gT, bT] = rgbT;

        if (tintStyle === 'fill') {
            // prettier-ignore
            return colorMatrix(
                0, 0, 0, 0, rT,
                0, 0, 0, 0, gT,
                0, 0, 0, 0, bT,
                0, 0, 0, 1, 0,
            );
        }

        if (tintStyle === 'black') {
            // prettier-ignore
            return colorMatrix(
                (1 - rT) * rLuma, (1 - rT) * gLuma, (1 - rT) * bLuma, 0, rT,
                (1 - gT) * rLuma, (1 - gT) * gLuma, (1 - gT) * bLuma, 0, gT,
                (1 - bT) * rLuma, (1 - bT) * gLuma, (1 - bT) * bLuma, 0, bT,
                0,                0,                0,                1, 0,
            );
        }

        // prettier-ignore
        return colorMatrix(
            rT * rLuma, rT * gLuma, rT * bLuma, 0, 0,
            gT * rLuma, gT * gLuma, gT * bLuma, 0, 0,
            bT * rLuma, bT * gLuma, bT * bLuma, 0, 0,
            0,          0,          0,          1, 0,
        );

        // TODO: Luma-preserving tinting: 0.2126 (1 - f x) + 0.7152 (1 - f x) + 0.0722 (1 - f x) + 0 + f x.
        // TODO: Fill tinting:            0.2126 f x       + 0.7152 f x       + 0.0722 f x       + 0 + (-f x + x).
    }

    return 'initial';
};
