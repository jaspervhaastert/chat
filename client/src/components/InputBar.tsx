import React, {ChangeEvent, FormEvent, useState} from 'react';
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

interface InputBarProps {
    textFieldLabel: string;
    buttonLabel: string;
    onSubmit: (value: string) => void;
}

const InputBar: React.FC<InputBarProps> = ({textFieldLabel, buttonLabel, onSubmit}) => {
    const [value, setValue] = useState<string>('');

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (!value) return;

        onSubmit(value);
        setValue('');
    };

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
                        <Button variant="contained" color="primary" type="submit" disabled={!value}>
                            {buttonLabel}
                        </Button>
                    </ButtonColumn>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default InputBar;
