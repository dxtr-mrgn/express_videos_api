import {ResolutionsEnum, VideoDBType} from '../db/db-types';

export type ParamType = {
    id: string
}

export type CreateInputVideoType = {
    title: string,
    author: string,
    availableResolution?: string[];
}

export type UpdateInputVideoType = {
    title: string,
    author: string,
    availableResolution?: string[],
    canBeDownloaded?: boolean,
    minAgeRestriction?: number | null,
    publicationDate?: string;


}

export type QueryType = {
    search?: string
}

export type OutputVideoType = VideoDBType
export type OutputErrorType = { field: string, message: string }
