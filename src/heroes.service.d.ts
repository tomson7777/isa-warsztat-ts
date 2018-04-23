import { StrongHero } from './hero';
export declare class HeroesService {
    private API_KEY;
    private API_URL;
    getHeroes(): Promise<StrongHero[]>;
}
