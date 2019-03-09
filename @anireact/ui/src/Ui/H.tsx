import { clamp } from '@anireact/prelude';
import React, { useContext } from 'react';
import { SectionContext } from './contexts';
import { HProps, ui } from './ui';

export interface H extends HProps {}

export const H = ui(({ children, ...rest }: H, { theme }) => {
    const { text, h, plain } = theme;
    const { fg } = plain;
    const level = useContext(SectionContext);
    const clamped = clamp(1, level, 6);
    const H: any = `h${clamped}`;

    return (
        <H {...rest}>
            {children}
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
        </H>
    );
}, 'H');
