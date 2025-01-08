import {config} from 'dotenv';

config();

export const SETTINGS = {
    PORT: process.env.PORT || 3003,
    PATH: {
        VIDEOS: '/videos',
        ALL_DATA: '/testing/all-data/',
    },
};

export enum ResolutionsEnum {
    P144 = 'P144',
    P240 = 'P240',
    P360 = 'P360',
    P480 = 'P480',
    P720 = 'P720',
    P1080 = 'P1080',
    P1440 = 'P1440',
    P2160 = 'P2160'
}