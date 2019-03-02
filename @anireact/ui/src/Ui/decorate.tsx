import { cssvar, isNone, not, px } from '@anireact/prelude';
import { glowX, glowY, Level, LevelPalette, ThemedContext, useThemed } from '@anireact/themed';
import { TldrContext, useTldr } from '@tld/r';

import React, {
    createContext,
    DOMAttributes,
    forwardRef,
    FunctionComponent,
    memo,
    PropsWithoutRef,
    PropsWithRef,
    ReactElement,
    ReactNode,
    Ref,
    RefAttributes,
    SyntheticEvent,
    useContext,
} from 'react';

export interface Decorator {
    readonly name: string;
    readonly providesLevel?: boolean;
    readonly consumesLevel?: boolean;
}

export interface CapturedProps {
    readonly className?: string;
    readonly level?: Level;
    readonly disabled?: boolean;
}

export interface InjectedProps<R> {
    readonly ref: Ref<R>;
    readonly tld: TldrContext;
    readonly theme: Theme;
    readonly className?: string;
    readonly disabled: boolean;
}

interface Theme extends ThemedContext, LevelPalette {}

type Required = DOMAttributes<any>;

type Props<P, R> = PropsWithRef<PropsWithoutRef<P> & RefAttributes<R>> & CapturedProps;
type Passed<P> = Pick<P, Exclude<keyof P, keyof CapturedProps>>;

type Raw<P, R> = (props: Passed<P>, injected: InjectedProps<R>) => ReactNode;
type Decorated<P, R> = FunctionComponent<Props<P, R>>;

export const decorate = <P extends Required, R extends HTMLElement>(o: Decorator, c: Raw<P, R>): Decorated<P, R> => {
    const { name, providesLevel, consumesLevel } = o;
    const root = cssvar(name);

    const Component = memo(
        forwardRef<R, P & CapturedProps>((props, ref) => {
            const { className, level, disabled = false, ...passed } = props;
            const tld = useTldr();
            const themed = useThemed();
            const levelContext = useContext(LevelContext);
            const actualLevel = consumesLevel ? level || levelContext || 'base' : level || 'base';

            const node = c(
                { ...passed, onPointerMove: forward(passed.onPointerMove, onPointerMove) },
                {
                    ref,
                    tld,
                    disabled,
                    className: [className, root].filter(not(isNone)).join(' '),
                    theme: { ...themed, ...themed[disabled ? 'disabled' : actualLevel] },
                },
            ) as ReactElement;

            if (providesLevel) return <LevelContext.Provider value={actualLevel}>{node}</LevelContext.Provider>;

            return node;

            // TODO: Handle disabled the right way.
        }),
    );

    Component.displayName = name;

    const value = () => `.${root}`;

    Reflect.defineProperty(Component, 'toString', { value });
    Reflect.defineProperty(Component, 'valueOf', { value });
    Reflect.defineProperty(Component, Symbol.toPrimitive, { value });

    return Component;
};

const forward = <E extends SyntheticEvent>(f: ((e: E) => void) | undefined, g: (e: E) => void) => (e: E) => {
    g(e);

    if (f) return f(e);

    return undefined;
};

const onPointerMove = <E extends SyntheticEvent<HTMLElement, PointerEvent>>(e: E) => {
    const {
        currentTarget,
        target,
        nativeEvent: { offsetX, offsetY },
    } = e;

    const { style } = currentTarget as HTMLElement;

    const currentRect = (currentTarget as Element).getBoundingClientRect();
    const rect = (target as Element).getBoundingClientRect();

    style.setProperty(glowX, px(offsetX + rect.left - currentRect.left));
    style.setProperty(glowY, px(offsetY + rect.top - currentRect.top));
};

const LevelContext = createContext(null as null | Level);

LevelContext.displayName = 'Level';
