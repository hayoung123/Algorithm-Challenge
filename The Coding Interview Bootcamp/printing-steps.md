# Printing Steps

## My Code

```javascript
function steps(n) {
  for (let i = 1; i < n + 1; i++) {
    let word = "";
    for (let j = 0; j < i; j++) {
      word += "#";
    }
    while (word.length < n) {
      word += " ";
    }
    console.log(word);
  }
}
```

<br/>

## Feedback

1st solution을 보면 `row` 와 `column`을 이용해서 효과적으로 문제를 해결했다.
이렇게 `column`, `row`로 구분해서 생각하면 반대 모양으로 step을 찍는다던가 할 때 유용하게 적용할 수 있다.

2차원 구조를 진행할 때는 `row` 와 `coulmn`을 잘 활용하는 방법을 익혀야 한다.

회귀는 예전부터 계속 연습해 오고 있지만 많이 어색하다. 계속해서 반복하는 방법 밖에 없을 것같다. 간단한 반복문등을 회귀로 해결하는 등 회귀를 자주 접해서 익숙 해져야 할 것 같다.

<br/>

## Solution 1st

column,row로 나누어서 `column <= row` 일 때는 `#`을 넣고 아닐 때는 `' '` 을 넣는다.

### code

```javascript
function steps(n) {
  let stair = "";

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++) {
      if (column <= row) stair += "#";
      else stair += " ";
    }
    console.log(stair);
  }
}
```

<br/>

## Solution 2nd

### Recursion

`if row===n` : 문제끝 `return`

`if stair.length===n` : 한 줄 (row) 끝 step(n,row+1)

`if stair.lenght <= row` : #을 stair에 입력 `else` ' '(공백) `step(n,row+1,stair)`

<br/>

회구 할 때는 종료 되는 시점을 먼저 설정해 놓고 구현 해나가는게 더 쉬운 것 같다.

<br/>

### code

```javascript
function steps(n, row = 0, stair = "") {
  if (n === row) return;
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }
  //   if (stair.length <= row) stair += "#";
  //   else stair += " ";
  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}
```
