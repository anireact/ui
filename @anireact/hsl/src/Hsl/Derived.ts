import { Hsl, Lch, Rgb } from './Components';
import { hslToLch, lchToHsl } from './HslLch';
import { lchToLuv, luvToLch } from './LchLuv';
import { luvToXyz, xyzToLuv } from './LuvXyz';
import { rgbToXyz, xyzToRgb } from './XyzRgb';

export const lchToRgb = (lcha: Lch) => xyzToRgb(luvToXyz(lchToLuv(lcha)));
export const rgbToLch = (rgba: Rgb) => luvToLch(xyzToLuv(rgbToXyz(rgba)));

export const hslToRgb = (hsla: Hsl) => lchToRgb(hslToLch(hsla));
export const rgbToHsl = (rgba: Rgb) => lchToHsl(rgbToLch(rgba));
