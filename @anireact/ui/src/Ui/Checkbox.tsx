import { IconName } from '@anireact/icons';
import { cssvar, px } from '@anireact/prelude';
import { glowColor, glowEnd, glowGradient } from '@anireact/themed';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { decorate } from './decorate';
import { Icon } from './Icon';

export type Checkbox = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    readonly checked?: boolean | null;
};

export const Checkbox = decorate<Checkbox, HTMLButtonElement>(
    { name: 'Checkbox' },
    ({ checked, children, ...props }, { ref, className, theme }) => {
        const { ui, plain, hasTouch, hasKeyboard, active, glow, focus } = theme;
        const { xs4, xs5, xs6, ixs2, ixs3, ixs5, xl3 } = theme;
        const { bg, fg, hover } = plain;

        const icon = ['checkbox-', checked ? 'checked-' : checked === null ? 'mixed-' : '', 'symbolic'].join('');
        const iconClass = cssvar('anireact-checkbox-icon');
        const paddingV = hasTouch ? ixs3 : ixs5;

        const regularShadow = `inset 0 0 0 ${xs5} ${bg}`;
        const keyboardShadow = hasKeyboard ? `inset 0 0 0 ${xs5} ${focus}` : regularShadow;
        const focusShadow = `0 0 0 ${xs5} ${focus}`;
        const activeShadow = `inset 0 ${xs6} ${xs4} ${xs5} ${active}`;

        return (
            <>
                <button {...props} ref={ref} className={className}>
                    <Icon size={16} name={icon as IconName} title={undefined} className={iconClass} />
                    {children}
                </button>
                <style jsx>{/* language=CSS */ `
                    button {
                        position: relative;
                        border: none;

                        user-select: none;

                        ${ui};

                        padding: ${paddingV} ${ixs2} ${paddingV} calc(${ixs2} - ${px(2)});

                        border-radius: ${xs4};
                        background-color: ${bg};
                        background-image: ${glowGradient};
                        box-shadow: ${regularShadow};

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

                    button > :global(img.${iconClass}) {
                        vertical-align: -4px;
                        margin-right: calc(${ixs2} - ${px(2)});
                    }
                `}</style>
            </>
        );
    },
);
