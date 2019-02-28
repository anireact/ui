export interface RawMedia {
    /**
     * Extremely small.
     */
    readonly unsupported: number;

    /**
     * E.g. smartwatch.
     */
    readonly nano: number;

    /**
     * E.g. old 240×320 phone.
     */
    readonly micro: number;

    /**
     * E.g. smartphone.
     */
    readonly mini: number;

    /**
     * E.g. tablet (portrait).
     */
    readonly small: number;

    /**
     * E.g. tablet (album) or netbook.
     */
    readonly medium: number;

    /**
     * E.g. low-end laptop.
     */
    readonly large: number;

    /**
     * E.g. middle-end laptop or desktop.
     */
    readonly lunatic: number;

    /**
     * E.g. hi-end laptop or desktop.
     */
    readonly extra: number;

    /**
     * E.g. TV.
     */
    readonly phantasm: number;
}
