import { HeroResult } from './heroes-response.model';
export declare enum Status {
    ALIVE = 0,
    DEAD = 1,
}
export interface Hero {
    name: string;
    description: string;
    imageUrl: string;
    id: number;
    status: Status;
}
export interface AttackingHero {
    attack(attacksList: any, name: string): number;
}
export declare abstract class BaseHero {
    private maxStrength;
    private maxSpeed;
    name: string;
    description: string;
    imageUrl: string;
    status: Status;
    protected _id: number;
    protected strength: number;
    protected speed: number;
    constructor(hero: HeroResult);
    readonly id: number;
}
export declare class StrongHero extends BaseHero implements AttackingHero {
    constructor(hero: HeroResult);
    attack(attacksList: any, name: string): number;
}
