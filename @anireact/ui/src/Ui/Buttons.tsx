import React from 'react';
import css from 'styled-jsx/css';
import { DivProps, ui } from './ui';

export interface Buttons extends DivProps {
    readonly axis?: 'vertical' | 'horizontal';
}

export const Buttons = ui(({ children, axis, ...props }: Buttons, { theme }) => {
    const { bg } = theme;
    const { xs4 } = theme;

    return (
        <div role={'radiogroup'} {...props}>
            {children}
            <style jsx>{styles}</style>
            <style jsx>{/* language=CSS */ `
                div {
                    flex-direction: ${axis === 'vertical' ? 'column' : 'row'};
                    background-color: ${bg};
                    border-radius: ${xs4};
                }
            `}</style>
        </div>
    );
}, 'Buttons');

const styles = css`
    div {
        display: inline-flex;
        position: relative;
    }
`;
