import {Request, Response} from 'express';
import {CreateInputVideoType, OutputErrorType, OutputVideoType} from '../video-types';
import {VideoDBType} from '../../db/db-types';
import {db} from '../../db/db';
import {createInputValidation} from '../../validation/video-input-validation';

export const createVideoController = (req: Request<any, any, CreateInputVideoType>, res: Response<OutputVideoType | OutputErrorType>) => {
    const errors = createInputValidation(req.body);
    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors);
        return;
    }


    const currentDate = new Date();
    const isoStringCurrentDay = currentDate.toISOString();
    currentDate.setDate(currentDate.getDate() + 1);
    const isoStringNextDay = currentDate.toISOString();

    const defaultVideo = {
        id: Date.now() + Math.random(),
        title: req.body.title,
        author: req.body.author,
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: isoStringCurrentDay,
        publicationDate: isoStringNextDay,
        availableResolution: req.body.availableResolution || null,
    };

    const newVideo: VideoDBType = {...defaultVideo, ...req.body};
    db.videos = [...db.videos, newVideo];

    res
        .status(201)
        .json(newVideo);
};