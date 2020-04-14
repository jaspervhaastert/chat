import React from 'react';
import {AppBar as MuiAppBar, Toolbar, Typography} from '@material-ui/core';

import {WhiteLink} from './AppBar.styled';

const AppBar: React.FC = () => {
    return (
        <MuiAppBar position="static">
            <Toolbar>
                <Typography component="h6" variant="h6">
                    <WhiteLink href="/" underline="none">
                        Chat client
                    </WhiteLink>
                </Typography>
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;
