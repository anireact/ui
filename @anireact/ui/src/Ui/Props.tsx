import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { decorate } from './decorate';
import { Prop } from './Prop';

type Table = DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>;

type Children = {
    readonly children?: ReactElement<Prop, typeof Prop> | ReadonlyArray<ReactElement<Prop, typeof Prop>>;
};

export type Props = Pick<Table, Exclude<keyof Table, 'children'>> & Children;

export const Props = decorate<Props, HTMLTableElement>(
    { name: 'Props', consumesLevel: true, providesLevel: true },
    (props, { ref, className, theme }) => {
        const { plain } = theme;
        const { fg } = plain;

        return (
            <>
                <table {...props} ref={ref} className={className}>
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
);
