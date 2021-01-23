//longest Palindrome

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
      const tmpStr = s.slice(lt + 1, rt);
      if (tmpStr.length > answer.length) answer = tmpStr;
    }
  }
  return answer;
};

const isPalindrome = (s) => s === s.split('').reverse().join('');

const longestPalindrome = (s) => {
  let answer = '';
  const expand = (lt, rt) => {
    while (s[lt] && s[lt] === s[rt]) {
      lt--;
      rt++;
    }
    return s.slice(lt + 1, rt);
  };

  if (s.length < 2 || isPalindrome(s)) return s;

  for (let i = 0; i < s.length; i++) {
    const palindromeArr = [answer, expand(i, i), expand(i, i + 1)];
    palindromeArr.sort((a, b) => b.length - a.length);
    answer = palindromeArr[0];
  }

  return answer;
};
