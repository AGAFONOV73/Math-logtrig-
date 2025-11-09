class Character {
  constructor() {
    this._stoned = false;
    this._baseAttack = 0;
    this._distance = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    return this.getEffectiveAttack(this._distance);
  }

  set attack(value) {
    this._baseAttack = value;
  }

  set distance(value) {
    if (value < 1) {
      throw new Error("Distance must be at least 1");
    }
    this._distance = value;
  }

  getEffectiveAttack(distance = this._distance) {
    if (distance < 1) {
      throw new Error("Distance must be at least 1");
    }

    const baseMultiplier = Math.max(0, 1 - (distance - 1) * 0.1);
    let attackValue = this._baseAttack * baseMultiplier;

    if (this._stoned) {
      attackValue -= Math.log2(distance) * 5;
    }

    return Math.max(0, attackValue);
  }
}

class Magician extends Character {
  constructor() {
    super();
    this._baseAttack = 100;
  }
}

class Daemon extends Character {
  constructor() {
    super();
    this._baseAttack = 150;
  }
}
