import {db} from '../db/db';
import {VideoDBType} from '../db/db-types';
import {CreateInputVideoType, UpdateInputVideoType} from '../videos/video-types';

export const videoRepository = {
    findVideo(id: number) {
        const videos = db.videos;
        if (id) {
            for (let i = 0; i < videos.length; i++) {
                if (videos[i].id === id) {
                    return videos[i];
                }
            }
        } else {
            return videos
        }
        return null;
    },
    createVideo(body: CreateInputVideoType) {
        const currentDate = new Date();
        const isoStringCurrentDay = currentDate.toISOString();
        currentDate.setDate(currentDate.getDate() + 1);
        const isoStringNextDay = currentDate.toISOString();

        const newVideo: VideoDBType = {
            id: Date.now() + Math.random(),
            title: body.title,
            author: body.author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: isoStringCurrentDay,
            publicationDate: isoStringNextDay,
            availableResolutions: body.availableResolutions || null,
        };

        db.videos = [...db.videos, newVideo];
        return newVideo;
    },
    updateVideo(id: number, body: UpdateInputVideoType) {
        const videos = db.videos;
        for (let i = 0; i < videos.length; i++) {
            if (videos[i].id === id) {
                videos[i] = {...videos[i], ...body};
                return true;
            }
        }
        return false;
    },
    deleteVideo(id: number) {
        const videos = db.videos;
        for (let i = 0; i < videos.length; i++) {
            if (videos[i].id === id) {
                videos.splice(i, 1);
                return true;
            }
        }
        return false;
    },
};