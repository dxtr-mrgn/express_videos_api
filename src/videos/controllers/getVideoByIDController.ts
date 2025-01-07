import {Request, Response} from 'express';
import {db} from '../../db/db';
import {deleteVideoController} from './deleteVideoController';

export const getVideoByIDController = (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(404).send('Provide the id of the video');
        return;
    }

    const videos = db.videos;

    for (let i = 0; i < videos.length; i++) {
        if (videos[i].id === +req.params.id) {
            res.status(200).json(videos);
            return;
        }
        res.sendStatus(404);
    }
};