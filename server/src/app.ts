import http from 'http';
import SocketIo, {Socket} from 'socket.io';

const server = http.createServer();
const io = SocketIo(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket: Socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(port);
