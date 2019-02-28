export const printQuery = 'all and print';

export const watchPrint = (subscriber: (touch: boolean) => unknown) => {
    const printMql = matchMedia(printQuery);

    printMql.addEventListener('change', () => subscriber(printMql.matches));
};
