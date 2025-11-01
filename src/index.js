const { Magician, Daemon } = require("./characters");

const magician = new Magician();
const daemon = new Daemon();

magician.stoned = true;
daemon.stoned = false;

const distances = [1, 2, 3, 4];

console.log("Magician:");
distances.forEach((distance) => {
  console.log(
    `Distance: ${distance}, Attack: ${magician
      .getEffectiveAttack(distance)
      .toFixed(2)}`
  );
});

console.log("Daemon:");
distances.forEach((distance) => {
  console.log(
    `Distance: ${distance}, Attack: ${daemon
      .getEffectiveAttack(distance)
      .toFixed(2)}`
  );
});
