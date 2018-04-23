import { HeroResult } from './heroes-response.model';
export interface Hero {
    name: string;
    description: string;
    imageUrl: string;
    id: number;
}
export interface AttackingHero {
    attack(attacksList: any, name: string): number;
}
export declare abstract class BaseHero {
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
    attack(attacksList: any, name: string): number;
}
