import React from 'react';
import { decorate } from './decorate';

export const GlobalStyle = decorate<{}, never>({ name: 'GlobalStyle' }, ({}, { theme }) => {
    const {
        ui,
        view,
        plain: { fg },
    } = theme;

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
                width: 100%;
                height: 100%;
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
});
