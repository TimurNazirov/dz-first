const userPassword = (password) => {
  const chars = password.split("");

  if (chars.length > 3) {
    const moved = chars.splice(1, 2);
    chars.push(...moved);
  }
  return chars.join("");
};

const decryptPassword = (encrypted) => {
  const chars = encrypted.split("");
  if (chars.length > 3) {
    const movedBack = chars.splice(-2, 2);
    chars.splice(1, 0, ...movedBack);
  }
  return chars.join("");
};

const original = "password";
const encrypted = userPassword(original);
const decrypted = decryptPassword(encrypted);

console.log(`Оригинал: ${original}`);
console.log(`Зашифрован: ${encrypted}`);
console.log(`Расшифрован: ${decrypted}`);
