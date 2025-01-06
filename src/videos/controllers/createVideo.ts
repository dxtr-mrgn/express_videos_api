import {Request, Response} from 'express';
import {InputVideoType, OutputErrorType, OutputVideoType} from '../types/video-types';
import {ResolutionsEnum, VideoDBType} from '../types/db-types';
import {db} from '../../db/db';
import {isInEnum} from '../helpers';

const inputValidation = (video: InputVideoType) => {
    const errors: any = { // объект для сбора ошибок
        errorsMessages: []
    };
// ...
    if (!Array.isArray(video.availableResolution)
        || !video.availableResolution.find(v => isInEnum(v, ResolutionsEnum))) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution'
        });
    }
    return errors;
};

export const createVideo = (req: Request<any, any, InputVideoType>, res: Response<OutputVideoType | OutputErrorType>) => {
    const errors = inputValidation(req.body);
    if (errors.errorsMessages.length) { // если есть ошибки - отправляем ошибки
        res
            .status(400)
            .json(errors);
        return;
    }

    const defaultVideo = {
        id: Date.now() + Math.random(),
        title: 't' + Date.now() + Math.random(),
        author: 'a' + Date.now() + Math.random(),
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: new Date().toISOString(),
        publicationDate: new Date().toISOString(),
    }

    const newVideo: VideoDBType = {...defaultVideo, ...req.body};
    db.videos = [...db.videos, newVideo];

    res
        .status(201)
        .json(newVideo);
};