const query = {
  search: "Вася",
  take: 10,
};

function objectToString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}
console.log(objectToString(query));
// search=Вася&take=10
