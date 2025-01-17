import express, {Request, Response} from 'express';
import {SETTINGS} from './settings';
import {videosRouter} from './videos/video-controller';
import {setDB} from './db/db';

export const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({version: '6.0'});
});

app.delete(SETTINGS.PATH.ALL_DATA, (req: Request, res: Response) => {
    setDB();
    res.send(204);
});


app.use(SETTINGS.PATH.VIDEOS, videosRouter);
