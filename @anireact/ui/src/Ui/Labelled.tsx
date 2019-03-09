import { classes, colors, cssid } from '@anireact/css';
import { Color } from '@anireact/hsl';
import { isList } from '@anireact/prelude';
import React, { isValidElement, ReactNodeArray } from 'react';
import { resolve } from 'styled-jsx/css';
import { DivProps, ui } from './ui';

export interface Labelled extends DivProps {
    readonly axis?: 'vertical' | 'horizontal';
}

export const Labelled = ui(({ children, ...rest }: Labelled, { theme }) => {
    const { plain } = theme;
    const { bg, fg } = plain;
    const { className, styles } = getStyles(bg, fg);

    return React.createElement(
        'div',
        {
            ...rest,
            className: classes(className, rest.className),
        },
        ...getLabel(isList(children) ? children : [children]),
        styles,
    );
}, 'Labelled');

const getLabel = (children: ReactNodeArray) => {
    const [first, second, ...tail] = children;

    if (!isValidElement(first) || !isValidElement(second)) return [first, second, ...tail];

    const id = cssid('Labelled-label');
    const firstProps = first.props || {};
    const secondProps = second.props || {};

    return [
        React.createElement(first.type, {
            role: 'presentation',
            ...firstProps,
            id,
        }),
        React.createElement(second.type, {
            ...secondProps,
            'aria-labelledby': id,
        }),
        ...tail,
    ];
};

const getStyles = (bg: Color, fg: Color, axis?: 'vertical' | 'horizontal') => /* language=CSS */ resolve`
    div {
        ${colors(bg, fg)};
        display: flex;
        flex-direction: ${axis === 'horizontal' ? 'row' : 'column'};
    }
`;
