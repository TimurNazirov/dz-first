const card = "4561-2612-1234-5464";

function checkCard(card) {
  const cardNumber = card.replaceAll("-", "").split("").map(Number);

  const checkSum = cardNumber.reduce((acc, num, i) => {
    if (i % 2 === 0) {
      let doubled = num * 2;
      if (doubled > 9) doubled -= 9;
      return acc + doubled;
    }
    return acc + num;
  }, 0);
  return checkSum % 10 === 0;
}
console.log(checkCard(card));
