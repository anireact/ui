import { Vector3X } from '@anireact/prelude';
import { Rgb } from './Components';

export const rLuma = 0.2126;
export const gLuma = 0.7152;
export const bLuma = 0.0722;

export const getLuma = ([r, g, b]: Rgb | Vector3X<number>): number => r * rLuma + g * gLuma + b * bLuma;
