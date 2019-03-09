import { colors } from '@anireact/css';
import React from 'react';
import { DivProps, ui } from './ui';

export interface Panel extends DivProps {}

export const Panel = ui(({ children, ...rest }: Panel, { theme }) => {
    const { ui, plain } = theme;
    const { bg, fg } = plain;

    return (
        <div {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                div {
                    ${ui};
                    ${colors(bg, fg)};
                }
            `}</style>
        </div>
    );
}, 'Panel');
