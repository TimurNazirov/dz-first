const rates = {
  RUB: 1,
  USD: 95,
  EUR: 103,
  CNY: 13,
};

function convertCurrency(amount, from, to) {
  if (!rates[from] || !rates[to]) {
    return null;
  }
  const result = (amount * rates[from]) / rates[to];
  return result.toFixed(2);
}

console.log(convertCurrency(100, "USD", "RUB"));
console.log(convertCurrency(100, "USD", "EUR"));
