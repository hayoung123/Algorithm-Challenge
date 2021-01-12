/*
배운것 : 
- 최소공배수 = 두수의 곱 / 최대 공약수
- 최대 공약수 수하는 방법 ->유클리드 호제법
*/
//최초 풀이 코드
//말도 못할 정도로 더럽다.
function solution(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = lcm(arr[i - 1], arr[i]);
    console.log('?', arr[i]);
  }
  return arr[arr.length - 1];
}

function lcm(a, b) {
  [a, b] = [a, b].sort((a, b) => a - b);
  let res = 1;
  let num = 2;
  while (num <= a) {
    if (a % num === 0 && b % num === 0) {
      res *= num;
      a /= num;
      b /= num;
    } else {
      num++;
    }
  }
  res *= a;
  res *= b;
  return res;
}

// 다른 사람 풀이를 보고 reduce를 활용할 수 있었는데 왜 안했을까라는 어리석은 생각이...들면서 1차 수정했다.
function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur));
}

/*
훨씬 깔끔해졌지만 lcm(최소공배수)를 구하는 함수를 최대공약수를 이용해 구현할 수 있다.
최소공배수 = 두수의 곱 - 최대공약수(gcd)
*/

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

function lcm(a, b) {
  return a * b - gcd(a, b);
}

// 최종 코드
function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur));
}
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

/*
정말 간단하다....
확실히 알고리즘은 이미 구현이 돼있기 때문에 공부하고 외운만큼 효과를 보는 것 같다. 

결론은 책을 사서 공부하자. 공부를 해야 잘하는 부분이다.
*/
