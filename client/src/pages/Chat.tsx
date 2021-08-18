import React, {useEffect, useState} from 'react';
import io, {Socket} from 'socket.io-client';

import {Column, MessageBarColumn, MessageBarPaper, MessageBarRow, MessagesColumn, MessagesRow} from './Chat.styled';
import Messages from '../components/Messages';
import InputBar from '../components/InputBar';
import Message from '../interfaces/Message';
import Nicknames from '../components/Nicknames';
import Nickname from '../interfaces/Nickname';

interface ChatProps {
    serverUrl: string;
    nickname: string;
}

const Chat: React.FC<ChatProps> = ({serverUrl, nickname}) => {
    const [socket, setSocket] = useState<Socket>();
    const [messages, setMessages] = useState<Message[]>([]);
    const [nicknames, setNicknames] = useState<string[]>([]);

    const canMessageBeSent = async (value: string): Promise<boolean> => {
        return !!value;
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

        socket.on('nicknames', (nicknames: Nickname[]) => {
            const nicknameStrings = nicknames.map(n => n.nickname);
            setNicknames(nicknameStrings);
        });
    }, [serverUrl, nickname]);

    return (
        <>
            <Column item xs={10}>
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
            </Column>
            <Column item xs={2}>
                <Nicknames nicknames={nicknames} ownNickname={nickname}/>
            </Column>
        </>
    );
};

export default Chat;
