import {Request, Response} from 'express';
import {db} from '../../db/db';
import {deleteVideoController} from './deleteVideoController';

export const getVideosController = (req: Request, res: Response) => {
    const videos = db.videos;

    res.status(200).json(videos);
};