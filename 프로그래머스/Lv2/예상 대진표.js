/*
토너먼트에서 언제 만날지 구하는 문제이다.
2로 나눈값의 올림해서 같아질 때까지 반복하면된다.
*/

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
