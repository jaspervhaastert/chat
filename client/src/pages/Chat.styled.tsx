import {Grid, Paper, styled} from '@material-ui/core';

const Column = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
});

const MessagesRow = styled(Grid)({
    flex: 1,
    overflow: 'hidden',
    marginBottom: '0.5em'
});

const MessagesColumn = styled(Grid)({
    flex: 1,
    height: '100%',
    padding: '0.1em'
});

const MessageBarRow = styled(Grid)({
    display: 'flex'
});

const MessageBarColumn = styled(Grid)({
    padding: '0.1em'
});

const MessageBarPaper = styled(Paper)({
    display: 'flex',
    padding: '1em'
});

export {
    Column,
    MessagesRow,
    MessagesColumn,
    MessageBarRow,
    MessageBarColumn,
    MessageBarPaper
};
