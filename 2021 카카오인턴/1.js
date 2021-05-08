function solution(s) {
  const arr = [];
  let tmp = '';

  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      tmp += s[i];
      if (data[tmp]) {
        arr.push(data[tmp] * 1);
        tmp = '';
      }
    } else {
      arr.push(s[i] + '');
    }
  }
  return arr.join('') * 1;
}

const data = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};
