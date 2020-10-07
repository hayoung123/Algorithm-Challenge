# Anagram

## My Code

```
function anagrams(stringA, stringB) {
  let strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let strB = stringB.replace(/[^\w]/g, "").toLowerCase();
  let anagram = {};
  for (let x of strA) {
    if (anagram[x]) {
      anagram[x]++;
    } else {
      anagram[x] = 1;
    }
  }
  for (let x of strB) {
    if (anagram[x]) anagram[x]--;
    else return false;
  }
  for (let x in anagram) {
    if (anagram[x] !== 0) return false;
  }
  return true;
}
```
<br/>

1. stringA, stringB를 공백,특수문자를 제거하고 소문자로 바꾼다.
2. strA의 글자를 object에 key로 넣으며 개수를 센다.
3. strB를 object에 있는지 check 하고 있으면 -- 없으면 return false
4. object에 value가 0이 아닌 값이 있으면 false

<br/>

## 1st Solution

- 나와 같이 object에 넣어서 한다. 
- 하지만, 두개의 object를 만들어서 그 object를 비교해준다.


```
function anagrams(stringA, stringB) {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
      return false;
    for (let x in charMapA) {
      if (charMapA[x] !== charMapB[x]) return false;
    }
    return true;
  }
  function buildCharMap(str) {
    const charMap = {};
    for (let x of str.replace(/[^\w]/g, "").toLowerCase()) {
      charMap[x] = charMap[x] + 1 || 1;
    }
    return charMap;
  }
```


`charMapA[x] !== charMapB[x]` 

Object에서 이렇게 비교했을 때 charMapB Object.keys에 x 가 없을 지라도 비교는 실행되고 `false`


<br/>

## 2nd Solution

- 배열의 sort 기능을 이용해서 해결했다.
  
```
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
```

<br/>

이 방법을 보고 간단하게 작성한것 같아 조금 놀랐다.