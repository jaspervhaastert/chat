import React from 'react';
import {AppBar as MuiAppBar, Link, styled, Toolbar, Typography} from '@material-ui/core';

const WhiteLink = styled(Link)({
    color: 'white'
});

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
