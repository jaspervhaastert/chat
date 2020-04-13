import express, {Request, Response} from 'express';
import http from 'http';
import SocketIo, {Socket} from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = SocketIo(server);

const port = process.env.PORT || 3000;

let nicknames: string[] = [];

const getNickname = (nickname: string): string | undefined => {
    return nicknames.find(n => n === nickname);
};

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

    console.log('A user connected');
    nicknames.push(nickname);

    socket.on('disconnect', () => {
        console.log('A user disconnected');

        const nickname = socket.handshake.query.nickname;
        if (nickname) nicknames = nicknames.filter(nick => nick !== nickname);
    });
});

server.listen(port);
