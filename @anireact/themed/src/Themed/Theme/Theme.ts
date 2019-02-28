import { Icons } from '../Icons/Icons';
import { Palette } from '../Palette/Palette';
import { Fonts } from '../Fonts/Fonts';
import { Media } from '../Media/Media';
import { X } from '../X/X';

export interface Theme extends X, Fonts, Palette, Media, Icons {
    readonly id: string;
    readonly name: string;
}
