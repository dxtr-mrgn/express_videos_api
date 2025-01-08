import {ResolutionsEnum, VideoDBType} from '../db/db-types';

export type ParamType = {
    id: string
}

export type CreateInputVideoType = {
    title: string,
    author: string,
    availableResolutions?: string[] | null;
}

export type UpdateInputVideoType = {
    title: string,
    author: string,
    availableResolutions?: string[],
    canBeDownloaded?: boolean,
    minAgeRestriction?: number | null,
    publicationDate?: string;


}

export type QueryType = {
    search?: string
}

export type OutputVideoType = VideoDBType
export type OutputErrorType = { field: string, message: string }
