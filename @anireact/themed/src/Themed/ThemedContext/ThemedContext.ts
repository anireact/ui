import { identity } from '@anireact/prelude';
import { createContext } from 'react';
import { black } from '../Lib/black';
import { getInitialMedia } from '../Media/getInitialMedia';
import { createTheme } from '../Theme/createTheme';
import { RawTheme } from '../Theme/RawTheme';
import { Theme } from '../Theme/Theme';

export interface ThemedContext extends Theme {
    readonly themes: ReadonlyMap<string, RawTheme>;
    readonly switchTheme: (id: string) => unknown;
}

export const ThemedContext = createContext<ThemedContext>({
    ...createTheme(black, getInitialMedia(black, identity)),
    themes: new Map([['black', black]]),
    switchTheme: identity,
});

ThemedContext.displayName = 'Themed';
