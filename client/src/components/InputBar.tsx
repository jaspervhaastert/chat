import React from 'react';
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
}

const InputBar: React.FC<InputBarProps> = ({textFieldLabel, buttonLabel}) => {
    return (
        <Grid container direction="column">
            <Grid container>
                <Grid container component="form">
                    <TextFieldColumn item>
                        <NicknameTextField label={textFieldLabel} autoComplete="off"/>
                    </TextFieldColumn>
                    <ButtonColumn item>
                        <Button variant="contained" color="primary" type="submit">{buttonLabel}</Button>
                    </ButtonColumn>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default InputBar;
