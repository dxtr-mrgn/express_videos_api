import {Request, Response} from 'express';
import {db} from '../../db/db';

export const getVideoByID = (req: Request, res: Response) => {
    const videos = db.videos;

    for (let i = 0; i < videos.length; i++) {
        if (videos[i].id === +req.params.id) {
            res.status(200).json(videos);
            return;
        }
    }
    res.send(404);
};