import { colors, cssid, pos } from '@anireact/css';
import { IconName } from '@anireact/icons';
import { isNone } from '@anireact/prelude';
import { glowColor, glowEnd, glowGradient } from '@anireact/themed';
import React from 'react';
import { Icon } from './Icon';
import { dataHover, DivProps, ui } from './ui';

export interface Checkbox extends DivProps {
    readonly checked?: boolean | null;
}

const iconClass = cssid('Checkbox-icon');
const textClass = cssid('Checkbox-text');

export const Checkbox = ui(({ checked, children, ...rest }: Checkbox, { theme }) => {
    const { ui, plain, hasTouch, active, focus } = theme;
    const { xs3, xs4, xs5, xs6, ixs2, ixs3, ixs5, xl3 } = theme;
    const { bg, fg, hover, glow } = plain;
    const icon = ['checkbox-', checked ? 'checked-' : isNone(checked) ? 'mixed-' : '', 'symbolic'].join('') as IconName;

    return (
        <div tabIndex={0} role={'checkbox'} aria-checked={checked === null ? 'mixed' : Boolean(checked)} {...rest}>
            <Icon className={iconClass} aria-hidden size={16} name={icon} tintColor={fg} tintStyle={'fill'} />
            <span className={textClass}>{children}</span>
            <style jsx>{/* language=CSS */ `
                div {
                    ${ui};
                    ${colors(bg, fg)};

                    display: inline-flex;
                    position: relative;
                    border: none;

                    padding: ${hasTouch ? ixs3 : ixs5} ${ixs2};
                    padding-inline-start: ${ixs2};
                    padding-inline-end: ${ixs2};
                    padding-block-start: ${hasTouch ? ixs3 : ixs5};
                    padding-block-end: ${hasTouch ? ixs3 : ixs5};

                    border-radius: ${xs4};
                    background-image: ${glowGradient};
                    user-select: none;

                    ${glowColor}: ${glow};
                }

                div:focus {
                    z-index: 1;

                    outline: none;
                }

                div > :global(.${iconClass}) {
                    margin: 2px -2px 0 -2px;
                    margin-inline-start: -2px;
                    margin-inline-end: -2px;
                    margin-block-start: 2px;
                    margin-block-end: 0;
                }

                div[${dataHover}] {
                    background-color: ${hover};

                    ${glowEnd}: ${xl3};
                }

                div:focus {
                    box-shadow: inset 0 0 0 ${xs5} ${focus}, 0 0 0 ${xs5} ${focus};
                }

                div::after {
                    ${pos({ top: xs5, left: xs5, right: xs5, bottom: xs5 })};

                    content: '';
                    display: block;
                    position: absolute;
                    speak: none;

                    border-radius: ${xs6};
                }

                div:active::after {
                    box-shadow: inset 0 ${xs6} ${xs3} ${active};
                }

                div:active > :global(.${iconClass}) {
                    transform: scale(0.8);
                }

                .${textClass} {
                    margin-left: ${ixs2};
                    margin-inline-start: ${ixs2};
                    margin-inline-end: 0;
                    margin-block-start: 0;
                    margin-block-end: 0;
                }
            `}</style>
        </div>
    );
}, 'Checkbox');
