import request from 'supertest';
import {app} from '../src/app';
import dotenv from 'dotenv';
import {CreateInputVideoType} from '../src/videos/video-types';
import {SETTINGS} from '../src/settings';

dotenv.config();

describe('/videos', () => {
    let newlyCreatedVideo: any = null;

    beforeAll(async () => {
        await request(app).delete(SETTINGS.PATH.ALL_DATA).expect(204);
    });

    it('The DB should be empty after clearing', async () => {
        const URL = SETTINGS.PATH.VIDEOS
        console.log("URL: " + URL);

        const res = await request(app)
            .get(URL)
            .expect(200);

        console.log("Response: ");
        console.log(res.body);

        expect(res.body).toEqual([]);
    });

    it('should create a Video', async () => {
        const URL = SETTINGS.PATH.VIDEOS
        console.log("URL: " + URL);

        const newVideo: CreateInputVideoType = {
            title: 't1',
            author: 'a1',
            availableResolutions: ['P144']
        };

        const res = await request(app)
            .post(SETTINGS.PATH.VIDEOS)
            .send(newVideo)
            .expect(201);

        newlyCreatedVideo = res.body;
        console.log("Response: ");
        console.log(res.body);

        expect(res.body.availableResolutions).toEqual(newVideo.availableResolutions);
        expect(res.body.title).toEqual(newVideo.title);
        expect(res.body.author).toEqual(newVideo.author);
    });

    it('should get a newly created video', async () => {
        const URL = SETTINGS.PATH.VIDEOS + '/' + newlyCreatedVideo?.id;
        console.log("URL: " + URL);

        const res = await request(app)
            .get(URL)
            .expect(200);

        console.log("Response: ");
        console.log(res.body);

        expect(res.body).toEqual(newlyCreatedVideo);
    });
});
