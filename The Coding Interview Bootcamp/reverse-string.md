# Reverse String

## My Code

```javascript
function reverse(str) {
  let i = str.length - 1,
    answer = "";
  while (i >= 0) {
    answer = answer + str[i];
    i--;
  }
  return answer;
}
```

### FeedBack

answer에 붙이는부분만 달리해도 한결 간결한 코드가 됐을 것이다.

강의에서 기존 for loop 보다 for of 를 사용하는 것이 오류를 낼가능성이 적다고 익숙해지면 좋을 것이라 해주었다.

반목문을 사용해야하는 경우에는 for of, for in 을 먼저 고려해보자.

<br/>

## 1st Solution : reverse()

**reverse() : reverse and array in place**
bulit in javascript method

1. str -> array
2. reverse()
3. join
4. return

```javascript
function reverse(str){
    <!-- const arr = str.split('');
    arr.reverse();
    return arr.join('') -->

    return str.split('').reverse().join('')
}
```

<br/>

## 2nd Solution: using string +

<br/>

```javascript
function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
}
```

<br/>

## 3rd Solution : reduce()

<br/>

```javascript
function reverse(str) {
  str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
```
