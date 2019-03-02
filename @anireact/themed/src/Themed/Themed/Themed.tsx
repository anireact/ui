import { always, getM, identity, maybe } from '@anireact/prelude';
import React, { FunctionComponent, ReactElement, ReactNode, useEffect, useState } from 'react';
import { black } from '../Lib/black';
import { createLib } from '../Lib/createLib';
import { RawLib } from '../Lib/RawLib';
import { getInitialMedia } from '../Media/getInitialMedia';
import { MediaState } from '../Media/MediaState';
import { watchHover } from '../Media/watchHover';
import { watchKeyboard } from '../Media/watchKeyboard';
import { watchPrint } from '../Media/watchPrint';
import { watchTouch } from '../Media/watchTouch';
import { createTheme } from '../Theme/createTheme';
import { ThemedContext } from '../ThemedContext/ThemedContext';
import { useThemed } from './useThemed';

export interface Themed {
    readonly id: string;
    readonly lib: RawLib;
    readonly children?: ReactNode;
}

export const Themed = ({ lib, id, children }: Themed) => {
    const themes = createLib(lib);
    const [currentId, switchTheme] = useState(id);
    const init = maybe(getM(themes, currentId), identity, always(black));

    const [media, setMedia] = useState<MediaState>(
        getInitialMedia(init, size => {
            setMedia({ ...media, size });
        }),
    );

    useEffect(() => {
        watchTouch(hasTouch => hasTouch !== media.hasTouch && setMedia({ ...media, hasTouch }));
        watchHover(hasHover => hasHover !== media.hasHover && setMedia({ ...media, hasHover }));
        watchPrint(isPrinting => isPrinting !== media.isPrinting && setMedia({ ...media, isPrinting }));

        return watchKeyboard(hasKeyboard => hasKeyboard !== media.hasKeyboard && setMedia({ ...media, hasKeyboard }));
    });

    return (
        <ThemedContext.Provider
            value={{
                themes,
                switchTheme,
                ...createTheme(init, media),
            }}
        >
            {children}
        </ThemedContext.Provider>
    );
};

export const themed = <Props extends object>(
    component: (props: Props, context: ThemedContext) => ReactNode,
): FunctionComponent<Props> => (props: Props) => {
    return component(props, useThemed()) as ReactElement;
};
