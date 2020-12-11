/*
 가장 큰것과 가장 작은것이 만났을 때 limit 안에 있으면 최고의 방안
 맨앞 인덱스(lt)와 맨뒤 인덱스(rt)를 비교해줘야한다.

  처음 lt,rt를 사용한것이 아닌 배열을 pop(),shift()했더니 시간초과가 났다.
  배열에서 메소드 처리가 시간이 오래걸리는듯하다.
*/
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let lt = 0;
  let rt = people.length - 1;
  while (lt <= rt) {
    if (people[lt] + people[rt] <= limit) {
      rt--;
    }
    answer++;
    lt++;
  }
  return answer;
}
