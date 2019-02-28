import { hsl } from '@anireact/hsl';
import { px } from '@anireact/prelude';
import React from 'react';

export interface Logo {
    readonly size: number;
    readonly color: 'black' | 'white';
    readonly className?: string;
    readonly shape?: 'rounded' | 'circle';
}

// eslint-disable-next-line max-lines-per-function
export const Logo = ({ className, size, color, shape }: Logo) => {
    const bg = color === 'black' ? hsl(0, 0, 6.25) : hsl(0, 0, 93.75);
    const fg = color === 'black' ? '#fff' : '#000';
    const iter = hsl(350, 100, 50);

    const fontWeight = size < 48 ? '900' : '600';
    const borderRadius = shape === 'circle' ? '50%' : shape ? px(size > 128 ? size / 64 : size > 32 ? 4 : 3) : '0';

    const iterWidth = size > 32 ? size * 0.05 : size > 18 ? size * 0.075 : size / 8;
    const iterStart = size > 24 ? 34 : 25;
    const iterLength = size > 24 ? 25 : 45;

    return (
        <>
            <div className={className}>
                <div className={'logo'}>
                    {'<`へ´>'}
                    <div className={'iter mask outer'}>
                        <div className={'iter mask inner'}>
                            <div className={'iter mark'} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{/* language=CSS */ `
                div {
                    position: relative;
                }

                .logo {
                    width: ${size}px;
                    height: ${size}px;
                    background-color: ${bg};
                    color: ${fg};
                    font-size: ${size * 0.225}px;
                    font-family: 'Noto Sans CJK JP', 'Noto Sans JP', 'Noto Sans', sans-serif;
                    text-align: center;
                    line-height: ${size}px;
                    font-weight: ${fontWeight};
                    border-radius: ${borderRadius};
                }

                .iter {
                    pointer-events: none;
                    position: absolute;
                    left: 0;
                    top: 0;
                    box-sizing: border-box;
                }

                .mask {
                    width: ${size / 2}px;
                    height: ${size}px;
                    transform-origin: 0 50%;
                    overflow: hidden;
                }

                .outer {
                    left: ${size / 2}px;
                    transform: rotate(${iterStart}deg);
                }

                .inner {
                    transform: rotate(${iterLength - 180}deg);
                }

                .mark {
                    width: ${size}px;
                    height: ${size}px;
                    left: ${-size / 2}px;
                    border-radius: 50%;
                    border-style: solid;
                    border-width: ${iterWidth}px;
                    border-color: ${iter};
                }

                .logo {
                    //
                }
            `}</style>
        </>
    );
};
