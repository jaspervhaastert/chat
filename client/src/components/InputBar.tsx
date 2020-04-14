import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Button, Grid} from '@material-ui/core';

import {ButtonColumn, TextField, TextFieldColumn} from './InputBar.styled';

type CanSubmit = (value: string) => Promise<boolean>;
type OnSubmit = (value: string) => void;

interface InputBarProps {
    textFieldLabel: string;
    buttonLabel: string;
    canSubmit: CanSubmit;
    onSubmit: OnSubmit;
}

const InputBar: React.FC<InputBarProps> = ({textFieldLabel, buttonLabel, canSubmit, onSubmit}) => {
    const [value, setValue] = useState<string>('');
    const [isButtonEnabled, setButtonEnabled] = useState<boolean>(false);

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
    };

    useEffect(() => {
        canSubmit(value)
            .then(result => setButtonEnabled(result))
            .catch(() => setButtonEnabled(false));
    }, [canSubmit, value]);

    return (
        <Grid container direction="column">
            <Grid container>
                <Grid container component="form" onSubmit={handleSubmit}>
                    <TextFieldColumn item>
                        <TextField
                            label={textFieldLabel}
                            autoComplete="off"
                            value={value}
                            onChange={handleValueChange}
                        />
                    </TextFieldColumn>
                    <ButtonColumn item>
                        <Button variant="contained" color="primary" type="submit" disabled={!isButtonEnabled}>
                            {buttonLabel}
                        </Button>
                    </ButtonColumn>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default InputBar;
