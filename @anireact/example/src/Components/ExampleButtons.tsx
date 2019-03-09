import { Button, Flex, H, Section } from '@anireact/ui';
import React from 'react';

export const ExampleButtons = () => {
    return (
        <Section>
            <H>Buttons</H>

            <Flex density={'regular'}>
                <Button level={'error'}>State: error</Button>
                <Button level={'warning'}>State: warning</Button>
                <Button level={'ok'}>State: ok</Button>
                <Button level={'info'}>State: info</Button>
                <Button level={'normal'}>State: normal</Button>
            </Flex>
        </Section>
    );
};
