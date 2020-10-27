# Spiral Matrix

## My Code

```javascript
function matrix(n) {
  let results = Array.from(Array(n), () => new Array(n));
  let counter = 1;
  let startColumn = 0,
    startRow = 0,
    endColumn = n - 1,
    endRow = n - 1;
  // startColumn <= endColumn && startRow <= endRow
  while (counter <= n * n) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}
```

## 설명

- 2차원 배열 선언하는 방법

  row : a

  column: b

  ```javascript
  let results = Array.from(Array(a), () => new Array(b));
  ```

  for문을 이용해서 선언할 수 있지만 es6에서는 `from` 메소드를 이용해 선언이 가능하다.

  [MDN from 메소드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

### start column, end column, start row, end row 를 이용해 끝에 4줄씩 채워나가주면 된다.

javascript는 빈 array에 바로바로 넣어줄 수 있기 때문에 빈 array만 선언하고 초기화는 해주지 않았다.

1. 맨 윗줄 채우기 -- for i `startColumn` ~ `endColumn`

   `result[startRow][i]` `counter` 넣기

   `counter++`

2. 첫줄은 다 채워졌으니 `startRow++`
3. endColumn 채우기 -- for i `startRow` ~ `endRow`

   `result[i][endColumn]` `counter` 넣기

   `counter++`

4. 마지막줄 채웠으니 `endColumn--`
5. 맨 아래줄 채우기 -- for i `endColumn` ~ `startColumn`

   `result[endRow][i]` `counter` 넣기

   `counter++`

6. 맨아래줄 채웠으니 `endRow--`
7. 맨 왼쪽줄 채우기 -- for i `endRow` ~ `startRow`

   `result[i][startColumn]` `counter` 넣기

   `counter++`

8. 맨왼쪽 채웠으니 `startRow++`

이것을 startColumn <= endColumn && startRow <= endRow

또는

counter <= n\*n 까지 하면된다.

## Feedback

강의에서 알려준 순서도를 보고 구현했다. 처음에는 규칙을 찾으려고했지만 변수를 많이두고 제거해나가면 되는 방법을 배울 수 있었다.

<br/>

---

## Solution 1st

### code

```javascript
function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0,
    endColumn = n - 1,
    startRow = 0,
    endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}
```
