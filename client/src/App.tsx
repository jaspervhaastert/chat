import React from 'react';
import {Grid, styled} from '@material-ui/core';
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';

import AppBar from './components/AppBar';
import Welcome from './pages/Welcome';
import Chat from './pages/Chat';

const ContentRow = styled(Grid)({
    flex: 1,
    justifyContent: 'center',
    overflow: 'auto',
    padding: '2em'
});

const useQuery = (): URLSearchParams => {
    return new URLSearchParams(useLocation().search);
};

const App: React.FC = () => {
    const query = useQuery();

    const nickname = query.get('nickname');

    return (
        <>
            <Grid container>
                <AppBar/>
            </Grid>
            <ContentRow container>
                <Switch>
                    <Route path="/" exact>
                        <Welcome/>
                    </Route>
                    <Route path="/chat" exact>
                        {nickname ? (
                            <Chat nickname={nickname}/>
                        ) : (
                            <Redirect to="/"/>
                        )}
                    </Route>
                </Switch>
            </ContentRow>
        </>
    );
};

export default App;
