import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, TdHTMLAttributes } from 'react';
import { decorate } from './decorate';

export type PropsK = DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

const PropsK = decorate<PropsK, HTMLTableCellElement>({ name: 'Props.K' }, (props, { ref, className, theme }) => {
    const { xs2, xs4, xs5 } = theme;

    return (
        <>
            <td role={'term'} {...props} ref={ref} className={className} />
            <style jsx>{/* language=CSS */ `
                td {
                    padding: ${xs5} ${xs2};
                }

                :global(:first-child) > td {
                    border-top-left-radius: ${xs4};
                }

                :global(:last-child) > td {
                    border-bottom-left-radius: ${xs4};
                }
            `}</style>
        </>
    );
});

export type PropsV = DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

const PropsV = decorate<PropsV, HTMLTableCellElement>({ name: 'Props.V' }, (props, { ref, className, theme }) => {
    const { xs2, xs4, xs5 } = theme;

    return (
        <>
            <td role={'definition'} {...props} ref={ref} className={className} />
            <style jsx>{/* language=CSS */ `
                td {
                    padding: ${xs5} ${xs2};
                }

                :global(:first-child) > td {
                    border-top-right-radius: ${xs4};
                }

                :global(:last-child) > td {
                    border-bottom-right-radius: ${xs4};
                }
            `}</style>
        </>
    );
});

type TableRow = DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

export type PropsItem = Pick<TableRow, Exclude<keyof TableRow, 'children'>> & {
    readonly children?: [ReactElement<PropsK, typeof PropsK>, ReactElement<PropsV, typeof PropsV>];
};

const PropsItem = decorate<PropsItem, HTMLTableRowElement>(
    { name: 'Props.Item' },
    (props, { ref, className, theme }) => {
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
    },
);

type Table = DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export type Props = Pick<Table, Exclude<keyof Table, 'children'>> & {
    readonly children?:
        | ReactElement<PropsItem, typeof PropsItem>
        | ReadonlyArray<ReactElement<PropsItem, typeof PropsItem>>;
};

interface Sub {
    readonly Item: typeof PropsItem;
    readonly K: typeof PropsK;
    readonly V: typeof PropsV;
}

export const Props = decorate<Props, HTMLTableElement, Sub>(
    { name: 'Props' },
    (props, { ref, className, theme }) => {
        const { plain } = theme;
        const { fg } = plain;

        return (
            <>
                <table role={'doc-glossary'} {...props} ref={ref} className={className}>
                    <tbody>{props.children}</tbody>
                </table>
                <style jsx>{/* language=CSS */ `
                    table {
                        border-spacing: 0;

                        color: ${fg};
                    }
                `}</style>
            </>
        );
    },
    { Item: PropsItem, K: PropsK, V: PropsV },
);
