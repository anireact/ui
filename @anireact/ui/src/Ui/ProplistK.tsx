import React from 'react';
import { dataHover, TdProps, ui } from './ui';

export interface ProplistK extends TdProps {}

export const ProplistK = ui(({ children, ...rest }: ProplistK, { theme }) => {
    const { xs2, xs4, xs5 } = theme;
    const { even, plain } = theme;
    const { hover } = plain;

    return (
        <td {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                td {
                    padding: ${xs5} ${xs2};
                    padding-inline-start: ${xs2};
                    padding-inline-end: ${xs2};
                    padding-block-start: ${xs5};
                    padding-block-end: ${xs5};
                }

                :global(:first-child) > td {
                    border-top-left-radius: ${xs4};
                    border-start-start-radius: ${xs4};
                    border-start-end-radius: 0;
                    border-end-start-radius: 0;
                    border-end-end-radius: 0;
                }

                :global(:last-child) > td {
                    border-bottom-left-radius: ${xs4};
                    border-start-start-radius: 0;
                    border-start-end-radius: ${xs4};
                    border-end-start-radius: 0;
                    border-end-end-radius: 0;
                }

                :global(:nth-child(even)) > td {
                    background-color: ${even};
                }

                :global([${dataHover}]) > td {
                    background-color: ${hover};
                }
            `}</style>
        </td>
    );
}, 'ProplistK');
