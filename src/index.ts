import { HeroesService } from './heroes.service';
import { DOM } from './dom';
import { NORMAL_ATTACKS, FIRE_ATTACKS } from './attacks';

class App {
	constructor(private heroesService) {
		this.heroesService.getHeroes().then(heroes => {
			DOM.renderHeroes(heroes.sort(this.battle));
		});
	}

	private battle(prevHero, nextHero) {
		return prevHero.attack(NORMAL_ATTACKS, 'punch') - nextHero.attack(FIRE_ATTACKS, 'firePunch');
	}
}

const heroesService = new HeroesService();
let start = new App(heroesService);
