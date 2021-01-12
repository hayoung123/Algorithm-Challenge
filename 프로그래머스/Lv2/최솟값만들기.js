/*
하나는 오름차순, 하나는 내림차순 정렬
서로 곱해준다.
*/

function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.forEach((v, idx) => (answer += v * B[idx]));

  return answer;
}
