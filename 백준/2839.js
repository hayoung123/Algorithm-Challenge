// 설탕 배달
/*
다이나믹 문제를 배우고 처음 푼 문제

3,5일 경우만 생각해서 해결하면 됐다.

하지만 나누기를 이용해서 해결해오 해결할 수 있을 만큼 간단한 문제였다.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  //   console.log(solution1(parseInt(line)));
  console.log(solution2(parseInt(line)));
}).on('close', function () {
  process.exit();
});

function solution1(num) {
  const d = [0, -1];
  for (let i = 2; i <= num; i++) {
    if (d[i - 3] >= 0 && d[i - 5] >= 0) {
      d[i] = Math.min(d[i - 3], d[i - 5]) + 1;
    } else if (d[i - 3] >= 0) {
      d[i] = d[i - 3] + 1;
    } else if (d[i - 5] >= 0) {
      d[i] = d[i - 5] + 1;
    } else {
      d[i] = -1;
    }
  }
  return d[num];
}

function solution2(num) {
  let fiveMok = Math.floor(num / 5);
  while (fiveMok > 0) {
    if ((num - fiveMok * 5) % 3 === 0) {
      return fiveMok + (num - fiveMok * 5) / 3;
    }
    fiveMok--;
  }
  if (num % 3 === 0) return num / 3;
  return -1;
}
