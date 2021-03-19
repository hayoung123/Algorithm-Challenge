const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.slice(1).map((v) => v.split(" "));

  let start = input.map((v) => v[0] * 1);
  let end = input.map((v) => v[1] * 1);

  const maxstartIdx = start.indexOf(Math.max(...start));
  const minEndIdx = end.indexOf(Math.min(...end));

  const start1 = start.filter((v, idx) => idx !== maxstartIdx);
  const end1 = end.filter((v, idx) => idx !== maxstartIdx);

  const start2 = start.filter((v, idx) => idx !== minEndIdx);
  const end2 = end.filter((v, idx) => idx !== minEndIdx);

  let res1 = Math.min(...end1) - Math.max(...start1);
  let res2 = Math.min(...end2) - Math.max(...start2);

  res1 = res1 ? res1 : 0;

  let answer = res1 > res2 ? res1 : res2;
  answer = answer <= 0 ? 0 : answer;
  console.log(answer);
});

// // input.sort((a, b) => {
// //   if (b[0] - a[0]) return b[0] - a[0];
// //   else return b[1] - a[1];
// // });

// // const minusArr = input.map((arr) => arr[1] - arr[0]);
// // const min = Math.min(...minusArr);
// // const idx = minusArr.indexOf(min);

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   input = input.slice(1).map((v) => v.split(" "));

//   let start = input.map((v) => v[0] * 1);
//   let end = input.map((v) => v[1] * 1);

//   const minusArr = input.map((arr) => arr[1] - arr[0]);
//   const min = Math.min(...minusArr);
//   const idx = minusArr.indexOf(min);

//   start = start.filter((v, i) => i !== idx);
//   end = end.filter((v, i) => i !== idx);
//   let answer = Math.min(...end) - Math.max(...start);
//   answer = answer <= 0 ? 0 : answer;
//   console.log(answer);
// });
