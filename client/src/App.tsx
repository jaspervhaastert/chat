import React from 'react';

import './App.css';
import {AppBar, Button, Grid, Paper, TextField, Toolbar, Typography} from '@material-ui/core';

const App: React.FC = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography component="h1">
                        Chat client
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid component="main" justify="center">
                <Grid direction="column" xs={6} justify="center" className="flex">
                    <Grid item>
                        <Paper elevation={1} className="paper">
                            <Typography variant="h6" component="h2" gutterBottom>
                                Welcome
                            </Typography>
                            <form>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <TextField id="nickname" label="Nickname"/>
                                    </Grid>
                                    <Grid item xs={2} className="flex" alignItems="flex-end">
                                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default App;
