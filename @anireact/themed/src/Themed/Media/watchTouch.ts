export const touchQuery = '(any-pointer: coarse)';

export const watchTouch = (subscriber: (touch: boolean) => unknown) => {
    const touchMql = matchMedia(touchQuery);

    touchMql.addEventListener('change', () => subscriber(touchMql.matches));
};
