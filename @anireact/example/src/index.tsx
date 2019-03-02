import { hsl } from '@anireact/hsl';
import { Themed } from '@anireact/themed';

import { Button, Buttons, Checkbox, decorate, GlobalStyle, H, Icon, P, Props, Push, Section } from '@anireact/ui';

import React, { ReactNode } from 'react';
import { render } from 'react-dom';
import { black } from './black';

const Body = decorate<{ readonly children?: ReactNode }, never>({ name: 'Body' }, ({ children }, { theme }) => {
    return (
        <>
            {children}
            <style jsx global>{/* language=CSS */ `
                #root {
                    padding: ${theme.x};
                }
            `}</style>
        </>
    );
});

render(
    <Themed lib={[black]} id={'black'}>
        <GlobalStyle />
        <Body>
            <Section level={'primary'}>
                <H>Buttons group</H>

                <P>
                    <Buttons>
                        <Buttons.Item>Option 1</Buttons.Item>
                        <Buttons.Item checked>Option 2</Buttons.Item>
                        <Buttons.Item>Option 3</Buttons.Item>
                    </Buttons>
                </P>
            </Section>
            <Section level={'primary'}>
                <H>Buttons</H>

                <P>
                    <Button level={'base'}>Base button</Button>
                </P>
                <P>
                    <Button level={'primary'}>
                        Primary button w/
                        <br />
                        long title
                    </Button>
                </P>
                <P>
                    <Button level={'error'}>
                        Error button w/
                        <br />
                        long title
                    </Button>
                </P>
                <P>
                    <Push level={'info'} checked>
                        Checked push button
                    </Push>
                </P>
            </Section>
            <Section level={'primary'}>
                <H>Checkboxes</H>

                <P>
                    <Checkbox level={'error'}>Unchecked</Checkbox>
                </P>
                <P>
                    <Checkbox level={'ok'} checked={null}>
                        Mixed
                    </Checkbox>
                </P>
                <P>
                    <Checkbox level={'info'} checked>
                        Checked
                    </Checkbox>
                </P>
            </Section>
            <Section level={'primary'}>
                <H>Icons</H>

                <Section>
                    <H>state-error</H>
                    <Props level={'base'}>
                        <Props.Item>
                            <Props.K>Default colors:</Props.K>
                            <Props.V>
                                <Icon name={'state-error'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Filled with red:</Props.K>
                            <Props.V>
                                <Icon name={'state-error'} tintColor={hsl(10, 100, 50)} tintStyle={'fill'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Tinted with red by Yₘᵢₙ:</Props.K>
                            <Props.V>
                                <Icon name={'state-error'} tintColor={hsl(10, 100, 50)} tintStyle={'black'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Tinted with red by Yₘₐₓ:</Props.K>
                            <Props.V>
                                <Icon name={'state-error'} tintColor={hsl(10, 100, 50)} tintStyle={'white'} />
                            </Props.V>
                        </Props.Item>
                    </Props>
                </Section>
                <Section>
                    <H>battery-low-charging</H>
                    <Props level={'base'}>
                        <Props.Item>
                            <Props.K>Default colors:</Props.K>
                            <Props.V>
                                <Icon name={'battery-low-charging'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Filled with red:</Props.K>
                            <Props.V>
                                <Icon name={'battery-low-charging'} tintColor={hsl(10, 100, 50)} tintStyle={'fill'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Tinted with red by Yₘᵢₙ:</Props.K>
                            <Props.V>
                                <Icon name={'battery-low-charging'} tintColor={hsl(10, 100, 50)} tintStyle={'black'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Tinted with red by Yₘₐₓ:</Props.K>
                            <Props.V>
                                <Icon name={'battery-low-charging'} tintColor={hsl(10, 100, 50)} tintStyle={'white'} />
                            </Props.V>
                        </Props.Item>
                    </Props>
                </Section>
                <Section>
                    <H>krita</H>
                    <Props level={'base'}>
                        <Props.Item>
                            <Props.K>Default colors:</Props.K>
                            <Props.V>
                                <Icon name={'krita'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Filled with red:</Props.K>
                            <Props.V>
                                <Icon name={'krita'} tintColor={hsl(10, 100, 50)} tintStyle={'fill'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Tinted with red by Yₘᵢₙ:</Props.K>
                            <Props.V>
                                <Icon name={'krita'} tintColor={hsl(10, 100, 50)} tintStyle={'black'} />
                            </Props.V>
                        </Props.Item>
                        <Props.Item>
                            <Props.K>Tinted with red by Yₘₐₓ:</Props.K>
                            <Props.V>
                                <Icon name={'krita'} tintColor={hsl(10, 100, 50)} tintStyle={'white'} />
                            </Props.V>
                        </Props.Item>
                    </Props>
                </Section>
            </Section>
            <Section level={'primary'}>
                <H>Props</H>

                <Props level={'error'}>
                    <Props.Item>
                        <Props.K>Prop key 1:</Props.K>
                        <Props.V>Prop value 1.</Props.V>
                    </Props.Item>
                    <Props.Item>
                        <Props.K>Very long prop key 2:</Props.K>
                        <Props.V>Prop value 2.</Props.V>
                    </Props.Item>
                    <Props.Item level={'ok'}>
                        <Props.K>Prop key 3:</Props.K>
                        <Props.V>Very long prop value 3.</Props.V>
                    </Props.Item>
                    <Props.Item>
                        <Props.K>
                            Multi-
                            <br />
                            line prop key 4:
                        </Props.K>
                        <Props.V>Prop value 4.</Props.V>
                    </Props.Item>
                    <Props.Item>
                        <Props.K>Prop key 5:</Props.K>
                        <Props.V>
                            Multi-
                            <br />
                            line prop value 5.
                        </Props.V>
                    </Props.Item>
                    <Props.Item>
                        <Props.K>Last prop:</Props.K>
                        <Props.V>Should be even.</Props.V>
                    </Props.Item>
                </Props>
            </Section>
            <Section level={'primary'}>
                <H>Headings, sections, paragraphs</H>

                <H level={'base'}>Heading, level 1</H>
                <P level={'base'}>Paragraph at level 1.</P>
                <P level={'base'}>Another paragraph at level 1.</P>
                <P level={'base'}>Last paragraph at level 1.</P>
                <Section level={'base'}>
                    <H>Heading, level 2</H>
                    <P>Paragraph at level 2.</P>
                    <Section>
                        <H>Heading, level 3</H>
                        <P>Paragraph at level 3.</P>
                        <Section>
                            <H>Heading, level 4</H>
                            <P>Paragraph at level 4.</P>
                            <Section>
                                <H>Heading, level 5</H>
                                <P>Paragraph at level 5.</P>
                                <Section>
                                    <H>Heading, level 6</H>
                                    <P>Paragraph at level 6.</P>
                                </Section>
                            </Section>
                        </Section>
                    </Section>
                </Section>
                <H level={'base'}>
                    Multi-line heading,
                    <br />
                    level 1
                </H>
                <P level={'base'}>Paragraph.</P>
                <Section level={'base'}>
                    <H>
                        Multi-line heading,
                        <br />
                        level 2
                    </H>
                    <P>Paragraph.</P>
                    <Section>
                        <H>
                            Multi-line heading,
                            <br />
                            level 3
                        </H>
                        <P>Paragraph.</P>
                        <Section>
                            <H>
                                Multi-line heading,
                                <br />
                                level 4
                            </H>
                            <P>Paragraph.</P>
                            <Section>
                                <H>
                                    Multi-line heading,
                                    <br />
                                    level 5
                                </H>
                                <P>Paragraph.</P>
                                <Section>
                                    <H>
                                        Multi-line heading,
                                        <br />
                                        level 6
                                    </H>
                                    <P>Paragraph.</P>
                                </Section>
                            </Section>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </Body>
    </Themed>,
    document.querySelector('#root'),
);
