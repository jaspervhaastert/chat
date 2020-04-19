import React from 'react';
import {Grid, List, ListItem, ListItemText, Typography} from '@material-ui/core';

import {BoldTypography, NicknamesPaper} from './Nicknames.styled';

interface NicknamesProps {
    nicknames: string[];
    ownNickname: string;
}

const Nicknames: React.FC<NicknamesProps> = ({nicknames, ownNickname}) => {
    return (
        <NicknamesPaper>
            <Grid container>
                <Typography variant="h6" component="h6">Users</Typography>
            </Grid>
            <Grid container>
                <List>
                    <ListItem dense key={ownNickname}>
                        <ListItemText>
                            <BoldTypography>{ownNickname}</BoldTypography>
                        </ListItemText>
                    </ListItem>
                    {nicknames.filter(nickname => nickname !== ownNickname).map(nickname => (
                        <ListItem dense key={nickname}>
                            <ListItemText>{nickname}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </NicknamesPaper>
    );
};

export default Nicknames;
