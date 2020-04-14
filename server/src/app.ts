import {config} from 'dotenv';
config();

import express, {Request, Response, NextFunction} from 'express';
import http from 'http';
import SocketIo, {Socket} from 'socket.io';
import Message from './interfaces/Message';

const app = express();
const server = http.createServer(app);
const io = SocketIo(server);

const port = process.env.PORT || 3000;

let nicknames: string[] = [];

const getNickname = (nickname: string): string | undefined => {
    return nicknames.find(n => n === nickname);
};

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
    next();
});

app.get('/nicknames/:nickname', (req: Request, res: Response) => {
    const nickname = getNickname(req.params.nickname);
    if (!nickname) return res.status(404).end();

    return res.json({
        nickname
    });
});

io.on('connection', (socket: Socket) => {
    const nickname = socket.handshake.query.nickname;
    if (!nickname || getNickname(nickname)) return socket.disconnect(true);

    console.log(`${nickname} connected`);
    nicknames.push(nickname);

    socket.on('message', (message: Message, acknowledge: () => void) => {
        console.log(`${message.nickname}: ${message.message}`);

        socket.broadcast.send(message);
        acknowledge();
    });

    socket.on('disconnect', () => {
        const nickname = socket.handshake.query.nickname;
        if (nickname) nicknames = nicknames.filter(nick => nick !== nickname);

        console.log(`${nickname} disconnected`);
    });
});

server.listen(port);
