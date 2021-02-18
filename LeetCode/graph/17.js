//17. Letter Combinations of a Phone Number

/*
역시 재귀... 조오금 어려웠다. 
첫번째 들어온 것부터 dfs의 인자인 letter배열에 값을 넣었다 뺏다 하면서 재귀를 돌려주면 된다. 
*/
const letterCombinations = (digits) => {
  if (!digits) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  const answer = [];
  const digitArr = digits.split('');

  const dfs = (idx = 0, letter = []) => {
    if (idx === digitArr.length) {
      answer.push(letter.join(''));
      return;
    }
    char = digitArr[idx];
    for (let x of map[char].split('')) {
      letter.push(x);
      dfs(idx + 1, letter);
      letter.pop();
    }
  };

  dfs();
  return answer;
};

/*
- 문자열도 for of 구문을 사용할 수 있었다. string도 이터러블 객체였다. 너무 당연한가? 난 몰랐다. 
```javascript
let k = 'hello';
let kk = k[Symbol.iterator]();

console.log(kk); //StringIterator {}
kk.next();  //{value: "h", done: false}
kk.next(); //{value: "e", done: false}
```
위의 코드를 통해 이터러블인 것을 확인했다. 

- letter를 문자열로 바꿔서 불필요한 메소드들을 사용하지 않아도 되게 했다. 

속도가 매우 많이 개선됐고 보기에도 훌륭하다. 역시 leetcode의 고수의 답을 보면 배울게 참 많다. 
*/

const letterCombinations = (digits) => {
  if (!digits) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  const answer = [];
  const digitArr = digits.split('');

  const dfs = (idx = 0, letter = '') => {
    if (idx === digitArr.length) {
      answer.push(letter);
      return;
    }
    char = digitArr[idx];
    for (let x of map[char]) {
      dfs(idx + 1, letter + x);
    }
  };

  dfs();
  return answer;
};
