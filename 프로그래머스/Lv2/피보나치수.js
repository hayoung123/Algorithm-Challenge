//기본 재귀
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

//메모이제이션
function solution(n) {
  const cache = {};
  const fib = (num) => {
    if (num < 2) return num;
    else if (cache[num]) return cache[num];
    else {
      cache[num] = fib(num - 1) + fib(num - 2);
      return cache[num];
    }
  };
  return fib(n);
}

//dp
function solution(n) {
  let a = 1; // fib(0)일때
  let b = 1; // fib(1)일때
  for (let i = 3; i <= n; i++) {
    let c = a + b; //이전 2개를 더하는 것
    a = b; //a업데이트
    b = c; //b업데이트
  }
  return b; //b에 뒤의 두수가 더해진게 저장돼 있으므로 반환
}
