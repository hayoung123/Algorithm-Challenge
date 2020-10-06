# Max Char

## My Code

```
function maxChar(str) {
    let res = [];
    let flag = true;
    for (let x of str) {
      flag = true;
      for (let y of res) {
        if (y.char === x) {
          y.cnt++;
          flag = false;
          break;
        }
      }
      if (flag) {
        res.push({ char: x, cnt: 1 });
      }
    }
    res.sort((a, b) => b.cnt - a.cnt);
    return res[0].char;
  }
```

<br/>

## FeedBack

object로 표현하고 싶었지만 object로 정렬을 못한다고만 생각했다. 변수설정으로 굳이 정렬을 안해줘도 되는 문제였다.
2중 for 문으로 시간복잡도도 더 증가했다.

<br/>

## Solution

1. object key , value로 설정해준다.
2. 변수를 이용해 최대 값을 변수에 저장.

ojbect안에 key들을 loop 하고 싶을 때는 for in 으로 key 값에 접근하면 된다.

```
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  //object때 for in을 사용한다. index가 아닌 key로 접근해야되기 때문에
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
```
