import {Request, Response} from 'express';
import {db} from '../../db/db';

export const deleteVideo = (req: Request, res: Response) => {
    const videos = db.videos;
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].id === +req.params.id) {
            videos.splice(i, 1);
            res.sendStatus(204);
            return;
        }
    }
    res.send(404);
};