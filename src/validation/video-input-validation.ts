import {CreateInputVideoType, UpdateInputVideoType} from '../videos/video-types';
import {isInEnum} from '../videos/helpers';
import {ResolutionsEnum} from '../db/db-types';
import {Request} from 'express';

export const createInputValidation = (video: CreateInputVideoType) => {
    const errors: any = { // объект для сбора ошибок
        errorsMessages: []
    };
// ...
    if (video.availableResolutions && (!Array.isArray(video.availableResolutions)
        || !video.availableResolutions.find(v => isInEnum(v, ResolutionsEnum)))) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution is incorrect'
        });
    }
    if (!video.title || video.title.length > 40) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'title'
        });
    }
    if (!video.author || video.author.length > 20) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'author'
        });
    }
    return errors;
};

export const updateInputValidation = (video: UpdateInputVideoType) => {
    let errors = createInputValidation(video);

    if (!video.canBeDownloaded) {
        video.canBeDownloaded = false
    } else if (typeof video.canBeDownloaded as any !== 'boolean') {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'canBeDownloaded'
        });
    }
    if (!video.minAgeRestriction) {
        video.minAgeRestriction = null
    } else if (video.minAgeRestriction > 18 || video.minAgeRestriction < 1 ) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'minAgeRestriction'
        });
    }
    if (!video.publicationDate) {
        delete video.publicationDate
    }

    return errors;
}
