import { clamp } from '@anireact/prelude';
import React, { DetailedHTMLProps, HTMLAttributes, useContext } from 'react';
import { decorate } from './decorate';
import { SectionContext } from './Section';

export type H = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const H = decorate<H, HTMLHeadingElement>(
    { name: 'H', providesLevel: true, consumesLevel: true },
    (props, { ref, className, theme }) => {
        const { text, h, plain } = theme;
        const { fg } = plain;

        const level = useContext(SectionContext);
        const clamped = clamp(1, level, 6);
        const H: any = `h${clamped}`;

        return (
            <>
                <H {...props} ref={ref} className={className} />
                <style jsx>{/* language=CSS */ `
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        ${text};
                        ${h[clamped - 1].mixin};

                        color: ${fg};
                    }
                `}</style>
            </>
        );
    },
);
