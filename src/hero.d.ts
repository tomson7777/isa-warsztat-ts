export declare abstract class BaseHero {
    private maxStrength;
    private maxSpeed;
    protected _id: any;
    name: any;
    description: any;
    imageUrl: any;
    protected strength: number;
    protected speed: number;
    constructor(hero: any);
    readonly id: any;
}
export declare class StrongHero extends BaseHero {
    constructor(hero: any);
    attack(attacksList: any, name: any): number;
}
