import React from 'react';
import { DivProps, ui } from './ui';

export interface Application extends DivProps {}

export const Application = ui(({ children, ...rest }: Application, { theme }) => {
    const { x, ui } = theme;

    return (
        <div role={'application'} {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                div {
                    ${ui};
                    padding: ${x};
                }
            `}</style>
        </div>
    );
}, 'Application');
