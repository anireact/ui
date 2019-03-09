import { classes, cssid } from '@anireact/css';
import { isString } from '@anireact/prelude';
import { ThemedContext } from '@anireact/themed';
import React from 'react';
import { DivProps, ui } from './ui';

export interface Flex extends DivProps {
    readonly axis?: 'vertical' | 'horizontal';
    readonly reverse?: boolean;
    readonly main?: 'start' | 'stretch' | 'center' | 'end';
    readonly cross?: 'start' | 'stretch' | 'center' | 'end';
    readonly wrap?: boolean | 'wrap' | 'nowrap' | 'reverse';
    readonly density?: 'sparse' | 'regular' | 'dense' | 'none';
}

const outerClass = cssid('Flex-outer');
const innerClass = cssid('Flex-inner');

export const Flex = ui((props: Flex, { theme }) => {
    const { axis, reverse, main, cross, wrap, density, children, className, ...rest } = props;
    const gap = getGap(density, theme);

    return (
        <div {...rest} className={classes(outerClass, className)}>
            <div className={innerClass}>{children}</div>
            <style jsx>{/* language=CSS */ `
                .${outerClass} {
                    display: flex;
                    /*margin-inline-start: 0;*/
                    /*margin-block-end: 0;*/
                }

                .${innerClass} {
                    display: flex;
                    flex-grow: 1;
                    flex-direction: ${getFlexDirection(axis, reverse)};
                    align-items: ${getAlignItems(cross)};
                    flex-wrap: ${getFlexWrap(wrap)};
                    justify-content: ${getJustifyContent(main)};

                    margin: -${gap} 0 0 -${gap};
                    margin-inline-start: 0;
                    margin-inline-end: -${gap};
                    margin-block-start: -${gap};
                    margin-block-end: 0;
                }

                .${innerClass} > :global(*) {
                    flex-grow: ${main === 'stretch' ? 1 : 0};
                    margin: ${gap} 0 0 ${gap};
                    margin-inline-start: 0;
                    margin-inline-end: ${gap};
                    margin-block-start: ${gap};
                    margin-block-end: 0;
                }
            `}</style>
        </div>
    );
}, 'Flex');

const getGap = (density: Flex['density'], { x, xs2, xs3 }: ThemedContext) =>
    density === 'sparse' ? x : density === 'regular' ? xs2 : density === 'dense' ? xs3 : 0;

const getFlexDirection = (axis: Flex['axis'], reverse: Flex['reverse']) =>
    (axis === 'horizontal' ? 'row' : 'column') + (reverse ? '-reverse' : '');

const getAlignItems = (cross: Flex['cross']) =>
    cross === 'stretch' ? 'normal' : cross === 'center' ? cross : cross ? `flex-${cross}` : 'flex-start';

const getFlexWrap = (wrap: Flex['wrap']) =>
    wrap === 'reverse' ? 'wrap-reverse' : isString(wrap) ? wrap : wrap ? 'wrap' : 'nowrap';

const getJustifyContent = (main: Flex['main']) =>
    main === 'stretch' ? 'flex-start' : main === 'center' ? main : main ? `flex-${main}` : 'flex-start';
