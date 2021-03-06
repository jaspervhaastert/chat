import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import {WelcomePaper} from './Welcome.styled';
import InputBar from '../components/InputBar';

interface WelcomeProps {
    serverUrl: string;
}

const Welcome: React.FC<WelcomeProps> = ({serverUrl}) => {
    const canNicknameBeSubmit = async (nickname: string): Promise<boolean> => {
        if (!nickname) return false;

        try {
            const response = await fetch(`${serverUrl}/nicknames/${nickname}`, {
                headers: {
                    Accept: 'application/json'
                }
            });
            return response.status === 404;
        } catch (e) {
            console.error(e);
            return false;
        }
    };

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
                        <InputBar
                            textFieldLabel="Nickname"
                            buttonLabel="Submit"
                            canSubmit={canNicknameBeSubmit}
                            onSubmit={redirectToChat}
                        />
                    </WelcomePaper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Welcome;
