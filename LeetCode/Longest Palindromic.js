const { log } = console;
const isPalindrom = (s) => s === s.split('').reverse().join('');
/*
1차 시도
const longestPalindrome = (s) => {
  let answer = '';
  if (new Set(s.split('')).size === 1) return s;
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j >= i; j--) {
      if (s[j - 1] !== s[i]) continue;
      const tmpStr = s.slice(i, j);
      if (isPalindrom(tmpStr) && answer.length < tmpStr.length) {
        answer = tmpStr;
        break;
      }
    }
  }
  return answer;
};
*/
/*
캐시에 저장하면서
팰린드롬이 홀수, 짝수 일 경우를 나누어서 구해줬다.
하지만 양끝의 값만 비교해주면 되기 때문에 수정이 필요하다. 

const cache = {};
const longestPalindrome = (s) => {
  let answer = '';
  log('------------------');
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let lt = i;
      let rt = i + j;
      while (lt >= 0 && rt < s.length) {
        const tmpStr = s.slice(lt, rt + 1);
        if (!cache[tmpStr]) cache[tmpStr] = isPalindrom(tmpStr);
        if (cache[tmpStr] === true) {
          log(tmpStr);
          lt--;
          rt++;
          if (tmpStr.length > answer.length) answer = tmpStr;
        } else {
          break;
        }
      }
    }
  }
  return answer;
};
*/
const cache = {};
const longestPalindrome = (s) => {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let lt = i;
      let rt = i + j;
      while (s[lt] && s[lt] === s[rt]) {
        lt--;
        rt++;
      }
      //위에서 한번씩 더 빼졌기 때문에 전단계인 lt+1, rt-1 해준다.
      //다만 slice에서 rt는 rt전까지 문자열에 포함되기때문에 rt라고 작성한다.
      const tmpStr = s.slice(lt + 1, rt);
      if (tmpStr.length > answer.length) answer = tmpStr;
    }
  }
  return answer;
};

//test
// log(longestPalindrome('babad'));
log(longestPalindrome('cbbd'));
// log(longestPalindrome('a'));
// log(longestPalindrome('ac'));
// log(longestPalindrome('babad') === 'bab');
// log(longestPalindrome('cbbd') === 'bb');
// log(longestPalindrome('a') === 'a');
// log(longestPalindrome('ac') === 'a');
