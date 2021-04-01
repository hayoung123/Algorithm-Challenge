//숫자의 표현
/*
처음부터 끝까지 돌면서 각 숫자들을 시작으로 1씩더해주기
( num보다 크거나 같기 전까지 )

만약 같다면 answer++
*/

const solution = (num) => {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    let plusNum = i;
    let sum = 0;
    while (sum < num) {
      sum += plusNum;
      plusNum++;
    }
    if (sum === num) answer++;
  }
  return answer;
};

console.log(solution(15));
