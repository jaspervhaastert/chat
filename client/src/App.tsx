import React from 'react';
import {Grid, styled} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppBar from './components/AppBar';
import Welcome from './pages/Welcome';
import Chat from './pages/Chat';

const ContentRow = styled(Grid)({
    flex: 1,
    justifyContent: 'center',
    overflow: 'auto',
    padding: '2em'
});

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Grid container>
                <AppBar/>
            </Grid>
            <ContentRow container>
                <Switch>
                    <Route path="/" exact>
                        <Welcome/>
                    </Route>
                    <Route path="/chat" exact>
                        <Chat/>
                    </Route>
                </Switch>
            </ContentRow>
        </BrowserRouter>
    );
};

export default App;
