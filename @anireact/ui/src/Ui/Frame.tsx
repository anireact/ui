import { classes, cssid } from '@anireact/css';
import { isList } from '@anireact/prelude';
import { LevelPalette, ThemedContext } from '@anireact/themed';
import React, { isValidElement, ReactNodeArray } from 'react';
import { resolve } from 'styled-jsx/css';
import { Legend } from './Legend';
import { FieldsetProps, ui } from './ui';

export interface Frame extends FieldsetProps {}

export const Frame = ui(({ children, ...rest }: Frame, { theme }) => {
    const { id, tail } = getLabel(isList(children) ? children : [children]);
    const { className, styles } = getStyles(theme);

    return React.createElement(
        'fieldset',
        {
            'aria-labelledby': id,
            ...rest,
            className: classes(className, rest.className),
        },
        ...tail,
        styles,
    );
}, 'Frame');

const getLabel = (children: ReactNodeArray) => {
    const [head, ...tail] = children;

    if (!isValidElement(head) || head.type !== Legend) return { tail: [head, ...tail] };

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

const getStyles = (theme: ThemedContext & LevelPalette) => {
    const { ui, plain, xs2, xs4, xs6 } = theme;
    const { fg } = plain;

    const padding = `calc(${xs2} - ${xs6})`;

    // language=CSS
    return resolve`
        fieldset {
            ${ui};

            color: ${fg};

            padding: 0 ${padding} ${padding};
            padding-inline-start: ${padding};
            padding-inline-end: ${padding};
            padding-block-start: 0;
            padding-block-end: ${padding};

            border-color: ${fg};
            border-style: solid;
            border-width: calc(${xs6} / 2);

            border-radius: ${xs4};
        }
    `;
};
