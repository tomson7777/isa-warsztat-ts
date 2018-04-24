import { HeroResult } from './heroes-response.model';

export interface Hero {
  name: string;
  description: string;
  imageUrl: string;
  id: number;
}

export interface AttackingHero {
  attack(attacksList: any, name: string): number
}

export abstract class BaseHero {
  private maxStrength = 100;
  private maxSpeed = 60;
  protected _id: number;
  public name: string;
  public description: string;
  public imageUrl: string;
  protected strength = Math.floor(Math.random() * this.maxStrength);
  protected speed = Math.floor(Math.random() * this.maxSpeed);

  constructor(hero: HeroResult) {
    this._id = hero.id;
    this.name = hero.name;
    this.description = hero.description;
    this.imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  }

  get id() {
    return this._id;
  }
}

export class StrongHero extends BaseHero implements AttackingHero {
  attack(attacksList: any, name: string): number {
    return +attacksList[name] * this.strength * this.speed * 3;
  }
}

