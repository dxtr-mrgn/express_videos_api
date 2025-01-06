import {config} from 'dotenv';

config();

export const SETTINGS = {
    PORT: process.env.PORT || 3003,
    PATH: {
        VIDEOS: '/api/videos',
        ALL_DATA: '/testing/all-data/',
    },
};