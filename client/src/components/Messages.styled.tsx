import {Grid, Paper, styled, Typography} from '@material-ui/core';

const MessagesPaper = styled(Paper)({
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    padding: '1em'
});

const PaperRow = styled(Grid)({
    maxHeight: '100%',
    overflow: 'auto'
});

const InlineTypography = styled(Typography)({
    display: 'inline'
});

const BoldInlineTypography = styled(InlineTypography)({
    fontWeight: 'bold'
});

export {
    MessagesPaper,
    PaperRow,
    InlineTypography,
    BoldInlineTypography
};
