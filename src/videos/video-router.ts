import {Router} from 'express';
import {getVideosController} from './controllers/getVideosController';
import {createVideoController} from './controllers/createVideoController';
import {getVideoByIDController} from './controllers/getVideoByIDController';
import {updateVideoController} from './controllers/updateVideoController';
import {deleteVideoController} from './controllers/deleteVideoController';


export const videosRouter = Router();

videosRouter.get('/', getVideosController);
videosRouter.post('/', createVideoController);
videosRouter.get('/:id', getVideoByIDController);
videosRouter.put('/:id', updateVideoController);
videosRouter.delete('/:id', deleteVideoController);


