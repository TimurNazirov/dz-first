const hasLicence = true;
const age = 17;
const isDrunk = true;

const result = hasLicence && age >= 18 && !isDrunk ? 'может' : 'не может';
console.log(`Может ли человек управлять автомобилем? ${result}`);

