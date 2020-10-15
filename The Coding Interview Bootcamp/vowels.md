# Find Vowels

## My Code

```javascript
function vowels(str) {
  let vowel = ["a", "i", "e", "u", "o"];
  let cnt = 0;
  for (let char of str) {
    if (vowel.includes(char.toLowerCase())) cnt++;
  }
  return cnt;
}
```

## Feedback

첫번째 솔루션과 같은 방법으로 해결했다.

includes 메서드를 써서 해결했다.

includes 는 string 과 array 둘다 사용가능하다. 1st solution 은 string을 사용했다.

정규 표현식이 익숙해지면 큰 힘이 될 수 있겠다고 생각된다. 따로 공부해도 좋지만 이렇게 문제 풀면서 나오는 것들을 기억하도록 해보자.

---

## Solution 1st

### code

```javascript
function vowels(str) {
  let vowel = "aeiou";
  let cnt = 0;
  for (let char of str) {
    if (vowel.includes(char.toLowerCase())) cnt++;
  }
  return cnt;
}
```

</br>

## Solution 2nd

regular expression (정규 표현식)을 이용해서 해결했다.

정규 표현식의 끝은 `/ /` 로한다

`[]` 안에 있는 글자는 포함된 글자를 쓴다.

마지막 / 뒤에 `g`, `i`는 옵션 같다.

`g` : 앞에서 `[]` 안에 있는 문자를 찾았어도 전부다 찾아라

`i` : 대소문자를 구별하지 말아라

### code

```javascript
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```
