export abstract class BaseHero {
	private maxStrength = 100;
	private maxSpeed = 60;
	protected _id;
	public name;
	public description;
	public imageUrl;
	protected strength = Math.floor(Math.random() * this.maxStrength);
	protected speed = Math.floor(Math.random() * this.maxSpeed);

	constructor(hero) {
		this._id = hero.id;
		this.name = hero.name;
		this.description = hero.description;
		this.imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
	}

	get id() {
		return this._id;
	}
}

export class StrongHero extends BaseHero {
	constructor(hero) {
		super(hero);
	}

	attack(attacksList, name) {
		return +attacksList[name] * this.strength * this.speed * 3;
	}
}
