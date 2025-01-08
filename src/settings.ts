import {config} from 'dotenv';

config();

export const SETTINGS = {
    PORT: process.env.PORT || 3003,
    PATH: {
        VIDEOS: 'https://express-videos-api.vercel.app/videos',
        ALL_DATA: 'https://express-videos-api.vercel.app/testing/all-data/',
    },
};