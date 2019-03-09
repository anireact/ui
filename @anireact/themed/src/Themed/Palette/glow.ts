import { cssid } from '@anireact/css';

const scoped = (x: string) => cssid(`glow-${x}`);

export const glowColor = scoped('color');
export const glowStart = scoped('start');
export const glowMax = scoped('max');
export const glowEnd = scoped('end');
export const glowX = scoped('x');
export const glowY = scoped('y');

// prettier-ignore
export const glowGradient = [
    'radial-gradient(',
        'var(', glowEnd, ',0) var(', glowEnd, ',0) at var(', glowX, ',50%) var(', glowY, ',50%),',
        'transparent 0,',
        'transparent var(', glowStart, ',0),',
        'var(', glowColor, ',transparent) var(', glowMax, ',0),',
        'transparent 100%',
    ')',
].join('');
