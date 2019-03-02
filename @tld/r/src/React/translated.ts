import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { TldrContext } from './TldrContext';
import { useTldr } from './useTlrd';

export const translated = <Props extends object>(
    component: (props: Props, context: TldrContext) => ReactNode,
): FunctionComponent<Props> => (props: Props) => {
    return component(props, useTldr()) as ReactElement;
};
