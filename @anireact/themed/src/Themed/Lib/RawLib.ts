import { RawTheme } from '../Theme/RawTheme';

export type RawLib = ReadonlyArray<Partial<RawTheme>> | Record<string, Partial<RawTheme>>;
