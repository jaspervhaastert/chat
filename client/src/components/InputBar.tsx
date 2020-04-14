import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Button, Grid, styled, TextField} from '@material-ui/core';

const TextFieldColumn = styled(Grid)({
    display: 'flex',
    flex: 1,
    paddingRight: '1em'
});

const NicknameTextField = styled(TextField)({
    display: 'flex',
    flex: 1
});

const ButtonColumn = styled(Grid)({
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-end'
});

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
                        <NicknameTextField
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
