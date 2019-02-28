import { Color } from '@anireact/hsl';
import { Colors } from './Colors';

export interface LevelPalette extends Colors {
    readonly backdrop: Color;
    readonly focus: Color;

    readonly plain: Colors;
}
