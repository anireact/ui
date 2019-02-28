export const hoverQuery = '(any-hover: hover)';

export const watchHover = (subscriber: (touch: boolean) => unknown) => {
    const hoverMql = matchMedia(hoverQuery);

    hoverMql.addEventListener('change', () => subscriber(hoverMql.matches));
};
