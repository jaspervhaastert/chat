import {Grid, styled, TextField as MuiTextField} from '@material-ui/core';

const TextFieldColumn = styled(Grid)({
    display: 'flex',
    flex: 1,
    paddingRight: '1em'
});

const TextField = styled(MuiTextField)({
    display: 'flex',
    flex: 1
});

const ButtonColumn = styled(Grid)({
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-end'
});

export {
    TextFieldColumn,
    TextField,
    ButtonColumn
};
