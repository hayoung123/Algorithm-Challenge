//739. Daily Temperatures

/*
브루트 포스 풀이.
당연히 시간초과로 안될 것 같았지만 패스해서 좀 당황스럽다.
*/
var dailyTemperatures = function (T) {
  const answer = [];
  for (let i = 0; i < T.length; i++) {
    // const curr = T[i];
    let flag = false;
    for (let j = i + 1; j < T.length; j++) {
      if (T[i] < T[j]) {
        answer.push(j - i);
        flag = true;
        break;
      }
    }
    if (!flag) answer.push(0);
  }
  return answer;
};

/*
스택을 이용한 풀이.
책에 있는 스택 풀이도 크게 다르지는 않지만 스택을 비교하기 때문에 시간적으로
훨씬 빨라 보인다.

stack에는 index가 들어간다. 이 인덱스를 이용해서 answer에 바로 넣어준다.
초기 값을 0 으로 설정해줘서 while문 조건에 해당안되는 index들은 0이다.

역시 속도차이가 7배 가량 난다. 브루트포스로 해결해서 시간초과가 안나면 문제는 없지만,
스택으로 해결하는것이 훨씬 좋은 풀이법 같다고 생각된다.
*/

const dailyTemperatures = (T) => {
  const answer = new Array(T.length).fill(0);
  const stack = [];
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const stackLastIdx = stack.pop();
      answer[stackLastIdx] = i - stackLastIdx;
    }
    stack.push(i);
  }
  return answer;
};
