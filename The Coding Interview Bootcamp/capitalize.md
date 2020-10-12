# Sentence Capitalization

## My Code

```
function capitalize(str) {
  return str
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
}
```

<br/>

## Feedback

강의에서 제시해준 slice를 이용해서 쉽게 해결할 수 있었다.

<br/>

## Soluton 1st

### code

내 풀이와 같은 방법으로 풀었다

```
function capitalize(str) {
  const word = [];
  for (let x of str.split(" ")) {
    word.push(x[0].toUpperCase() + x.slice(1));
  }
  return word.join(" ");
}
```
<br/>

## Soluton 2nd

<br/>

문장 전체로 접근을해 해결.
왼쪽에 공백이 있는 경우에 대문자 처리를 해주었는데 좋아보이지는 않는다.

<br/>

### code

```
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
```