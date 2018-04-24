import {Hero, Status} from './hero';

export class DOM {
  static renderHeroes(heroes: Hero[]) {
    const heroesContainer = <HTMLElement>document.querySelector('#heroes');
    const imageClasses = (hero: Hero) => hero.status === Status.DEAD ? 'card-img-top dead' : 'card-img-top';

    const heroesNodes = heroes.map((hero) => {
      return `
        <div class="col-sm-3">
          <div class="card shadow">
            <img src="${hero.imageUrl}" class="${imageClasses(hero)}">
            <div class="card-body">
              <h5 class="card-title">${hero.name}</h5>
              <p class="card-text">
                ${hero.description ? hero.description : 'description not available'}
              </p>
            </div>
          </div>
        </div>`
    });

    heroesContainer.innerHTML = heroesNodes.join('');
  }
}
