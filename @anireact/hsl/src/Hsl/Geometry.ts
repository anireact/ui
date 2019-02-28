import { atan2, cos, hypot, sin, Vector2 } from '@anireact/prelude';
import { C } from './Components';

/**
 * Slope, intercept.
 */
export type Line = Vector2<number> & { [Line]: never };
declare const Line: unique symbol; // eslint-disable-line init-declarations

/**
 * X, y.
 */
export type Point2D = Vector2<number> & { [Point2D]: never };
declare const Point2D: unique symbol; // eslint-disable-line init-declarations

export const distanceFromOrigin = (point: Point2D) => hypot(...point) as C;
export const angleFromOrigin = (point: Point2D) => atan2(point[1], point[0]);
export const lengthOfRayUntilIntersect = (theta: number, line: Line) => line[1] / (sin(theta) - line[0] * cos(theta));
