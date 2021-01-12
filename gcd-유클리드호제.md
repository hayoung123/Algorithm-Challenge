# 유클리드 호제법을 이용해 최소공배수 구하기

유클리드 호제법이라는 것을 알게 됐다. 사실 아직까지 정확하게 이해가 되지는 않는다.

나머지를 이용해 구하는 것이다. a%b=c 일 때 a에서 c만큼 때문에 b로 나누어 떨어지지 않는다... 를 이용한 것 같은데 정확히 모르겠다.

## 구현 로직

두 수 a, b

`a%b===0`일 때 까지 실행해준다. a
`a%b===0 => return b`
`else b % (a%b)` 이것을 반복해주면 된다.

코드로 보면 더 이해가 쉽다.

- while문으로 구현하기

```javascript
function gcd(a, b) {
  while (a % b !== 0) {
    let tmp = a % b;
    a = b;
    b = tmp;
  }
  return b;
}
```

- 재귀로 구현하기

```javascript
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
```

## 최소공배수 (lcm)

정말 간단하다.

최소공배수도 최대공약수를 이용해서 쉽게 구할 수 있다.

최소공배수 = 두수의 곱 / 최대공약수

```javascript
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```
