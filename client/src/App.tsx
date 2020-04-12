import React from 'react';
import {Grid, styled} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppBar from './components/AppBar';
import Welcome from './pages/Welcome';

const MainGrid = styled(Grid)({
    flexGrow: 1,
    justifyContent: 'center',
    padding: '2em'
});

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppBar/>
            <MainGrid container>
                <Switch>
                    <Route path="/" exact>
                        <Welcome/>
                    </Route>
                </Switch>
            </MainGrid>
        </BrowserRouter>
    );
};

export default App;
