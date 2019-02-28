import React, { createContext, DetailedHTMLProps, HTMLAttributes, useContext } from 'react';
import { decorate } from './decorate';

export const SectionContext = createContext(0);

SectionContext.displayName = 'Section';

export type Section = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

// TODO: ARIA.
// TODO: Section links.

export const Section = decorate<Section, HTMLElement>(
    { name: 'Section', providesLevel: true, consumesLevel: true },
    (props, { ref, className, theme }) => {
        const { text, plain } = theme;
        const { fg } = plain;

        const level = useContext(SectionContext);

        return (
            <SectionContext.Provider value={level + 1}>
                <section {...props} ref={ref} className={className} />
                <style jsx>{/* language=CSS */ `
                    section {
                        ${text};

                        color: ${fg};
                    }
                `}</style>
            </SectionContext.Provider>
        );
    },
);
