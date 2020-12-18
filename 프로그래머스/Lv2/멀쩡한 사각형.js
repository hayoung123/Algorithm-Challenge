function solution(w, h) {
  const multiple = gcd(w, h);
  const minW = w / multiple;
  const minH = h / multiple;
  const empty = minW + minH - 1;

  return w * h - multiple * empty;
}
function gcd(w, h) {
  let result = 1;
  let i = 2;
  while (w >= i && h >= i) {
    if (w % i === 0 && h % i === 0) {
      w /= i;
      h /= i;
      result *= i;
    } else {
      i++;
    }
  }
  return result;
}

console.log(solution(2, 6));
