//3. Longest Substring Without Repeating Characters

/*
책에서는 해쉬맵 파트이지만 배열의 slice를 이용하면 쉽게 구할 수 있을 것 같아서 구현했다.
하지만 Array.includes나 indexOf는 속도가 느린 메소드로 알고 있기 때문에 
배열로 해결하는 건 그리 좋은 해결방안은 아닐 수도 있다. 
*/
const lengthOfLongestSubstring = (str) => {
  let maxLen = 0;
  let strArr = [];
  for (let char of str) {
    if (strArr.includes(char)) {
      const idx = strArr.indexOf(char);
      strArr = strArr.slice(idx + 1);
    }
    strArr.push(char);
    maxLen = maxLen < strArr.length ? strArr.length : maxLen;
  }
  return maxLen;
};

/*
책에서는 object에 각 char의 가장 최근에 들어온 index를 저장한다. 
투 포인터 처럼 진행되는데 start가 앞으로 가면서 진행된다. 하지만 object에 
char의 index가 있다면 start를 그만큼 전진 시킨다. 

새로운 문자가 나왔을 때 최고 길이를 기록할 테니까 그 경우에 만 max 값을 처리해주면 된다. 

이전에 나왔던 문자 && 현재 start가 이전에 나왔던 문자의 이전에 있다면 
이전 문자의 index+1로 start를 옮겨준다. 

실행 시간은 내 코드가 더 빨랐다. 
*/

const lengthOfLongestSubstring = (str) => {
  let maxLen = 0;
  let used = {};
  let start = 0;
  str.split('').forEach((char, idx) => {
    if (used[char] !== undefined && start <= used[char]) {
      start = used[char] + 1;
    } else {
      maxLen = maxLen > idx - start + 1 ? maxLen : idx - start + 1;
    }
    used[char] = idx;
  });

  return maxLen;
};
