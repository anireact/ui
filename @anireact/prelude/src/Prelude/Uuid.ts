import { map } from './List';
import { random, round } from './Number';
import { padStart, toLower } from './String';

export const uuidv4 = () => {
    const buf = rng();

    buf[6] = (buf[6] & 0x0f) | 0x40; // eslint-disable-line no-bitwise
    buf[8] = (buf[8] & 0x3f) | 0x80; // eslint-disable-line no-bitwise

    return stringify(buf);
};

const rng = () => {
    const buf = new Uint8Array(16);

    try {
        crypto.getRandomValues(buf);
    } catch {
        for (let i = 0; i < 16; i++) {
            buf[i] = round(random() * 255);
        }
    }

    return buf;
};

const stringify = (buf: Uint8Array) => {
    const strings = map(buf, x => padStart(toLower(x.toString(16)), 2, '0'));

    return map(
        [strings.slice(0, 4), strings.slice(4, 6), strings.slice(6, 8), strings.slice(8, 10), strings.slice(10)],
        x => {
            return x.join('');
        },
    ).join('-');
};
