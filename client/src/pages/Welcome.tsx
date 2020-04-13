import React from 'react';
import {Grid, Paper, styled, Typography} from '@material-ui/core';
import InputBar from '../components/InputBar';

const WelcomePaper = styled(Paper)({
    padding: '1em'
});

const Welcome: React.FC = () => {
    const redirectToChat = (nickname: string): void => {
        window.location.href = `/chat?nickname=${nickname}`;
    };

    return (
        <Grid container direction="column" justify="center">
            <Grid container justify="center">
                <Grid item xs={4}>
                    <WelcomePaper elevation={1}>
                        <Typography variant="h6" component="h6" color="primary" gutterBottom>
                            Welcome
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Please enter a nickname to join the chat.
                        </Typography>
                        <InputBar textFieldLabel="Nickname" buttonLabel="Submit" onSubmit={redirectToChat}/>
                    </WelcomePaper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Welcome;
