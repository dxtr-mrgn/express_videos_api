import {Request, Response} from 'express';
import {db} from '../../db/db';
import {InputVideoType, OutputVideoType, ParamType} from '../types/video-types';
import {VideoDBType} from '../types/db-types';

export const updateVideo = (req: Request<ParamType, InputVideoType>, res: Response<VideoDBType>) => {
    const videos = db.videos;
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].id === +req.params.id) {
            videos[i] = {...videos[i], ...req.body};
            res.status(201).json(videos[i]);
            return;
        }
    }
    res.sendStatus(404);
};