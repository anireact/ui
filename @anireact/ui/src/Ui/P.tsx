import React from 'react';
import { PProps, ui } from './ui';

export interface P extends PProps {}

export const P = ui(({ children, ...rest }: P, { theme }) => {
    const { text, textHeight, plain } = theme;
    const { fg } = plain;

    return (
        <p {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                p {
                    ${text};

                    margin: ${textHeight} 0;
                    margin-inline-start: 0;
                    margin-inline-end: 0;
                    margin-block-start: ${textHeight};
                    margin-block-end: ${textHeight};

                    color: ${fg};
                }

                p:first-of-type {
                    margin-top: 0;
                    margin-inline-start: 0;
                    margin-inline-end: 0;
                    margin-block-start: 0;
                    margin-block-end: ${textHeight};
                }

                p:last-of-type {
                    margin-bottom: 0;
                    margin-inline-start: 0;
                    margin-inline-end: 0;
                    margin-block-start: ${textHeight};
                    margin-block-end: 0;
                }
            `}</style>
        </p>
    );
}, 'P');

// TODO: Rewrite with `margin-trim`.
