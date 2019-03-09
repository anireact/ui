import React from 'react';
import { Button } from './Button';
import { ui } from './ui';

export interface ButtonsItem extends Button {}

export const ButtonsItem = ui((rest: ButtonsItem, {}) => <Button {...rest} role={'radio'} />, 'ButtonsItem');
