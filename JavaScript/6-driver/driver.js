const hasLicence = true;
const age = 17;
const isDrunk = true;

const drive = hasLicence && age >= 18 && !isDrunk;
console.log(`Может ли человек управлять автомобилем? ${drive}`);
