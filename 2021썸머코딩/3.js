function solution(maps, p, r) {
  var answer = 0;
  const len = maps.length;
  const lineLen = maps.length + 1;

  const getMonster = (x, y, r) => {
    if (x < 0 || x >= len) return 0;
    let res = 0;
    let start = y - r / 2 >= 0 ? y - r / 2 : 0;
    let end = y + r / 2 - 1 >= len ? len - 1 : y + r / 2 - 1;
    if (maps[x][start] <= p / 2) res++;
    if (maps[x][end] <= p / 2) res++;
    start++;
    while (start < end) {
      if (maps[x][start] <= p) res++;
      start++;
    }
    return res;
  };

  for (let i = 0; i < lineLen; i++) {
    for (let j = 0; j < lineLen; j++) {
      let checkR = r;
      let res = 0;
      for (let k = 1; k <= r / 2; k++) {
        const upMonster = getMonster(i - k, j, checkR);
        const downMonster = getMonster(i + k - 1, j, checkR);
        checkR -= 2;
        res += upMonster + downMonster;
      }
      answer = Math.max(res, answer);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 28, 41, 22, 25, 79, 4],
      [39, 20, 10, 17, 19, 18, 8],
      [21, 4, 13, 12, 9, 29, 19],
      [58, 1, 20, 5, 8, 16, 9],
      [5, 6, 15, 2, 39, 8, 29],
      [39, 7, 17, 5, 4, 49, 5],
      [74, 46, 8, 11, 25, 2, 11],
    ],
    19,
    6
  )
);
