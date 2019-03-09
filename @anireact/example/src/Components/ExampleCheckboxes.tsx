import { Button, Checkbox, Flex, H, Section } from '@anireact/ui';
import React, { useState } from 'react';

export const ExampleCheckboxes = () => {
    const [error, setError] = useState(true as null | boolean);
    const [warning, setWarning] = useState(true as null | boolean);
    const [ok, setOk] = useState(true as null | boolean);
    const [info, setInfo] = useState(true as null | boolean);
    const [base, setBase] = useState(true as null | boolean);

    return (
        <Section>
            <H>Checkboxes</H>

            <Flex density={'regular'}>
                <Flex>
                    <Checkbox level={'error'} checked={error} onClick={() => setError(!error)}>
                        State: error
                    </Checkbox>
                    <Checkbox level={'warning'} checked={warning} onClick={() => setWarning(!warning)}>
                        State: warning
                    </Checkbox>
                    <Checkbox level={'ok'} checked={ok} onClick={() => setOk(!ok)}>
                        State: ok
                    </Checkbox>
                    <Checkbox level={'info'} checked={info} onClick={() => setInfo(!info)}>
                        State: info
                    </Checkbox>
                    <Checkbox level={'normal'} checked={base} onClick={() => setBase(!base)}>
                        State: normal
                    </Checkbox>
                </Flex>

                <Button
                    onClick={() => {
                        setError(null);
                        setWarning(null);
                        setOk(null);
                        setInfo(null);
                        setBase(null);
                    }}
                >
                    Reset all to mixed/indeterminate
                </Button>
            </Flex>
        </Section>
    );
};
