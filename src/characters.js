class Character {
  constructor() {
    this._stoned = false;
    this._attack = 0;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }

  getEffectiveAttack(distance) {
    if (distance < 1) {
      throw new Error("Distance must be at least 1");
    }
    const baseMultiplier = Math.max(0, 1 - (distance - 1) * 0.1);
    let attackValue = this.attack * baseMultiplier;

    if (this.stoned) {
      attackValue -= Math.log2(distance) * 5;
    }
    return Math.max(0, attackValue);
  }
}

class Magician extends Character {
  constructor() {
    super();
    this._attack = 100;
  }
}

class Daemon extends Character {
  constructor() {
    super();
    this._attack = 150;
  }
}

module.exports = { Magician, Daemon };
