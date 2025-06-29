import { photoFake } from "../domain/fake/photo.fake";
import { IPhotoRepository } from "../domain/interfaces/repositories";

export class PhotoRepositoryFake implements IPhotoRepository {
    public getPhoto = jest.fn((id: string) => {
        return Promise.resolve(photoFake({id}));
    });
    public getList = jest.fn((_page: number, _limit: number) => {
        return Promise.resolve([
            photoFake({id: '1'}),
            photoFake({id: '2'}),
            photoFake({id: '3'}),
            photoFake({id: '4'}),
            photoFake({id: '5'}),
            photoFake({id: '6'}),
        ]);
    });
}