import { colors } from '@anireact/css';
import React from 'react';
import { SpanProps, ui } from './ui';

export interface Label extends SpanProps {}

export const Label = ui(({ children, ...rest }: Label, { theme }) => {
    const { ui, plain } = theme;
    const { bg, fg } = plain;

    return (
        <span {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                span {
                    ${ui};
                    ${colors(bg, fg)};
                    user-select: none;
                }
            `}</style>
        </span>
    );
}, 'Label');
