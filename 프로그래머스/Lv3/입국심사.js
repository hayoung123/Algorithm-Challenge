/*
각 사람이(times) 정해진 시간동안 몇명을 처리할 수 있는지 체크해서 n과 비교한 뒤 처리하는 문제

답안을 보고 해결했다. 잘 이해가 되지는 않는다. 이렇게 이진 탐색으로 했을 경우 모든 경우를 확실하게 체크할 수 있을까??

*/
const solution = (n, times) => {
  let min = 1;
  let max = Math.max(...times) * n;
  let answer = max;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    console.log(mid);
    let count = 0;
    times.forEach((time) => {
      count += Math.floor(mid / time);
      if (count >= n) answer = Math.min(answer, mid);
    });
    console.log(count, mid);
    if (count >= n) max = mid - 1;
    else min = mid + 1;
  }
  return answer;
};

solution(6, [7, 10]);
