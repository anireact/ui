import { isFunction } from '@anireact/prelude';
import { DynamicMsg, Msg, MsgId, StaticMsg } from './Msg';

export const postprocessMsg = <M>(msg: Msg<M>, params: any[], id: MsgId, fallback = id as Msg<M>): StaticMsg<M> => {
    if (isFunction(msg)) {
        try {
            return (msg as DynamicMsg<M>)(...params);
        } catch (error) {
            return postprocessMsg(fallback, params, id);
        }
    }

    return msg as StaticMsg<M>;
};
