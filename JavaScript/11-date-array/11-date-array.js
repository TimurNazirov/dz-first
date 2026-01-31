const arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

const result = arr
  .filter((str) => {
    const [d, m, y] = str.split(/[- /]/);
    const date = new Date(`${y}-${m}-${d}`);
    return !isNaN(date.getTime()) && date.getDate() === Number(d);
  })
  .map((str) => {
    const [d, m, y] = str.split(/[- /]/);
    return str.includes("/") ? `${m}-${d}-${y}` : `${d}-${m}-${y}`;
  });
console.log(result);
