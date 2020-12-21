function solution(n) {
  let answer = n.toString(2);
  answer = answer.split("").map((v) => v * 1);
  return answer.reduce((a, b) => a + b);
}
