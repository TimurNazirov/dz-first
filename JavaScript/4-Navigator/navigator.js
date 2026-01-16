const addressLat = 10;
const addressLong = 8;
const positionLat = 4;
const positionLong = 1;

const distance = Math.hypot(addressLat - positionLat, addressLong - positionLong);
console.log('Дистанция от объекта: ' + distance);
