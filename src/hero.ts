import {HeroResult} from "./models/heroes-response.model";

export enum Status {
   ALIVE, // 0
   DEAD // 1
}

function Unenumerable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = false;
}

export interface Hero {
    status: Status;
    name: string;
    description: string;
    imageUrl: string;
    id: number;
}

export interface AttackingHero {
    attack<O, K extends keyof O>(attacksList: O, name: K): number
}

export abstract class BaseHero implements Hero {
   status = Math.random() > 0.5 ? Status.ALIVE : Status.DEAD;
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
   constructor(hero: HeroResult) {
       super(hero);
   }

    attack<O, K extends keyof O>(attacksList: O, name: K): number {
        return +attacksList[name] * this.strength * this.speed * 3;
    }
}
