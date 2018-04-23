import { HeroesService } from './heroes.service';
import { DOM } from './dom';
import {AttackingHero, BaseHero, Hero, StrongHero} from "./hero";
import { NORMAL_ATTACKS, FIRE_ATTACKS} from "./attacks";

class App {
    constructor(private heroesService: HeroesService) {
        this.heroesService.getHeroes().then((heroes: StrongHero[]) => {
            const heroesByKick = [...heroes].sort(this.sortByKickPower);
            DOM.renderHeroes(heroesByKick);
        });
    }

    private sortByKickPower(prevHero: AttackingHero, nextHero: AttackingHero) {
        return prevHero.attack(NORMAL_ATTACKS, 'punch') - nextHero.attack(FIRE_ATTACKS, 'firePunch');
    }
}

const heroesService = new HeroesService();
let start = new App(heroesService);