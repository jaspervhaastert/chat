import {Paper, styled, Typography} from '@material-ui/core';

const NicknamesPaper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'scroll',
    padding: '1em'
});

const BoldTypography = styled(Typography)({
    fontWeight: 'bold'
});

export {
    NicknamesPaper,
    BoldTypography
};
