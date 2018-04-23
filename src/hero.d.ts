import { HeroResult } from "./models/heroes-response.model";
export declare enum Status {
    ALIVE = 0,
    DEAD = 1,
}
export interface Hero {
    status: Status;
    name: string;
    description: string;
    imageUrl: string;
    id: number;
}
export interface AttackingHero {
    attack<O, K extends keyof O>(attacksList: O, name: K): number;
}
export declare abstract class BaseHero implements Hero {
    status: Status;
    private maxStrength;
    private maxSpeed;
    protected _id: number;
    name: string;
    description: string;
    imageUrl: string;
    protected strength: number;
    protected speed: number;
    constructor(hero: HeroResult);
    readonly id: number;
}
export declare class StrongHero extends BaseHero implements AttackingHero {
    constructor(hero: HeroResult);
    attack<O, K extends keyof O>(attacksList: O, name: K): number;
}
