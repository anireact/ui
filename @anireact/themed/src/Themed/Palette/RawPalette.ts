import { Color } from '@anireact/hsl';
import { Vector2, Vector3, Vector4 } from '@anireact/prelude';

export interface RawPalette {
    readonly view: Color;

    readonly base: {
        readonly backdrop: Vector4<number>;
        readonly focus: Vector4<number>;

        readonly active: Vector4<number>;
        readonly hover: Vector4<number>;
        readonly even: Vector4<number>;
        readonly glow: Vector4<number>;
        readonly bg: Vector4<number>;
        readonly fg: Vector4<number>;

        readonly plain: {
            readonly active: Vector4<number>;
            readonly hover: Vector4<number>;
            readonly even: Vector4<number>;
            readonly glow: Vector4<number>;
            readonly bg: Vector4<number>;
            readonly fg: Vector4<number>;
        };
    };

    readonly disabled: Vector2<number>;

    readonly primary: number;
    readonly secondary: number;
    readonly info: number;
    readonly ok: number;
    readonly warning: number;
    readonly error: number;

    readonly backdrop: Vector3<number>;
    readonly focus: Vector3<number>;
    readonly active: Vector3<number>;
    readonly hover: Vector3<number>;
    readonly even: Vector3<number>;
    readonly glow: Vector3<number>;
    readonly bg: Vector3<number>;
    readonly fg: Vector3<number>;

    readonly plain: {
        readonly active: Vector3<number>;
        readonly hover: Vector3<number>;
        readonly even: Vector3<number>;
        readonly glow: Vector3<number>;
        readonly bg: Vector3<number>;
        readonly fg: Vector3<number>;
    };
}
