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
    const distance = 2;
    const expected = 150 * Math.max(0, 1 - (distance - 1) * 0.1) - Math.log2(distance) * 5;
    expect(daemon.getEffectiveAttack(distance)).toBeCloseTo(expected);
  });

  test("attack value not negative", () => {
    const mag = new Magician();
    mag.stoned = true;
    expect(mag.getEffectiveAttack(100)).toBe(0);
  });

  test("throws error for distance less than 1", () => {
    const mag = new Magician();
    expect(() => mag.getEffectiveAttack(0)).toThrow("Distance must be at least 1");
  });

  test("Magician stoned attack calculation", () => {
    const mag = new Magician();
    mag.stoned = true;
    
    expect(mag.getEffectiveAttack(1)).toBeCloseTo(100);
    expect(mag.getEffectiveAttack(2)).toBeCloseTo(85);
    expect(mag.getEffectiveAttack(3)).toBeCloseTo(72.075, 2);
  });
});