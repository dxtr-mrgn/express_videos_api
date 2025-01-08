import {DBType} from './db-types';
import {VideoDBType} from './db-types';
import {ResolutionsEnum} from '../settings';

const video1: VideoDBType = {
    id: Date.now() + Math.random(),
    title: 't' + Date.now() + Math.random(),
    author: 'a' + Date.now() + Math.random(),
    canBeDownloaded: true,
    minAgeRestriction: null,
    createdAt: new Date().toISOString(),
    publicationDate: new Date().toISOString(),
    availableResolutions: [ResolutionsEnum.P240],
};

export const dataset1: DBType = {
    videos: [video1],
};

