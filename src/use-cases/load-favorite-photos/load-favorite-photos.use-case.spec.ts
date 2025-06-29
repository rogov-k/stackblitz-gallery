import { LoadFavotirePhotosUseCase } from './load-favorite-photos.use-case';
import { StoreRepositoryFake } from '../../repositories/store.repository.fake';
import { FavoriteRepositoryFake } from '../../repositories/favorite.repository.fate';
import { PhotoRepositoryFake } from '../../repositories/photo.repository.fake';
import { FavoriteRepository } from '../../repositories/favorite.repository';
import { PhotoRepository } from '../../repositories/photo.repository';
import { StoreRepository } from '../../repositories/store.repository';

describe(LoadFavotirePhotosUseCase.name, () => {
    let useCase: LoadFavotirePhotosUseCase;
    let storeRepositoryFake: StoreRepository;
    let photoRepositoryFake: PhotoRepository;
    let favoriteRepositoryFake: FavoriteRepository;
    
    beforeEach(() => {
        storeRepositoryFake = (new StoreRepositoryFake()) as unknown as StoreRepository;
        photoRepositoryFake = (new PhotoRepositoryFake()) as unknown as PhotoRepository;
        favoriteRepositoryFake = (new FavoriteRepositoryFake()) as unknown as FavoriteRepository;
        useCase = new LoadFavotirePhotosUseCase(
            storeRepositoryFake,
            photoRepositoryFake,
            favoriteRepositoryFake,
        );
    });

    it('should store data from internet', () => {
        useCase.invoke();

        expect(storeRepositoryFake.storeFavoritePhotoList.length).toBe(6);
    });
});
