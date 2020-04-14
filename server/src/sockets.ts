import {Server} from 'http';
import SocketIo, {Socket} from 'socket.io';

import Message from './interfaces/Message';
import NicknameService from './services/NicknameService';

const setupSockets = (server: Server, nicknameService: NicknameService): void => {
    const io = SocketIo(server);

    io.on('connection', (socket: Socket) => {
        const nickname = socket.handshake.query.nickname;
        if (!nickname || nicknameService.getNickname(nickname)) return socket.disconnect(true);

        nicknameService.addNickname(nickname);
        io.send({nickname, message: 'connected!'});
        console.log(`${nickname} connected`);

        socket.on('message', (message: Message, acknowledge: () => void) => {
            console.log(`${message.nickname}: ${message.message}`);

            socket.broadcast.send(message);
            acknowledge();
        });

        socket.on('disconnect', () => {
            const nickname = socket.handshake.query.nickname;
            if (nickname) nicknameService.removeNickname(nickname);

            console.log(`${nickname} disconnected`);
        });
    });
};

export default setupSockets;
