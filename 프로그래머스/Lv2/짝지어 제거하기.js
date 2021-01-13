/*
스택을 이용해서 해결하는 문제

스택을 이용한 문제를 잘 풀지 않다보니 까먹고 살짝 헤맸지만 해결했다.

다양한 문제를 자주 풀어서 감을 잃지 않도록 하는게 중요하다고 생각된다
*/

function solution(s) {
  const stack = [];
  for (let x of s) {
    if (stack[stack.length - 1] !== x) stack.push(x);
    else stack.pop();
  }
  return stack.length ? 0 : 1;
}
