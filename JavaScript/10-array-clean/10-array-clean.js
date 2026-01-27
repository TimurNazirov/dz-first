function createCleaner(limit) {
  return function (numbers) {
    const arrayClean = [];
    for (const num of numbers) {
      if (num < limit) {
        arrayClean.push(num);
      }
    }
    return arrayClean;
  };
}

const cleanBigNumbers = createCleaner(6);
const myData = [1, 10, 3, 5, 8, 2];
console.log(cleanBigNumbers(myData));
