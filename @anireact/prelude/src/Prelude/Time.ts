import { abs, sgn, trunc } from '..';

export interface TimeDiff {
    (a: Date, b: Date): number;
}

export const diffMilliseconds: TimeDiff = (a, b) => (a as any) - (b as any);
export const diffSeconds: TimeDiff = (a, b) => trunc(diffMilliseconds(a, b) / 1000);
export const diffMinutes: TimeDiff = (a, b) => trunc(diffSeconds(a, b) / 60);
export const diffHours: TimeDiff = (a, b) => trunc(diffMinutes(a, b) / 60);

export const diffDays: TimeDiff = (a, b) => {
    const ad = resetDayToStart(a);
    const bd = resetDayToStart(b);

    return diff(
        a,
        b,
        trunc((ad.getTime() - getTimeZoneOffset(ad) - (bd.getTime() - getTimeZoneOffset(bd))) / 86400000),
        (d: Date) => {
            return d.getDate();
        },
        (d: Date, n: number) => {
            return d.setDate(n);
        },
    );
};

export const diffWeeks: TimeDiff = (a, b) => trunc(diffDays(a, b) / 7);

export const diffMonths: TimeDiff = (a, b) => {
    return diff(a, b, (getY(a) - getY(b)) * 12 + getM(a) - getM(b), getM, (d, n) => {
        return d.setMonth(n);
    });
};

export const diffQuarters: TimeDiff = (a, b) => trunc(diffMonths(a, b) / 3);

export const diffYears: TimeDiff = (a, b) => diff(a, b, getY(a) - getY(b), getY, (d, n) => d.setFullYear(n));

// region Supplemental
const diff = (a: Date, b: Date, init: number, get: (d: Date) => number, set: (d: Date, n: number) => number) => {
    const diff = abs(init);
    const s = sgn((a as any) - (b as any));
    const back = cloneDate(a);

    set(back, get(back) - s * diff);

    const adjust = sgn((back as any) - (b as any)) === -s;

    return s * (diff - (adjust as any)) || 0;
};

const resetDayToStart = (a: Date) => {
    const back = cloneDate(a);

    back.setHours(0, 0, 0, 0);

    return back;
};

const getTimeZoneOffset = (a: Date) => {
    const back = cloneDate(a);
    const base = back.getTimezoneOffset();

    back.setSeconds(0, 0);

    const ms = back.getTime() % 60000;

    return base * 60000 + ms;
};

const getM = (d: Date) => {
    return d.getMonth();
};

const getY = (d: Date) => {
    return d.getFullYear();
};

const cloneDate = (d: Date) => {
    return new Date(d);
};
// endregion
