# Palindrome

## My Code

```
function palindrome(str) {
  const reverseStr = str.split("").reduce((reverse, char) => {
    return char + reverse;
  }, "");
  if (str === reverseStr) return true;
  else return false;
}
```

### Feedback

조건문으로 return 문을 따로 작성해 주는 것이 아닌 return 문에 조건문을 넣어서 바로 true, false를 리턴해 줄 수 있었다.

reduce구문을 익히기 위해서 사용하려고 노력했다.

<br/>

## 1st Solution : reverse string

<br/>

```
function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
```

reverse-string 에서 사용한 reverse() Method를 사용해 구현했다.

<br/>

## 2nd Solution : every()

**every((element,index)=>{func}) : test whether all elements in the array by the function**

- every 메소드를 이용해 서로 반대에 있는 값들을 비교한다.
- every() 자체가 true,false를 반환하기 때문에 자체를 return 해준다.
- 단, every를 사용했을 시 중복된 검사가 한번씩 일어나게 된다.

```
function palindrome(str) {
  return str.split("").every((char, idx) => {
    return char === str[str.length - 1 - idx];
  });
}
```

ev
