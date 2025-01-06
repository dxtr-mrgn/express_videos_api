import {ResolutionsEnum, VideoDBType} from './db-types';

export type ParamType = {
    id: string
}

export type InputVideoType = {
    title?: string,
    author?: string,
    minAgeRestriction?: number | null,
    canBeDownloaded?: boolean,
    availableResolution: string[];
}

export type QueryType = {
    search?: string
}

export type OutputVideoType = VideoDBType
export type OutputErrorType = { field: string, message: string }
