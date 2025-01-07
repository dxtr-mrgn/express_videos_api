import request from 'supertest';
import {app} from '../src/app';
import dotenv from 'dotenv';
import {InputVideoType} from '../src/videos/video-types';
import {SETTINGS} from '../src/settings';

dotenv.config();

describe('/videos', () => {
    let newlyCreatedVideo: any = null;

    beforeAll(async () => {
        await request(app).delete(SETTINGS.PATH.ALL_DATA).expect(204);
    });

    it('should create', async () => {
        const newVideo: InputVideoType = {
            title: 't1',
            author: 'a1',
            availableResolution: ['P144']
        };

        const res = await request(app)
            .post(SETTINGS.PATH.VIDEOS)
            .send(newVideo)
            .expect(201);

        newlyCreatedVideo = res.body;
        console.log(res.body);

        expect(res.body.availableResolution).toEqual(newVideo.availableResolution);
        expect(res.body.title).toEqual(newVideo.title);
        expect(res.body.author).toEqual(newVideo.author);
    });

    it('should get', async () => {
        const URL = SETTINGS.PATH.VIDEOS + '/' + newlyCreatedVideo?.id
        console.log(URL)

        const res = await request(app)
            .get(URL)
            .expect(200);

        console.log(res.body);

        expect(res.body[0]).toEqual(newlyCreatedVideo);
        expect(res.body.length).toEqual(1);
    });
});
