export interface RawX {
    /**
     * Non-interactive elements’ cell size initializers.
     */
    readonly xUnsupported: number;
    readonly xNano: number;
    readonly xMicro: number;
    readonly xMini: number;
    readonly xSmall: number;
    readonly xMedium: number;
    readonly xLarge: number;
    readonly xLunatic: number;
    readonly xExtra: number;
    readonly xPhantasm: number;

    /**
     * Interactive elements’ cell size initializers for non-touch devices.
     */
    readonly ixUnsupported: number;
    readonly ixNano: number;
    readonly ixMicro: number;
    readonly ixMini: number;
    readonly ixSmall: number;
    readonly ixMedium: number;
    readonly ixLarge: number;
    readonly ixLunatic: number;
    readonly ixExtra: number;
    readonly ixPhantasm: number;

    /**
     * Interactive elements’ cell size initializers for touch devices.
     */
    readonly txUnsupported: number;
    readonly txNano: number;
    readonly txMicro: number;
    readonly txMini: number;
    readonly txSmall: number;
    readonly txMedium: number;
    readonly txLarge: number;
    readonly txLunatic: number;
    readonly txExtra: number;
    readonly txPhantasm: number;
}
