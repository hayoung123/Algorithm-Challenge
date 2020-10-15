# Pyramid

## My Code

```javascript
function pyramid(n) {
  const row = n;
  const column = 2 * n - 1;
  for (let i = 0; i < n; i++) {
    let str = "";
    let stars = "#".repeat(2 * i + 1);
    let blank = " ".repeat((column - stars.length) / 2);
    str = blank + stars + blank;
    console.log(str);
  }
}
```

</br>

## Feedback

빈칸은 어떤 규칙으로 표현하지 했을 때 나온 생각이다.

하지만 코드를 보고 단번에 이해하기 힘들 수 있다는 생각이 든다.

회귀식으로 연습을 해봤는데 지난번에 했던것을 기반으로 하니 쉽게 작성됐다.

<br/>

---

## Solution 1st

`midPoint`를 계산 후에 `row` 와의 대소 비교를해 그에 맞는 `column`이면 # 아니면 ' '.

### code

```javascript
function pyramid(n) {
  const midPoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
```

## Solution 2nd

`column` 대신 `level.length` 으로 작성한것 이외에는 1번째 솔루션과 같은 흐름이다.

### code

```javascript
function pyramid(n, row = 0, level = "") {
  const column = 2 * n - 1;
  const midPoint = Math.floor(column / 2);
  if (row === n) return;
  if (level.length === column) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const add =
    midPoint - row <= level.length && midPoint + row >= level.length
      ? "#"
      : " ";
  pyramid(n, row, level + add);
}
```
