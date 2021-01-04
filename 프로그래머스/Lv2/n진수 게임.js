function solution(n, t, m, p) {
  const answer = [];
  let tmp = [];
  let i = 1;
  let num = 0;
  while (answer.length !== t) {
    if (!tmp.length) {
      tmp = num.toString(n).split('');
      num++;
    }
    const nowNum = tmp.shift();
    if (i === p) answer.push(nowNum);
    i++;
    if (i > m) i = 1;
  }
  return answer.map((v) => v.toUpperCase()).join('');
}
