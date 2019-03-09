import { IconName } from '@anireact/icons';
import { map } from '@anireact/prelude';
import { Level } from '@anireact/themed';

import {
    Buttons,
    ButtonsItem,
    Flex,
    Frame,
    H,
    Icon,
    Label,
    Labelled,
    Legend,
    Proplist,
    ProplistItem,
    ProplistK,
    ProplistV,
    Section,
    ui,
} from '@anireact/ui';

import React, { useState } from 'react';

const icons: ReadonlyArray<IconName> = ['krita', 'battery-low-charging', 'state-error'];
const levels: ReadonlyArray<Level> = ['error', 'warning', 'ok', 'info', 'normal'];

export const ExampleIcons = ui(({  }: Section, { theme }) => {
    const [icon, setIcon] = useState('krita' as IconName);
    const [level, setLevel] = useState('error' as Level);

    const tint = theme[level].plain.fg;

    return (
        <Section>
            <H>Icons</H>

            <Flex density={'regular'}>
                <Proplist>
                    <ProplistItem>
                        <ProplistK>Default colors:</ProplistK>
                        <ProplistV>
                            <Icon name={icon} />
                        </ProplistV>
                    </ProplistItem>
                    <ProplistItem>
                        <ProplistK>Filled:</ProplistK>
                        <ProplistV>
                            <Icon name={icon} tintColor={tint} tintStyle={'fill'} />
                        </ProplistV>
                    </ProplistItem>
                    <ProplistItem>
                        <ProplistK>Tinted by Yₘᵢₙ:</ProplistK>
                        <ProplistV>
                            <Icon name={icon} tintColor={tint} tintStyle={'black'} />
                        </ProplistV>
                    </ProplistItem>
                    <ProplistItem>
                        <ProplistK>Tinted by Yₘₐₓ:</ProplistK>
                        <ProplistV>
                            <Icon name={icon} tintColor={tint} tintStyle={'white'} />
                        </ProplistV>
                    </ProplistItem>
                </Proplist>
                <Frame level={'info'}>
                    <Legend>Options</Legend>
                    <Flex density={'regular'}>
                        <Labelled>
                            <Label>Icon:</Label>
                            <Buttons>
                                {map(icons, i => (
                                    <ButtonsItem key={i} checked={icon === i} onClick={() => setIcon(i)}>
                                        {i}
                                    </ButtonsItem>
                                ))}
                            </Buttons>
                        </Labelled>
                        <Labelled>
                            <Label>Tint color:</Label>
                            <Buttons>
                                {map(levels, l => (
                                    <ButtonsItem key={l} checked={level === l} onClick={() => setLevel(l)}>
                                        {l}
                                    </ButtonsItem>
                                ))}
                            </Buttons>
                        </Labelled>
                    </Flex>
                </Frame>
            </Flex>
        </Section>
    );
}, 'ExampleIcons');
