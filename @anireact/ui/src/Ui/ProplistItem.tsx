import React from 'react';
import { TrProps, ui } from './ui';

export interface ProplistItem extends TrProps {}

export const ProplistItem = ui(({ children, ...rest }: ProplistItem, { theme }) => {
    const { plain } = theme;
    const { fg } = plain;

    return (
        <tr {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                tr {
                    color: ${fg};
                }
            `}</style>
        </tr>
    );
}, 'ProplistItem');
