import { hsl } from '@anireact/hsl';
import { Themed } from '@anireact/themed';

import { Button, Checkbox, decorate, GlobalStyle, H, Icon, P, Prop, PropK, Props, PropV, Section } from '@anireact/ui';

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
                        <Prop>
                            <PropK>Default colors:</PropK>
                            <PropV>
                                <Icon name={'state-error'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Filled with red:</PropK>
                            <PropV>
                                <Icon name={'state-error'} tintColor={hsl(10, 100, 50)} tintStyle={'fill'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Tinted with red by Yₘᵢₙ:</PropK>
                            <PropV>
                                <Icon name={'state-error'} tintColor={hsl(10, 100, 50)} tintStyle={'black'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Tinted with red by Yₘₐₓ:</PropK>
                            <PropV>
                                <Icon name={'state-error'} tintColor={hsl(10, 100, 50)} tintStyle={'white'} />
                            </PropV>
                        </Prop>
                    </Props>
                </Section>
                <Section>
                    <H>battery-low-charging</H>
                    <Props level={'base'}>
                        <Prop>
                            <PropK>Default colors:</PropK>
                            <PropV>
                                <Icon name={'battery-low-charging'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Filled with red:</PropK>
                            <PropV>
                                <Icon name={'battery-low-charging'} tintColor={hsl(10, 100, 50)} tintStyle={'fill'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Tinted with red by Yₘᵢₙ:</PropK>
                            <PropV>
                                <Icon name={'battery-low-charging'} tintColor={hsl(10, 100, 50)} tintStyle={'black'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Tinted with red by Yₘₐₓ:</PropK>
                            <PropV>
                                <Icon name={'battery-low-charging'} tintColor={hsl(10, 100, 50)} tintStyle={'white'} />
                            </PropV>
                        </Prop>
                    </Props>
                </Section>
                <Section>
                    <H>krita</H>
                    <Props level={'base'}>
                        <Prop>
                            <PropK>Default colors:</PropK>
                            <PropV>
                                <Icon name={'krita'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Filled with red:</PropK>
                            <PropV>
                                <Icon name={'krita'} tintColor={hsl(10, 100, 50)} tintStyle={'fill'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Tinted with red by Yₘᵢₙ:</PropK>
                            <PropV>
                                <Icon name={'krita'} tintColor={hsl(10, 100, 50)} tintStyle={'black'} />
                            </PropV>
                        </Prop>
                        <Prop>
                            <PropK>Tinted with red by Yₘₐₓ:</PropK>
                            <PropV>
                                <Icon name={'krita'} tintColor={hsl(10, 100, 50)} tintStyle={'white'} />
                            </PropV>
                        </Prop>
                    </Props>
                </Section>
            </Section>
            <Section level={'primary'}>
                <H>Buttons</H>
                <P>
                    <Button>Base button</Button>
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
            </Section>
            <Section level={'primary'}>
                <H>Props</H>
                <Props level={'error'}>
                    <Prop>
                        <PropK>Prop key 1:</PropK>
                        <PropV>Prop value 1.</PropV>
                    </Prop>
                    <Prop>
                        <PropK>Very long prop key 2:</PropK>
                        <PropV>Prop value 2.</PropV>
                    </Prop>
                    <Prop level={'ok'}>
                        <PropK>Prop key 3:</PropK>
                        <PropV>Very long prop value 3.</PropV>
                    </Prop>
                    <Prop>
                        <PropK>
                            Multi-
                            <br />
                            line prop key 4:
                        </PropK>
                        <PropV>Prop value 4.</PropV>
                    </Prop>
                    <Prop>
                        <PropK>Prop key 5:</PropK>
                        <PropV>
                            Multi-
                            <br />
                            line prop value 5.
                        </PropV>
                    </Prop>
                    <Prop>
                        <PropK>Last prop:</PropK>
                        <PropV>Should be even.</PropV>
                    </Prop>
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
