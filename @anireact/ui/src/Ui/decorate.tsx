import { px } from '@anireact/prelude';
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

export const decorate = <P extends Required, R extends Element>(o: Decorator, c: Raw<P, R>): Decorated<P, R> => {
    const { name, providesLevel, consumesLevel } = o;

    const Component = memo(
        forwardRef<R, P & CapturedProps>((props, ref) => {
            const { className, level, disabled = false, ...passed } = props;

            const tld = useTldr();
            const themed = useThemed();
            const levelContext = useContext(LevelContext);

            const actualLevel = consumesLevel ? level || levelContext || 'base' : level || 'base';

            const node = c(
                {
                    ...passed,
                    onPointerMove: forward(passed.onPointerMove, onPointerMove),
                },
                {
                    ref,
                    className,
                    tld,
                    disabled,
                    theme: {
                        ...themed,
                        ...themed[disabled ? 'disabled' : actualLevel],
                    },
                },
            ) as ReactElement;

            if (providesLevel) {
                return <LevelContext.Provider value={actualLevel}>{node}</LevelContext.Provider>;
            }

            return node;

            // TODO: Handle checked.
            // TODO: Handle disabled the right way.
        }),
    );

    Component.displayName = name;

    return Component;
};

const forward = <E extends SyntheticEvent>(f: ((e: E) => void) | undefined, g: (e: E) => void) => (e: E) => {
    g(e);

    if (f) return f(e);

    return undefined;
};

const onPointerMove = <E extends SyntheticEvent<any, any>>(e: E) => {
    const {
        currentTarget,
        target,
        nativeEvent: { offsetX, offsetY },
    } = e;

    const { style } = currentTarget as HTMLElement;

    let [node, prev] = [target as null | HTMLElement, target as null | HTMLElement];
    let [x, y] = [offsetX, offsetY];

    while (prev !== null && node !== null && node !== currentTarget) {
        node = node.parentElement;

        [x, y] = [x + prev.offsetLeft - (node ? node.offsetLeft : 0), y + prev.offsetTop - (node ? node.offsetTop : 0)];

        prev = node;
    }

    style.setProperty(glowX, px(x));
    style.setProperty(glowY, px(y));
};

const LevelContext = createContext(null as null | Level);

LevelContext.displayName = 'Level';
