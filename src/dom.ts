import { Hero } from './hero';

export class DOM {
  static renderHeroes(heroes: Hero[]) {
    const heroesContainer = <HTMLElement>document.querySelector('#heroes');

    const heroesNodes = heroes.map((hero) => {
      return `
        <div class="col-sm-3">
          <div class="card shadow">
            <img src="${hero.imageUrl}" class="card-img-top">
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
