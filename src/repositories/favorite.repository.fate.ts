import { IFavoriteRepository } from "../domain/interfaces/repositories";

export class FavoriteRepositoryFake implements IFavoriteRepository {
    public state: string[] = [];

    public addToFavorite = jest.fn((id: string) => {
        this.state.push(id);
    });

    public removeFromFavorite = jest.fn((id: string) => {
        this.state = this.state.filter(elelment => elelment !== id);
    });

    public getFavoriteIdList = jest.fn(() => {
        return this.state;
    });
}