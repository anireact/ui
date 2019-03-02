import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { decorate } from './decorate';
import { PropK } from './PropK';
import { PropV } from './PropV';

type Row = DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

type Children = {
    readonly children?: [ReactElement<PropK, typeof PropK>, ReactElement<PropV, typeof PropV>];
};

export type Prop = Pick<Row, Exclude<keyof Row, 'children'>> & Children;

export const Prop = decorate<Prop, HTMLTableRowElement>({ name: 'Prop' }, (props, { ref, className, theme }) => {
    const { even, plain } = theme;
    const { fg, hover } = plain;

    return (
        <>
            <tr {...props} ref={ref} className={className} />
            <style jsx>{/* language=CSS */ `
                tr {
                    color: ${fg};
                }

                tr:nth-child(even) {
                    background-color: ${even};
                }

                tr:hover {
                    background-color: ${hover};
                }
            `}</style>
        </>
    );
});
