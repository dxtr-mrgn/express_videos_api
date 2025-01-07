import {CreateInputVideoType, UpdateInputVideoType} from '../videos/video-types';
import {isInEnum} from '../videos/helpers';
import {ResolutionsEnum} from '../db/db-types';
import {Request} from 'express';

export const createInputValidation = (video: CreateInputVideoType) => {
    const errors: any = { // объект для сбора ошибок
        errorsMessages: []
    };
// ...
    if (video.availableResolution && (!Array.isArray(video.availableResolution)
        || !video.availableResolution.find(v => isInEnum(v, ResolutionsEnum)))) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution is incorrect'
        });
    }
    if (!video.title) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'title is required'
        });
    }
    if (!video.title) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'author is required'
        });
    }
    return errors;
};

export const updateInputValidation = (video: UpdateInputVideoType) => {
    let errors = createInputValidation(video);

    if (!video.canBeDownloaded) {
        video.canBeDownloaded = false
    }
    if (!video.minAgeRestriction) {
        video.minAgeRestriction = null
    } else if (video.minAgeRestriction > 18 || video.minAgeRestriction < 1 ) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'minAgeRestriction should be max 18 and min 1'
        });
    }
    if (!video.publicationDate) {
        delete video.publicationDate
    }

    return errors;
}
