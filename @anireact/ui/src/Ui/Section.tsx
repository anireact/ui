import { classes, cssid } from '@anireact/css';
import { Color } from '@anireact/hsl';
import { isList } from '@anireact/prelude';
import React, { isValidElement, ReactNodeArray, useContext } from 'react';
import { resolve } from 'styled-jsx/css';
import { SectionContext } from './contexts';
import { H } from './H';
import { SectionProps, ui } from './ui';

export interface Section extends SectionProps {}

// TODO: Links to sections.

export const Section = ui(({ children, ...rest }: Section, { theme }) => {
    const { text, plain } = theme;
    const { fg } = plain;
    const level = useContext(SectionContext);
    const { id, tail } = getLabel(isList(children) ? children : [children]);
    const { className, styles } = getStyles(text, fg);

    return (
        <SectionContext.Provider value={level + 1}>
            {React.createElement(
                'section',
                {
                    'aria-level': level,
                    'aria-labelledby': id,
                    ...rest,
                    className: classes(className, rest.className),
                },
                ...tail,
            )}
            {styles}
        </SectionContext.Provider>
    );
}, 'Section');

const getLabel = (children: ReactNodeArray) => {
    const [head, ...tail] = children;

    if (!isValidElement(head) || head.type !== H) return { tail: [head, ...tail] };

    const id = cssid('Section-label');
    const props = head.props || {};

    return {
        id,
        tail: [
            React.createElement(head.type, {
                role: 'presentation',
                ...props,
                id,
            }),
            ...tail,
        ],
    };
};

// language=CSS
const getStyles = (text: string, fg: Color) => resolve`
    section {
        ${text};
        color: ${fg};
    }
`;
