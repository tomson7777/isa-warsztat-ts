import { HeroesService } from './heroes.service';
import { DOM } from './dom';
import { NORMAL_ATTACKS, FIRE_ATTACKS } from './attacks';
import { AttackingHero, StrongHero } from './hero';

class App {
	constructor(private heroesService: HeroesService) {
		this.heroesService.getHeroes().then((heroes: StrongHero[]) => {
			DOM.renderHeroes(heroes.sort(this.battle));
		});
	}

	private battle(prevHero: AttackingHero, nextHero: AttackingHero) {
		return prevHero.attack(NORMAL_ATTACKS, 'punch') - nextHero.attack(FIRE_ATTACKS, 'firePunch');
	}
}

const heroesService = new HeroesService();
let start = new App(heroesService);
