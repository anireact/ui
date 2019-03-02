import { IconName } from '@anireact/icons';
import { px } from '@anireact/prelude';
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
        const { ui, plain, hasTouch, hasKeyboard, active, focus, uiHeight } = theme;
        const { xs4, xs5, xs6, ixs2, ixs3, ixs5, xl3 } = theme;
        const { bg, fg, hover, glow } = plain;

        const icon = ['checkbox-', checked ? 'checked-' : checked === null ? 'mixed-' : '', 'symbolic'].join('');
        const paddingV = hasTouch ? ixs3 : ixs5;

        return (
            <>
                <button {...props} ref={ref} className={className}>
                    <div className={'icon'}>
                        <Icon size={16} name={icon as IconName} title={undefined} tintColor={fg} tintStyle={'fill'} />
                    </div>
                    <div className={'text'}>{children}</div>
                </button>
                <style jsx>{/* language=CSS */ `
                    button {
                        display: inline-flex;

                        position: relative;
                        border: none;

                        user-select: none;

                        ${ui};

                        padding: ${paddingV} ${ixs2} ${paddingV} calc(${ixs2} - ${px(2)});

                        border-radius: ${xs4};
                        background-color: ${bg};
                        background-image: ${glowGradient};

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

                        box-shadow: ${hasKeyboard ? `inset 0 0 0 ${xs5} ${focus}` : 'none'}, 0 0 0 ${xs5} ${focus};
                    }

                    button:active > div.icon {
                        transform: scale(0.8);
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
                    }

                    button:active::after {
                        box-shadow: inset 0 ${xs6} ${xs4} ${active};
                    }

                    button > div.icon {
                        height: ${uiHeight};
                        padding-top: 2px;
                        margin-right: calc(${ixs2} - ${px(2)});
                    }
                `}</style>
            </>
        );
    },
);
