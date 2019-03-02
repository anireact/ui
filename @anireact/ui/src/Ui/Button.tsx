import { glowColor, glowEnd, glowGradient } from '@anireact/themed';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { decorate } from './decorate';

export type Button = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    readonly checked?: boolean | null;
};

export const Button = decorate<Button, HTMLButtonElement>(
    { name: 'Button' },
    ({ checked, role = 'button', ...props }, { ref, className, theme }) => {
        const { ui, fg, bg, hover, focus, active, glow, hasTouch } = theme;
        const { xl3, xs3, xs4, xs5, xs6, ixs2, ixs5, ixs3 } = theme;

        const toggle = role === 'switch' || role === 'radio' || role === 'checkbox';
        const aria = toggle ? { 'aria-checked': Boolean(checked) } : {};

        return (
            <>
                <button {...aria} {...props} role={role} ref={ref} className={className} />
                <style jsx>{/* language=CSS */ `
                    button {
                        position: relative;
                        border: none;

                        user-select: none;

                        ${ui};

                        padding: ${hasTouch ? ixs3 : ixs5} ${ixs2};

                        background-color: ${bg};
                        background-image: ${glowGradient};
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

                        box-shadow: inset 0 0 0 ${xs5} ${focus}, 0 0 0 ${xs5} ${focus};
                    }

                    button::after {
                        content: '';

                        display: block;
                        position: absolute;

                        top: ${xs5};
                        left: ${xs5};
                        right: ${xs5};
                        bottom: ${xs5};

                        border-radius: ${xs6};
                        box-shadow: ${toggle && checked ? `inset 0 ${xs6} ${xs5} ${active}` : 'none'};
                    }

                    button:active::after {
                        box-shadow: inset 0 ${xs6} ${xs3} ${active};
                    }
                `}</style>
            </>
        );
    },
);
