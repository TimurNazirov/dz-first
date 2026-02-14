function createCleaner(arr, shouldDelete) {
  const arrayClean = [];
  for (const num of arr) {
    if (!shouldDelete(num)) {
      arrayClean.push(num);
    }
  }
  return arrayClean;
}

const numbers = [1, 2, 5, 7, 10];
const isMoreThanFive = (num) => num > 5;
const cleanArr = createCleaner(numbers, isMoreThanFive);
console.log(cleanArr);
