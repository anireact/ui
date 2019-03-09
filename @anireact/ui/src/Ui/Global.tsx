import React from 'react';
import { DivProps, ui } from './ui';

export interface Global extends DivProps {}

export const Global = ui(({  }: Global, { theme }) => {
    const { ui, view, plain } = theme;
    const { fg } = plain;

    return (
        <style jsx global>{/* language=CSS */ `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                border: none;
            }

            *::selection {
                background-color: ${fg};
                color: ${view};
                text-shadow: initial;
            }

            html,
            body,
            #root {
                display: flex;
                flex-grow: 1;
            }

            #root {
                ${ui};
                overflow: auto;
            }

            body {
                background-color: ${view};
                color: ${fg};
            }
        `}</style>
    );
}, 'Global');
