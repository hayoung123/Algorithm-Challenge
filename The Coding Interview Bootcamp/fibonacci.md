# Fibonacci

## My Code

```javascript
My code
function fib(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci[n];
}
```

<br/>

## Feedback

아직 recursive 재귀적인 표현이 어색하다. 훨씬 간결하게 작성하는 것을 많이 보고 익히는게 필요하다고 생각된다.

<br/>

---

## Solution 1st

return 으로 바로 재귀형식을 넣어서 간단하게 해결.

```javascript
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
```

</br>

## Solution 2nd

### memoization을 이용해서 시간을 단축시키는 기법

fib 같이 반복되는 작업은 Object(cache)를 이용해 기존 것의 return 값을 key:value 로 저장해 필요할 때 바로 꺼내서 사용하는 방식

클로져를 이용해서 자유변수인 chche를 이용할 수 있는 inner Function을 fib에 할당한다.

- chche Object 생성 --자유변수
- inner function으로 cache값에 key 값이 있으면 value를 바로 return해준다.
- key에 없을 시는 outer function에 인자인 함수를 이용해 cache에 저장.

```javascript
function memoize(fn) {
  const cache = {};
  return function (args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn(args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
```
