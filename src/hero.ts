import { HeroResult } from './heroes-response.model';

export enum Status {
  ALIVE, // 0
  DEAD // 1
}

export interface Hero {
  name: string;
  description: string;
  imageUrl: string;
  id: number;
  status: Status
}

export interface AttackingHero {
  attack(attacksList: any, name: string): number
}

export abstract class BaseHero implements Hero {
  private maxStrength = 100;
  private maxSpeed = 60;
  public name: string;
  public description: string;
  public imageUrl: string;
  status = Math.random() > 0.5 ? Status.ALIVE : Status.DEAD;
  protected _id: number;
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
    return attacksList[name] * this.strength * this.speed * 3;
  }
}

