function solution(num) {
  var answer = 0;
  let n = 1;
  while (num - sumAll(n) >= 0) {
    if ((num - sumAll(n)) % n === 0) {
      answer++;
    }
    n++;
  }
  return answer;
}

function sumAll(num) {
  return (num * (num + 1)) / 2;
}
