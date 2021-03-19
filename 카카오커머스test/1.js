function solution(n, record) {
  var answer;
  const res = {};
  record.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else return 0;
  });
  for (let x of record) {
    const [server, name] = x.split(" ");
    if (res[server]) {
      if (res[server].includes(name)) continue;
      if (res[server].length >= 5) {
        res[server].shift();
      }
      res[server].push(name);
    } else {
      res[server] = [name];
    }
  }
  const values = Object.values(res);
  answer = values.reduce((acc, cur) => [...acc, ...cur]);

  return answer;
}

console.log(
  solution(1, [
    "1 a",
    "1 b",
    "1 abc",
    "3 b",
    "3 a",
    "1 abcd",
    "1 abc",
    "1 aaa",
    "1 a",
    "1 z",
    "1 q",
    "3 k",
    "3 q",
    "3 z",
    "3 m",
    "3 b",
  ])
);
