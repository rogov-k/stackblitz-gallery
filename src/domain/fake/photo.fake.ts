import { Photo } from "../interfaces/photo";

export const photoFake: (data: Partial<Photo>) => Photo = (data: Partial<Photo>) => Object.assign({}, {
    id: "54",
    author: "Nicholas Swanson",
    fullSizeUrl: "https://picsum.photos/id/54/3264/2176",
    smallSizeUrls: "https://picsum.photos/id/54/3264/2176",
    isFavorite: false,
}, data);
