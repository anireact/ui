import React from 'react';
import { LegendProps, ui } from './ui';

export interface Legend extends LegendProps {}

export const Legend = ui(({ children, ...rest }: Legend, { theme }) => {
    const { ui, plain } = theme;
    const { fg } = plain;

    return (
        <legend {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                legend {
                    ${ui};

                    padding: 0 0.5ch;
                    padding-inline-start: 0.5ch;
                    padding-inline-end: 0.5ch;
                    padding-block-start: 0;
                    padding-block-end: 0;

                    color: ${fg};
                    user-select: none;
                }
            `}</style>
        </legend>
    );
}, 'Legend');
