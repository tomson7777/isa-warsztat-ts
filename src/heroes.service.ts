import {HeroResult} from "./models/heroes-response.model";
import {HeroesResponse} from "./models/heroes-response.model";
import {BaseHero, StrongHero} from "./hero";

export class HeroesService {
    private API_KEY = 'fe8c20be9e7c2bcae9cec096f3054403';
    private API_URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${this.API_KEY}`;

    getHeroes(): Promise<StrongHero[]> {
        return fetch(`${this.API_URL}`)
            .then(response => response.json())
            .then((response: HeroesResponse) => response.data.results as HeroResult[])
            .then(heroes => heroes.map(hero => new StrongHero(hero)));
    }
}
