import React from 'react';
import { Button } from './Button';
import { decorate } from './decorate';

export type Push = Button;

export const Push = decorate<Push, HTMLButtonElement>({ name: 'Push' }, (props, { ref, className }) => {
    return <Button {...props} role={'switch'} ref={ref} className={className} />;
});
