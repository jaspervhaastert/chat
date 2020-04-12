import React from 'react';
import {Button, Grid, Paper, styled, TextField, Typography} from '@material-ui/core';

const FlexGrid = styled(Grid)({
    display: 'flex'
});

const WelcomePaper = styled(Paper)({
    padding: '1em'
});

const NicknameColumn = styled(FlexGrid)({
    paddingRight: '1em'
});

const NicknameTextField = styled(TextField)({
    display: 'flex',
    flexGrow: 1
});

const Welcome: React.FC = () => {
    return (
        <Grid container direction="column" xs={4} justify="center">
            <Grid item>
                <WelcomePaper elevation={1}>
                    <Typography variant="h6" component="h6" color="primary" gutterBottom>
                        Welcome
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Please enter a nickname to join the chat.
                    </Typography>
                    <form>
                        <Grid container>
                            <NicknameColumn item xs={10}>
                                <NicknameTextField id="nickname" label="Nickname"/>
                            </NicknameColumn>
                            <FlexGrid item xs={2} alignItems="flex-end" justify="flex-end">
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </FlexGrid>
                        </Grid>
                    </form>
                </WelcomePaper>
            </Grid>
        </Grid>
    );
};

export default Welcome;
