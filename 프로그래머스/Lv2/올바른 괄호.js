function solution(s) {
  let cnt = 0;
  for (let x of s.split('')) {
    if (cnt < 0) return false;
    if (x === '(') cnt++;
    else cnt--;
  }
  if (cnt !== 0) return false;
  return true;
}
