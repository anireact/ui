import React, { DetailedHTMLProps, TdHTMLAttributes } from 'react';
import { decorate } from './decorate';

export type PropK = DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

export const PropK = decorate<PropK, HTMLTableCellElement>({ name: 'PropK' }, (props, { ref, className, theme }) => {
    const { xs2, xs4, xs5 } = theme;

    return (
        <>
            <td {...props} ref={ref} className={className} />
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
