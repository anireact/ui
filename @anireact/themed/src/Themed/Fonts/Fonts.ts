import { Vector6 } from '@anireact/prelude';

export interface Fonts {
    readonly uiWeight: string;
    readonly uiFamily: string;

    readonly uiSize: string;
    readonly uiSizeL1: string;
    readonly uiSizeL2: string;

    readonly uiHeight: string;
    readonly uiHeightL1: string;
    readonly uiHeightL2: string;

    readonly ui: string;

    readonly textWeight: string;
    readonly textFamily: string;

    readonly textSize: string;
    readonly textSizeL1: string;
    readonly textSizeL2: string;

    readonly textHeight: string;
    readonly textHeightL1: string;
    readonly textHeightL2: string;

    readonly text: string;

    readonly codeWeight: string;
    readonly codeFamily: string;

    readonly code: string;

    readonly h: Vector6<Heading>;
}

export interface Heading {
    readonly size: string;
    readonly height: string;
    readonly top: string;
    readonly bottom: string;
    readonly mixin: string;
}
