import React, {useEffect, useRef} from 'react';
import {Grid, List, ListItem, ListItemText, Paper, styled, Typography} from '@material-ui/core';
import Message from '../interfaces/Message';

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

interface MessagesProps {
    messages: Message[];
}

const Messages: React.FC<MessagesProps> = ({messages}) => {
    const paperRow = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (paperRow.current) {
            paperRow.current.scrollTop = paperRow.current.scrollHeight;
        }
    }, [paperRow, messages]);

    return (
        <MessagesPaper elevation={1}>
            <PaperRow container ref={paperRow}>
                <List>
                    {
                        messages.map((message, index) => (
                            <ListItem key={index}>
                                <ListItemText disableTypography>
                                    <BoldInlineTypography>{message.nickname}: </BoldInlineTypography>
                                    <InlineTypography>{message.message}</InlineTypography>
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </PaperRow>
        </MessagesPaper>
    );
};

export default Messages;
