import { colors } from '@anireact/css';
import { glowColor, glowEnd, glowGradient } from '@anireact/themed';
import React from 'react';
import { dataHover, DivProps, ui } from './ui';

export interface Button extends DivProps {
    readonly checked?: boolean;
}

export const Button = ui(({ checked, role = 'button', children, ...rest }: Button, { theme }) => {
    const { ui, fg, bg, hover, focus, active, glow, hasKeyboard, hasTouch } = theme;
    const { xl3, xs3, xs4, xs5, xs6, ixs2, ixs5, ixs3 } = theme;
    const isPush = role === 'switch' || role === 'radio' || role === 'checkbox';
    const ariaProps = isPush ? { 'aria-checked': Boolean(checked) } : {};

    const regularShadow = `inset 0 0 0 ${xs5} ${bg}`;
    const keyboardShadow = hasKeyboard ? `inset 0 0 0 ${xs5} ${focus}` : regularShadow;
    const focusShadow = `0 0 0 ${xs5} ${focus}`;
    const activeShadow = `inset 0 ${xs6} ${xs3} ${xs5} ${active}`;
    const pushShadow = isPush && checked ? `${regularShadow}, inset 0 ${xs6} ${xs5} ${xs5} ${active}` : regularShadow;

    return (
        <div {...ariaProps} role={role} tabIndex={0} {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                div {
                    ${ui};
                    ${colors(bg, fg)};

                    position: relative;
                    border: none;

                    padding: ${hasTouch ? ixs3 : ixs5} ${ixs2};
                    padding-inline-start: ${ixs2};
                    padding-inline-end: ${ixs2};
                    padding-block-start: ${hasTouch ? ixs3 : ixs5};
                    padding-block-end: ${hasTouch ? ixs3 : ixs5};

                    border-radius: ${xs4};
                    background-image: ${glowGradient};
                    box-shadow: ${pushShadow};
                    user-select: none;

                    ${glowColor}: ${glow};
                }

                div[${dataHover}] {
                    background-color: ${hover};

                    ${glowEnd}: ${xl3};
                }

                div:focus {
                    z-index: 1;

                    outline: none;
                    box-shadow: ${keyboardShadow}, ${focusShadow}, ${pushShadow};
                }

                div:active {
                    box-shadow: ${regularShadow}, ${activeShadow};
                }

                div:focus:active {
                    box-shadow: ${keyboardShadow}, ${activeShadow}, ${focusShadow};
                }
            `}</style>
        </div>
    );
}, 'Button');

/* div::after {
    ${pos({ top: xs5, left: xs5, right: xs5, bottom: xs5 })};

    content: '';
    display: block;
    position: absolute;

    border-radius: ${xs6};
    box-shadow: ${isPush && checked ? `inset 0 ${xs6} ${xs5} ${active}` : 'none'};
} */

/* div:active::after {
    box-shadow: inset 0 ${xs6} ${xs3} ${active};
} */
