import {DBType} from '../videos/types/db-types';


export const db: DBType = { // создаём базу данных (пока это просто переменная)
    videos: [],
};

export const setDB = (dataset?: Partial<DBType>) => {
    if (!dataset) {
        db.videos = [];
        return;
    }

    db.videos = dataset.videos || db.videos;
};