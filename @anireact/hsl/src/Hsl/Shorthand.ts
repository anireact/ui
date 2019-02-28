import { Color } from './Color';
import { A, H, L, S } from './Components';

export const hsl = (h: number, s: number, l: number, a = 1) => new Color(h as H, s as S, l as L, a as A);
