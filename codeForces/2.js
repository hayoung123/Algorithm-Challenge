const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const count = input.shift();
  input = input.map((v) => v.split(" "));
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    const restArrLen = getLen(restArr);
    if (restArrLen === input[i][1] - input[i][0]) continue;
    if (answer < restArrLen) answer = restArrLen;
  }
  console.log(answer);
});

const getLen = (arr) => {
  let [start, end] = [0, 10000000];
  for (let x of arr) {
    if (start < x[0] * 1) start = x[0];
    if (end > x[1] * 1) end = x[1];
  }
  return end - start;
};
