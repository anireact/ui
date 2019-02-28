import { IconName, IconSize } from '@anireact/icons';
import { px } from '@anireact/prelude';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { decorate } from './decorate';

export type Icon = DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    readonly name: IconName;
    readonly size?: IconSize;
};

export const Icon = decorate<Icon, HTMLImageElement>(
    { name: 'Icon' },
    ({ name, size = 16, ...props }, { ref, className, theme }) => {
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
                    }
                `}</style>
            </>
        );
    },
);
