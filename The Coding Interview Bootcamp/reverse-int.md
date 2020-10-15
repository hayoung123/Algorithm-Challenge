# Reverse Int

## My Code

```javascript
function reverseInt(n) {
  if (Math.sign(parseInt(n)) >= 0) {
    return parseInt(n.toString().split("").reverse().join(""));
  } else {
    n = n * -1;
    return -parseInt(n.toString().split("").reverse().join(""));
  }
}
```

### Feedback

`parseInt()`의 특성을 정확히 이해 했다면 parseInt를 먼저 해주지 않아도 됐다.

`parseInt()`는 문자열에서 앞에부터 숫자가 되는 만큼을 int화 시키기 때문에 return 할 때 `parseInt()` 하고 +, - 를 `Math.sign()`으로 구별해주면 됐다.

<br/>

## Solution

1. Change Int to String - `toString()`
2. make string reverse - `split('')`,`reverse()`, `join('')`
3. Change String to Int - `parseInt()`
4. Figure out whether or not this number is negarive or positive - you can use `if(n>0){~~}` But, `Math.sign()` is more useful.

   <br/>

**\* Math.sign(number)**

**number > 0 => 1 / number===0 => 0 / number <0 => -1**

<br/>

```javascript
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  //if(n<0) return parseInt(reversed) * -1
  return parseInt(reversed) * Math.sign(n);

  //using Math.sign() is more straightforward
}
```
