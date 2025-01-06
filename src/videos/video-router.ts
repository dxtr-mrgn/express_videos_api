import {Router} from 'express';
import {getVideos} from './controllers/getVideos';
import {createVideo} from './controllers/createVideo';
import {getVideoByID} from './controllers/getVideoByID';
import {updateVideo} from './controllers/updateVideo';
import {deleteVideo} from './controllers/deleteVideo';


export const videosRouter = Router();

videosRouter.get('/', getVideos);
videosRouter.post('/', createVideo);
videosRouter.get('/:id', getVideoByID);
videosRouter.put('/:id', updateVideo);
videosRouter.delete('/:id', deleteVideo);


