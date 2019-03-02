import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';
import { Button } from './Button';
import { decorate } from './decorate';

export type ButtonsItem = Button;

const ButtonsItem = decorate<ButtonsItem, HTMLButtonElement>(
    { name: 'Buttons.Item' },
    ({ checked = false, ...props }, { ref, className }) => {
        return <Button {...props} role={'radio'} checked={checked} ref={ref} className={className} />;
    },
);

type Span = DetailedHTMLProps<ButtonHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type Buttons = Pick<Span, Exclude<keyof Span, 'children'>> & {
    readonly children?:
        | ReactElement<ButtonsItem, typeof ButtonsItem>
        | ReadonlyArray<ReactElement<ButtonsItem, typeof ButtonsItem>>;
};

interface Sub {
    readonly Item: typeof ButtonsItem;
}

export const Buttons = decorate<Buttons, HTMLSpanElement, Sub>(
    { name: 'Buttons' },
    ({ children, ...props }, { ref, className, theme }) => {
        const { bg } = theme;
        const { xs4 } = theme;

        return (
            <>
                <span role={'radiogroup'} {...props} ref={ref} className={className}>
                    {children}
                </span>
                <style jsx>{/* language=CSS */ `
                    span {
                        display: inline-flex;
                        position: relative;

                        background-color: ${bg};
                        border-radius: ${xs4};
                    }
                `}</style>
            </>
        );
    },
    { Item: ButtonsItem },
);
