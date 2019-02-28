import { Icons } from './Icons';
import { RawIcons } from './RawIcons';

export const createIcons = ({ iconsBase, iconsTheme }: RawIcons): Icons => {
    return {
        iconsBase,
        iconsTheme,
    };
};
