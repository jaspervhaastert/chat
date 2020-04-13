import React, {useState} from 'react';
import {Grid, Paper, styled} from '@material-ui/core';

import Messages from '../components/Messages';
import InputBar from '../components/InputBar';
import Message from '../interfaces/Message';

const ChatColumn = styled(Grid)({
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

const Chat: React.FC = () => {
    const [messages] = useState<Message[]>([]);

    return (
        <ChatColumn container direction="column">
            <MessagesRow container>
                <MessagesColumn container direction="column">
                    <Messages messages={messages}/>
                </MessagesColumn>
            </MessagesRow>
            <MessageBarRow container>
                <MessageBarColumn container direction="column">
                    <MessageBarPaper elevation={1}>
                        <InputBar textFieldLabel="Message" buttonLabel="Send"/>
                    </MessageBarPaper>
                </MessageBarColumn>
            </MessageBarRow>
        </ChatColumn>
    );
};

export default Chat;
