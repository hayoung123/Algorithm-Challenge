function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];
  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
    const city = cities.shift().toLowerCase();
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer += 1;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(city);
      answer += 5;
    }
  }
  return answer;
}

console.log(solution(0, ["k", "k", "k", "k", "k", "k", "k"]));
console.log(
  solution(0, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
console.log(solution(2, ["a", "b", "a", "c", "b"]));
