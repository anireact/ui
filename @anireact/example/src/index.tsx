import { Themed } from '@anireact/themed';
import { Application, Global, H, P, Section } from '@anireact/ui';
import React from 'react';
import { render } from 'react-dom';
import { black } from './black';
import { ExampleButtons } from './Components/ExampleButtons';
import { ExampleCheckboxes } from './Components/ExampleCheckboxes';
import { ExampleIcons } from './Components/ExampleIcons';

render(
    <Themed lib={[black]} id={'black'}>
        <Global />
        <Application>
            <ExampleButtons />
            <ExampleCheckboxes />
            <ExampleIcons />
            <Section>
                <H>Headings, sections, paragraphs</H>

                <H>Heading, level 1</H>
                <P>
                    私は先刻いよいよこの講演院というものの時に出だた。もう今日を表裏方しかほとんどその批評たですまでの向いて行くなかろをは混同食っでないと、多少にもするたですならで。哲学にしです事もきっと直接を依然としてだですだ。
                </P>
                <P>
                    現に岩崎さんに希望自分さらに尊重にもたた当人この自信あなたか交渉をというご講演たですですませて、その今日はどこか腰金力でしから、岡田君のはずを二つのそこにまずおぼんやりと知らて私国と皆享有とつけ込むように最もお話に握っただば、もしとうとう留学を申したがおきです事から掘りますた。さてそれからお骨が尊ぶ事はどう有名と云っあるて、わが人間をは取りつかれませてにおいて教師がすまていけたなけれ。そうした後足の時この繰り返しもそれいっぱいからいうたかと三宅さんをしだろだろ、私立の今たというお矛盾うならですと、春のところを師範に今日ばかりの空に今指すから行くから、そうの場合の知れてそのついでをけっして見えですんと帰っんものうが、ないたたけれどもそれほどご事なっだのたなだろ。
                </P>
                <P>
                    また個性か不安か切望をしないが、将来ごろ金力があるからいるない上にご命令の大体にしないませ。場合がもついに致して得んないですたと、まるでたとい喰わから立脚はこう悪いん方です。あるいは同応用へきまらてはいるだものたから、主義には、何しろ私かいて考えられるなない乗っれあっますと聞えるし、ろはしているましで。
                </P>
                <Section>
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
            </Section>
        </Application>
    </Themed>,
    document.querySelector('#root'),
);
