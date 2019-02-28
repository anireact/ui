import { curry } from './Function';
import { fold, NonEmpty } from './List';

export type Maybe<A> = Just<A> | Nothing;
export type Just<A> = [A];
export type Nothing = '' | 0 | false | null | undefined | void;
export type Maybes<A> = { [K in keyof A]: Maybe<A[K]> };

export const mapM = <A, B>(a: Maybe<A>, f: (a: A) => B): Maybe<B> => a && [f(a[0])];
export const bindM = <A, B>(a: Maybe<A>, f: (a: A) => Maybe<B>): Maybe<B> => a && f(a[0]);
export const apM = <A, B>(a: Maybe<A>, f: Maybe<(a: A) => B>): Maybe<B> => a && mapM(f, f => f(a[0]));

export const liftM = <A extends NonEmpty<any>, Z>(f: (...as: A) => Z): ((...as: Maybes<A>) => Maybe<Z>) => {
    return (...[head, ...tail]: any[]) => {
        return fold(
            tail,
            (a: any, b) => {
                return apM(b, a);
            },
            mapM(head, curry(f) as any),
        );
    };
};

export const altM = <A>(...as: Maybe<A>[]): Maybe<A> => {
    for (const a of as) if (a) return a;

    return undefined;
};

export const maybe = <A, B>(a: Maybe<A>, f: (a: A) => B, g: () => B): B => (a ? f(a[0]) : g());
