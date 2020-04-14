import React, {useEffect, useState} from 'react';
import {Grid, Paper, styled} from '@material-ui/core';
import io from 'socket.io-client';

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

interface ChatProps {
    serverUrl: string;
    nickname: string;
}

const Chat: React.FC<ChatProps> = ({serverUrl, nickname}) => {
    const [socket, setSocket] = useState<SocketIOClient.Socket>();
    const [messages, setMessages] = useState<Message[]>([]);

    const canMessageBeSent = async (): Promise<boolean> => {
        return true;
    };

    const sendMessage = (message: string): void => {
        const messageObject = {nickname, message};
        socket?.send(messageObject, () => {
            setMessages(messages => [...messages, messageObject]);
        });
    };

    useEffect(() => {
        const socket = io(serverUrl, {
            query: {
                nickname
            }
        });
        setSocket(socket);

        socket.on('message', (message: Message) => {
            setMessages(messages => [...messages, message]);
        });
    }, [serverUrl, nickname]);

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
                        <InputBar
                            textFieldLabel="Message"
                            buttonLabel="Send"
                            canSubmit={canMessageBeSent}
                            onSubmit={sendMessage}
                        />
                    </MessageBarPaper>
                </MessageBarColumn>
            </MessageBarRow>
        </ChatColumn>
    );
};

export default Chat;
