export type Strings = ReadonlyArray<string>;

export const toString = (x: any) => String(x);
export const concatS = (...s: string[]) => s.join('');
export const toLower = (s: string) => s.toLowerCase();
export const toUpper = (s: string) => s.toUpperCase();
export const ccAt = (s: string, i: number) => s.charCodeAt(i);
export const cpAt = (s: string, i: number) => s.codePointAt(i);
export const fromCc = (cc: number) => String.fromCharCode(cc);
export const fromCp = (cp: number) => String.fromCodePoint(cp);
export const startsWith = (a: string, b: string) => a.startsWith(b);
export const endsWith = (a: string, b: string) => a.endsWith(b);
export const padStart = (s: string, n: number, c = ' ') => s.padStart(n, c);
export const padEnd = (s: string, n: number, c = ' ') => s.padEnd(n, c);
export const includesS = (a: string, b: string) => a.includes(b);
export const match = (s: string, r: RegExp) => s.match(r);
export const normalize = (s: string, form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD') => s.normalize(form);
