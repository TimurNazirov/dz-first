function convertRubles(amount, currency) {
  const usdRate = 95;
  const eurRate = 102;

  if (currency === "USD") {
    let result = amount / usdRate;
    return `${amount} руб.= ${result.toFixed(2)} $`;
  } else if (currency === "EUR") {
    let result = amount / eurRate;
    return `${amount} руб.= ${result.toFixed(2)} €`;
  } else {
    return null;
  }
}
console.log(convertRubles(10000, "UD"));
