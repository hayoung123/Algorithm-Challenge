// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

function solution(n) {
  const cache = {};
  const fib = (n) => {
    if (cache[n]) return cache[n];
    else if (n < 2) return n;
    else {
      const k = fib(n - 1) + fib(n - 2);
      cache[n] = k;
      return k;
    }
  };
  return fib(n);
}

console.log(solution(11));
