import { classes, cssid, px } from '@anireact/css';
import { glowX, glowY, Level, LevelPalette, ThemedContext } from '@anireact/themed';
import { TldrContext } from '@tld/r';

import React, {
    AnchorHTMLAttributes,
    AudioHTMLAttributes,
    BaseHTMLAttributes,
    BlockquoteHTMLAttributes,
    ButtonHTMLAttributes,
    CanvasHTMLAttributes,
    ColgroupHTMLAttributes,
    ColHTMLAttributes,
    createContext,
    DelHTMLAttributes,
    DetailsHTMLAttributes,
    DialogHTMLAttributes,
    FieldsetHTMLAttributes,
    FormHTMLAttributes,
    forwardRef,
    FunctionComponent,
    HTMLAttributes,
    HtmlHTMLAttributes,
    IframeHTMLAttributes,
    ImgHTMLAttributes,
    InputHTMLAttributes,
    InsHTMLAttributes,
    LabelHTMLAttributes,
    LiHTMLAttributes,
    LinkHTMLAttributes,
    memo,
    MetaHTMLAttributes,
    MeterHTMLAttributes,
    OlHTMLAttributes,
    OptgroupHTMLAttributes,
    OptionHTMLAttributes,
    OutputHTMLAttributes,
    PointerEvent,
    ProgressHTMLAttributes,
    QuoteHTMLAttributes,
    ReactNode,
    Ref,
    SelectHTMLAttributes,
    SourceHTMLAttributes,
    SyntheticEvent,
    TableHTMLAttributes,
    TdHTMLAttributes,
    TextareaHTMLAttributes,
    ThHTMLAttributes,
    TimeHTMLAttributes,
    TouchEvent,
    TrackHTMLAttributes,
    useContext,
    VideoHTMLAttributes,
} from 'react';

const LevelContext = createContext(null as null | Level);

LevelContext.displayName = 'Level';

export const dataHover = `data-${cssid('hover')}`;

export const ui = <p extends UiProps<any>>(f: UiComponent<p>, name: string) => {
    const root = cssid(name);
    const value = () => `.${root}`;
    const C = memo(
        forwardRef<p extends UiProps<infer e> ? e : never, p>((props, ref) => {
            const { className, level, ...rest } = props;
            const theme = useContext(ThemedContext);
            const level_ = level || useContext(LevelContext) || 'normal';

            const node = f(
                {
                    ...(rest as p),
                    ref,
                    className: classes(className, root),

                    onPointerEnter: enter(rest.onPointerEnter),
                    onTouchStart: enter(rest.onTouchStart),

                    onPointerOut: pointerOut(rest.onPointerOut),
                    onTouchEnd: touchOut(rest.onTouchEnd),
                    onTouchCancel: touchOut(rest.onTouchCancel),

                    onPointerMove: pointerMove(rest.onPointerMove),
                    onTouchMove: touchMove(rest.onTouchMove),
                },
                { level: level_, tldr: useContext(TldrContext), theme: { ...theme, ...theme[level_] } },
            );

            return <LevelContext.Provider value={level_}>{node}</LevelContext.Provider>;
        }),
    );

    C.displayName = name;
    Reflect.defineProperty(C, 'toString', { value });
    Reflect.defineProperty(C, 'valueOf', { value });
    Reflect.defineProperty(C, Symbol.toPrimitive, { value });

    return (C as unknown) as FunctionComponent<p>;
};

const proxyEvent = <E extends SyntheticEvent<any>>(trap: (e: E) => void, original?: (e: E) => void) => (e: E) => {
    trap(e);

    if (original) return original(e);

    return undefined;
};

const enter = <E extends SyntheticEvent<HTMLElement>>(original?: (e: E) => void) =>
    proxyEvent(e => {
        const { currentTarget } = e;

        currentTarget.setAttribute(dataHover, '');
    }, original);

const pointerOut = <E extends PointerEvent<HTMLElement>>(original?: (e: E) => void) =>
    proxyEvent(e => {
        const { currentTarget, pointerType } = e;

        if (pointerType !== 'touch') {
            currentTarget.removeAttribute(dataHover);
        }
    }, original);

const touchOut = <E extends SyntheticEvent<HTMLElement>>(original?: (e: E) => void) =>
    proxyEvent(e => {
        const { currentTarget } = e;

        currentTarget.removeAttribute(dataHover);
    }, original);

const pointerMove = <E extends PointerEvent<HTMLElement>>(original?: (e: E) => void) =>
    proxyEvent(e => {
        const { currentTarget, target, nativeEvent } = e;

        if (target instanceof Element) {
            const { offsetX, offsetY } = nativeEvent;

            updateXy(target, currentTarget, offsetX, offsetY);
        }
    }, original);

const touchMove = <E extends TouchEvent<HTMLElement>>(original?: (e: E) => void) =>
    proxyEvent(e => {
        const { currentTarget, target, touches } = e;

        if (target instanceof Element && touches.length === 1) {
            const targetRect = target.getBoundingClientRect();
            const { pageX, pageY } = touches.item(0);

            updateXy(target, currentTarget, pageX - targetRect.left, pageY - targetRect.top);
        }
    }, original);

const updateXy = (target: Element, currentTarget: HTMLElement, offsetX: number, offsetY: number) => {
    const { style } = currentTarget;

    const currentRect = currentTarget.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    style.setProperty(glowX, px(offsetX + targetRect.left - currentRect.left));
    style.setProperty(glowY, px(offsetY + targetRect.top - currentRect.top));
};

export interface UiComponent<p extends UiProps<any>> {
    (props: p, injected: InjectedProps): ReactNode;

    displayName?: string;
}

export interface UiAttributes<e extends HTMLElement> {
    readonly ref?: Ref<e>;
    readonly level?: Level;
}

export interface UiProps<e extends HTMLElement> extends UiAttributes<e>, HTMLAttributes<e> {}

interface InjectedProps {
    readonly theme: ThemedContext & LevelPalette;
    readonly tldr: TldrContext;
    readonly level: Level;
}

// region Native props
export interface AnchorProps extends UiAttributes<HTMLAnchorElement>, AnchorHTMLAttributes<HTMLAnchorElement> {}
export interface ArticleProps extends UiAttributes<HTMLElement>, HTMLAttributes<HTMLElement> {}
export interface AudioProps extends UiAttributes<HTMLAudioElement>, AudioHTMLAttributes<HTMLAudioElement> {}
export interface BaseProps extends UiAttributes<HTMLBaseElement>, BaseHTMLAttributes<HTMLBaseElement> {}
export interface BlockquoteProps extends UiAttributes<HTMLQuoteElement>, BlockquoteHTMLAttributes<HTMLQuoteElement> {}
export interface ButtonProps extends UiAttributes<HTMLButtonElement>, ButtonHTMLAttributes<HTMLButtonElement> {}
export interface CanvasProps extends UiAttributes<HTMLCanvasElement>, CanvasHTMLAttributes<HTMLCanvasElement> {}
export interface ColProps extends UiAttributes<HTMLTableColElement>, ColHTMLAttributes<HTMLTableColElement> {}
export interface ColgroupProps extends UiAttributes<HTMLTableColElement>, ColgroupHTMLAttributes<HTMLTableColElement> {}
export interface DetailsProps extends UiAttributes<HTMLDetailsElement>, DetailsHTMLAttributes<HTMLDetailsElement> {}
export interface DelProps extends UiAttributes<HTMLModElement>, DelHTMLAttributes<HTMLModElement> {}
export interface DialogProps extends UiAttributes<HTMLDialogElement>, DialogHTMLAttributes<HTMLDialogElement> {}
export interface DivProps extends UiAttributes<HTMLDivElement>, HTMLAttributes<HTMLDivElement> {}
export interface FieldsetProps extends UiAttributes<HTMLFieldSetElement>, FieldsetHTMLAttributes<HTMLFieldSetElement> {}
export interface FormProps extends UiAttributes<HTMLFormElement>, FormHTMLAttributes<HTMLFormElement> {}
export interface HProps extends UiAttributes<HTMLHeadingElement>, HTMLAttributes<HTMLHeadingElement> {}
export interface HtmlProps extends UiAttributes<HTMLHtmlElement>, HtmlHTMLAttributes<HTMLHtmlElement> {}
export interface IframeProps extends UiAttributes<HTMLIFrameElement>, IframeHTMLAttributes<HTMLIFrameElement> {}
export interface ImgProps extends UiAttributes<HTMLImageElement>, ImgHTMLAttributes<HTMLImageElement> {}
export interface InsProps extends UiAttributes<HTMLModElement>, InsHTMLAttributes<HTMLModElement> {}
export interface InputProps extends UiAttributes<HTMLInputElement>, InputHTMLAttributes<HTMLInputElement> {}
export interface LabelProps extends UiAttributes<HTMLLabelElement>, LabelHTMLAttributes<HTMLLabelElement> {}
export interface LegendProps extends UiAttributes<HTMLLegendElement>, HTMLAttributes<HTMLLegendElement> {}
export interface LiProps extends UiAttributes<HTMLLIElement>, LiHTMLAttributes<HTMLLIElement> {}
export interface LinkProps extends UiAttributes<HTMLLinkElement>, LinkHTMLAttributes<HTMLLinkElement> {}
export interface MetaProps extends UiAttributes<HTMLMetaElement>, MetaHTMLAttributes<HTMLMetaElement> {}
export interface MeterProps extends UiAttributes<HTMLMeterElement>, MeterHTMLAttributes<HTMLMeterElement> {}
export interface QProps extends UiAttributes<HTMLQuoteElement>, QuoteHTMLAttributes<HTMLQuoteElement> {}
export interface OlProps extends UiAttributes<HTMLOListElement>, OlHTMLAttributes<HTMLOListElement> {}
export interface OptgroupProps extends UiAttributes<HTMLOptGroupElement>, OptgroupHTMLAttributes<HTMLOptGroupElement> {}
export interface OptionProps extends UiAttributes<HTMLOptionElement>, OptionHTMLAttributes<HTMLOptionElement> {}
export interface OutputProps extends UiAttributes<HTMLOutputElement>, OutputHTMLAttributes<HTMLOutputElement> {}
export interface PProps extends UiAttributes<HTMLParagraphElement>, HTMLAttributes<HTMLParagraphElement> {}
export interface ProgressProps extends UiAttributes<HTMLProgressElement>, ProgressHTMLAttributes<HTMLProgressElement> {}
export interface SectionProps extends UiAttributes<HTMLElement>, HTMLAttributes<HTMLElement> {}
export interface SelectProps extends UiAttributes<HTMLSelectElement>, SelectHTMLAttributes<HTMLSelectElement> {}
export interface SourceProps extends UiAttributes<HTMLSourceElement>, SourceHTMLAttributes<HTMLSourceElement> {}
export interface SpanProps extends UiAttributes<HTMLSpanElement>, HTMLAttributes<HTMLSpanElement> {}
export interface TableProps extends UiAttributes<HTMLTableElement>, TableHTMLAttributes<HTMLTableElement> {}
export interface TextareaProps extends UiAttributes<HTMLTextAreaElement>, TextareaHTMLAttributes<HTMLTextAreaElement> {}
export interface TdProps extends UiAttributes<HTMLTableCellElement>, TdHTMLAttributes<HTMLTableCellElement> {}
export interface ThProps extends UiAttributes<HTMLTableCellElement>, ThHTMLAttributes<HTMLTableCellElement> {}
export interface TrProps extends UiAttributes<HTMLTableRowElement>, HTMLAttributes<HTMLTableRowElement> {}
export interface TimeProps extends UiAttributes<HTMLTimeElement>, TimeHTMLAttributes<HTMLTimeElement> {}
export interface TrackProps extends UiAttributes<HTMLTrackElement>, TrackHTMLAttributes<HTMLTrackElement> {}
export interface VideoProps extends UiAttributes<HTMLVideoElement>, VideoHTMLAttributes<HTMLVideoElement> {}
// endregion
