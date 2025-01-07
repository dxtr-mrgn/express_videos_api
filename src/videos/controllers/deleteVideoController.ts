import {Request, Response} from 'express';
import {db} from '../../db/db';

export const deleteVideoController = (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(404).send('Provide the id of the video');
        return;
    }

    const videos = db.videos;
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].id === +req.params.id) {
            videos.splice(i, 1);
            res.sendStatus(204);
            return;
        }
    }
    res.sendStatus(404);
};