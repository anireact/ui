import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { decorate } from './decorate';

export type P = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export const P = decorate<P, HTMLParagraphElement>(
    { name: 'P', providesLevel: true, consumesLevel: true },
    (props, { ref, className, theme }) => {
        const { text, textHeight, plain } = theme;
        const { fg } = plain;

        return (
            <>
                <p {...props} ref={ref} className={className} />
                <style jsx>{/* language=CSS */ `
                    p {
                        ${text};

                        margin: ${textHeight} 0;

                        color: ${fg};
                    }

                    p:first-of-type {
                        margin-top: 0;
                    }

                    p:last-of-type {
                        margin-bottom: 0;
                    }
                `}</style>
            </>
        );
    },
);
