import { StrongHero } from './hero';

export class HeroesService {
	private API_KEY = 'fe8c20be9e7c2bcae9cec096f3054403';
	private API_URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${this.API_KEY}`;

	getHeroes() {
		return fetch(`${this.API_URL}`)
			.then(response => response.json())
			.then(response => response.data.results)
			.then(heroes => heroes.map(hero => new StrongHero(hero)));
	}
}
