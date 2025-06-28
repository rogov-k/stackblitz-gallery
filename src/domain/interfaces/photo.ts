export interface PhotoExternal {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export interface Photo {
    id: string;
    author: string;
    download_url: string;
    isFavorite: boolean;
}