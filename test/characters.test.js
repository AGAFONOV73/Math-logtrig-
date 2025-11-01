const { Magician, Daemon } = require('../src/characters.js');

describe("Character class tests", () => {
  test("Magician attack without stoned", () => {
    const mag = new Magician();
    expect(mag.getEffectiveAttack(1)).toBeCloseTo(100);
    expect(mag.getEffectiveAttack(3)).toBeCloseTo(80);
  });

  test("Daemon attack with stoned", () => {
    const daemon = new Daemon();
    daemon.stoned = true;
    // Расчетное значение: 150 * baseMultiplier - log2(distance)*5
    const distance = 2;
    const expected =
      150 * Math.max(0, 1 - (distance - 1) * 0.1) - Math.log2(distance) * 5;
    expect(daemon.getEffectiveAttack(distance)).toBeCloseTo(expected);
  });

  test("attack value not negative", () => {
    const mag = new Magician();
    mag.stoned = true;
    // На очень большом расстоянии, чтобы атака не стала отрицательной
    expect(mag.getEffectiveAttack(100)).toBe(0);
  });

  test("throws error for distance less than 1", () => {
    const mag = new Magician();
    expect(() => mag.getEffectiveAttack(0)).toThrow(
      "Distance must be at least 1"
    );
  });
});
