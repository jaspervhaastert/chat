import React, {useEffect, useRef} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

import {BoldInlineTypography, InlineTypography, MessagesPaper, PaperRow} from './Messages.styled';
import Message from '../interfaces/Message';

interface MessagesProps {
    messages: Message[];
}

const Messages: React.FC<MessagesProps> = ({messages}) => {
    const paperRow = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!paperRow.current) return;
        paperRow.current.scrollTop = paperRow.current.scrollHeight;
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
