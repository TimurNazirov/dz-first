const userPassword = (password) => {
  return password
    .split("")    // 1. Превращаем строку в массив ["p", "a", "s", "s"...]
    .reverse()    // 2. Разворачиваем массив ["d", "r", "o", "w"...]
    .join("");    // 3. Склеиваем обратно в строку "drowssap"
};

const original = "password";
const encrypted = userPassword(original);

console.log(`Оригинал: ${original}`);   // password
console.log(`Развернут: ${encrypted}`); // drowssap

const original = "password";

// Шифруем (разворачиваем первый раз)
const encrypted = userPassword(original); // "drowssap"

// Дешифруем (разворачиваем второй раз)
const decrypted = userPassword(encrypted); // "password"

console.log(original === decrypted); // true
