const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server);

const port = process.env.PORT || 3000;

io.on('connection', socket => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(port);
