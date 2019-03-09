import React from 'react';
import css from 'styled-jsx/css';
import { TableProps, ui } from './ui';

export interface Proplist extends TableProps {}

export const Proplist = ui(({ children, ...rest }: Proplist, { theme }) => {
    const { plain } = theme;
    const { fg } = plain;

    return (
        <table {...rest}>
            <tbody>{children}</tbody>
            <style jsx>{styles}</style>
            <style jsx>{/* language=CSS */ `
                table {
                    color: ${fg};
                }
            `}</style>
        </table>
    );
}, 'Proplist');

const styles = css`
    table {
        border-spacing: 0;
    }
`;
