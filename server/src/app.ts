import {config} from 'dotenv';

config();

import express, {Request, Response, NextFunction} from 'express';
import http from 'http';

import setupSockets from './sockets';
import nicknameRoutes from './routes/nickname';
import NicknameService from './services/NicknameService';

const app = express();
const server = http.createServer(app);

const nicknameService = new NicknameService();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
    next();
});
app.use('/nicknames', nicknameRoutes(nicknameService));

setupSockets(server, nicknameService);

const port = process.env.PORT || 3000;
server.listen(port);
