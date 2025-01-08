import {Request, Response} from 'express';
import {db} from '../../db/db';
import {ParamType, UpdateInputVideoType} from '../video-types';
import {updateInputValidation} from '../../validation/video-input-validation';

export const updateVideoController = (req: Request<ParamType, UpdateInputVideoType>, res: Response) => {
    const errors = updateInputValidation(req.body);
    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors);
        return;
    }
    if (!req.params.id) {
        res.status(404).send('Provide the id of the video');
        return;
    }

    const videos = db.videos;
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].id === +req.params.id) {
            videos[i] = {...videos[i], ...req.body};
            res.sendStatus(204);
            return;
        }
    }
    res.sendStatus(404);
};