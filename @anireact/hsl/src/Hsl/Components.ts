declare const X: unique symbol; // eslint-disable-line init-declarations
export type X = number & { [X]: never };

declare const Y: unique symbol; // eslint-disable-line init-declarations
export type Y = number & { [Y]: never };

declare const Z: unique symbol; // eslint-disable-line init-declarations
export type Z = number & { [Z]: never };

declare const R: unique symbol; // eslint-disable-line init-declarations
export type R = number & { [R]: never };

declare const G: unique symbol; // eslint-disable-line init-declarations
export type G = number & { [G]: never };

declare const B: unique symbol; // eslint-disable-line init-declarations
export type B = number & { [B]: never };

declare const L: unique symbol; // eslint-disable-line init-declarations
export type L = number & { [L]: never };

declare const U: unique symbol; // eslint-disable-line init-declarations
export type U = number & { [U]: never };

declare const V: unique symbol; // eslint-disable-line init-declarations
export type V = number & { [V]: never };

declare const C: unique symbol; // eslint-disable-line init-declarations
export type C = number & { [C]: never };

declare const H: unique symbol; // eslint-disable-line init-declarations
export type H = number & { [H]: never };

declare const S: unique symbol; // eslint-disable-line init-declarations
export type S = number & { [S]: never };

declare const A: unique symbol; // eslint-disable-line init-declarations
export type A = number & { [A]: never };

export type Xyz = [X, Y, Z, A?];
export type Rgb = [R, G, B, A?];
export type Luv = [L, U, V, A?];
export type Lch = [L, C, H, A?];
export type Hsl = [H, S, L, A?];

export type Xyza = [X, Y, Z, A];
export type Rgba = [R, G, B, A];
export type Luva = [L, U, V, A];
export type Lcha = [L, C, H, A];
export type Hsla = [H, S, L, A];
