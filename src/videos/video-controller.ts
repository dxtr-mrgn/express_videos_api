import {Request, Response, Router} from 'express';
import {CreateInputVideoType, OutputErrorType, OutputVideoType, ParamType, UpdateInputVideoType} from './video-types';
import {VideoDBType} from '../db/db-types';
import {db} from '../db/db';
import {createInputValidation, updateInputValidation} from '../validation/video-input-validation';
import {videoRepository} from '../repositories/video-repository';

export const videosRouter = Router();

export const videoController = {
    getVideos(req: Request, res: Response) {
        const videos = db.videos;

        res.status(200).json(videos);
    },
    createVideo(req: Request<any, any, CreateInputVideoType>, res: Response<OutputVideoType | OutputErrorType>) {
        const errors = createInputValidation(req.body);
        if (errors.errorsMessages.length) {
            res
                .status(400)
                .json(errors);
            return;
        }

        const newVideo = videoRepository.createVideo(req.body);
        if (!newVideo) {
            res
                .status(201)
                .json(newVideo);
        }
    },
    updateVideo(req: Request<ParamType, UpdateInputVideoType>, res: Response) {
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

        const video = videoRepository.updateVideo(+req.params.id, req.body);
        if (video) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404);
        }
    },
    getVideoByID(req: Request, res: Response) {
        if (!req.params.id) {
            res.status(404).send('Provide the id of the video');
            return;
        }
        const video = videoRepository.findVideo(+req.params.id);
        if (video) {
            res.status(200).json(video)
        } else {
            res.sendStatus(404);
        }
    },
    deleteVideo(req: Request, res: Response) {
        if (!req.params.id) {
            res.status(404).send('Provide the id of the video');
            return;
        }

        const video = videoRepository.deleteVideo(+req.params.id);
        if (video) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404);
        }
    }
};

videosRouter.get('/', videoController.getVideos);
videosRouter.post('/', videoController.createVideo);
videosRouter.get('/:id', videoController.getVideoByID);
videosRouter.put('/:id', videoController.updateVideo);
videosRouter.delete('/:id', videoController.deleteVideo);