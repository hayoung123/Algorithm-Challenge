const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [len, cnt] = input[0].split(" ");
  const str = input[1];
  let start = 0;
  let lt = 1;
  let rt = str.length - 1;
  while (lt < len) {
    if (str.slice(0, lt) === str.slice(rt, len)) {
      start = lt;
    }
    lt++;
    rt--;
    console.log(str.slice(0, lt), str.slice(rt, len));
    console.log("-------------------------");
  }
  let answer = str;
  console.log(start);
  for (let i = 0; i < cnt - 1; i++) {
    answer += str.slice(start);
  }
  console.log(answer);
});
