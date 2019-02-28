import { glowColor, glowEnd, glowGradient } from '@anireact/themed';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { decorate } from './decorate';

export type Button = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = decorate<Button, HTMLButtonElement>({ name: 'Button' }, (props, { ref, className, theme }) => {
    const { ui, fg, bg, hover, focus, active, glow, hasKeyboard, hasTouch } = theme;
    const { xl3, xs4, xs5, xs6, ixs2, ixs5, ixs3 } = theme;

    const regularShadow = `inset 0 0 0 ${xs5} ${bg}`;
    const keyboardShadow = hasKeyboard ? `inset 0 0 0 ${xs5} ${focus}` : regularShadow;
    const focusShadow = `0 0 0 ${xs5} ${focus}`;
    const activeShadow = `inset 0 ${xs6} ${xs4} ${xs5} ${active}`;

    return (
        <>
            <button {...props} ref={ref} className={className} />
            <style jsx>{/* language=CSS */ `
                button {
                    position: relative;
                    border: none;

                    user-select: none;

                    ${ui};

                    padding: ${hasTouch ? ixs3 : ixs5} ${ixs2};

                    background-color: ${bg};
                    background-image: ${glowGradient};
                    box-shadow: ${regularShadow};
                    border-radius: ${xs4};

                    color: ${fg};

                    ${glowColor}: ${glow};
                }

                button:hover {
                    background-color: ${hover};

                    ${glowEnd}: ${xl3};
                }

                button:focus {
                    z-index: 1;

                    outline: none;

                    box-shadow: ${keyboardShadow}, ${focusShadow};
                }

                button:active {
                    box-shadow: ${regularShadow}, ${activeShadow};
                }

                button:focus:active {
                    box-shadow: ${keyboardShadow}, ${activeShadow}, ${focusShadow};
                }
            `}</style>
        </>
    );
});
