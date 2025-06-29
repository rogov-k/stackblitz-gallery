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
    fullSizeUrl: string;
    smallSizeUrls: string;
    isFavorite: boolean;
}