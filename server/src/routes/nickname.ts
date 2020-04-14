import {Router, Request, Response} from 'express';


import NicknameService from '../services/NicknameService';

const createRouter = (nicknameService: NicknameService): Router => {
    const router = Router();

    router.get('/:nickname', (req: Request, res: Response) => {
        const nickname = nicknameService.getNickname({nickname: req.params.nickname});
        if (!nickname) return res.status(404).end();

        return res.json({
            nickname
        });
    });

    return router;
};

export default createRouter;
