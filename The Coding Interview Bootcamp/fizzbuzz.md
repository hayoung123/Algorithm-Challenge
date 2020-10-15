# FIZZBUZZ

## My Code

```javascript
function fizzBuzz(n) {
  const three = 3;
  const five = 5;
  for (let i = 1; i <= n; i++) {
    if (i % (three * five) === 0) {
      console.log("fizzbuzz");
    } else if (i % three === 0) {
      console.log("fizz");
    } else if (i % five === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
```

## FeedBack

해답과 같다. 쉬운문제
