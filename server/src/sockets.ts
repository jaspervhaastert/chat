import { Server } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';

import Message from './interfaces/Message';
import NicknameService from './services/NicknameService';
import Nickname from './interfaces/Nickname';

const setupSockets = (server: Server, nicknameService: NicknameService): void => {
    const io = new SocketServer(server, {
        cors: {
            origin: process.env.CLIENT_URL
        }
    });

    io.on('connection', (socket: Socket) => {
        let nicknameString = socket.handshake.query.nickname;
        if (Array.isArray(nicknameString)) nicknameString = nicknameString[0];
        const nickname: Nickname = { nickname: nicknameString };

        if (!nickname || nicknameService.getNickname(nickname)) return socket.disconnect(true);

        nicknameService.addNickname(nickname);
        io.send({ nickname: nickname.nickname, message: 'connected!' });
        console.log(`${nickname.nickname} connected`);

        io.emit('nicknames', nicknameService.getNicknames());

        socket.on('message', (message: Message, acknowledge: () => void) => {
            console.log(`${message.nickname}: ${message.message}`);

            socket.broadcast.emit('message', message);
            acknowledge();
        });

        socket.on('disconnect', () => {
            let nicknameString = socket.handshake.query.nickname;
            if (Array.isArray(nicknameString)) nicknameString = nicknameString[0];
            const nickname: Nickname = { nickname: nicknameString };

            if (nickname) nicknameService.removeNickname(nickname);

            console.log(`${nickname.nickname} disconnected`);
        });
    });
};

export default setupSockets;
