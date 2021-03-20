// // Run by Node.js
// const readline = require('readline');

// (async () => {
//   let rl = readline.createInterface({ input: process.stdin });
//   let graph = [];
//   for await (const line of rl) {
//     graph.push(line);
//   }
//   rl.close();
//   const [column, row] = graph.shift().split(' ');
//   graph = graph.map((line) =>
//     line.split('').map((v) => {
//       if (v === 'x') return 0;
//       else if (v === '.') return 1;
//       else return v;
//     })
//   );
//   const answer = [];
//   const dfs = (nodeCol, nodeRow, sum = 0) => {
//     if (graph[nodeRow][nodeCol] === 0) return;
//     if (nodeRow === row - 1) answer.push(sum);

//     dfs(nodeCol, nodeRow + 1, sum);
//     if (nodeCol - 1 >= 0 && nodeCol + 1 < column) dfs(nodeCol - 1, nodeRow, sum + 1);
//     if (nodeRow - 1 >= 0 && nodeRow + 1 < row) dfs(nodeRow - 1, nodeRow, sum + 1);
//   };
//   console.log(Math.min(...answer));
//   process.exit();
// })();

// let graph = ['4 5', 'c.xc', '....', 'xx..', '...x', 'x..x'];
let graph = ['5 7', 'xxxc.', '.....', '.xx..', '..x..', 'x..xx', '.....', 'xxxx.'];

const [column, row] = graph
  .shift()
  .split(' ')
  .map((v) => v * 1);
graph = graph.map((line) =>
  line.split('').map((v) => {
    if (v === 'x') return 0;
    else if (v === '.') return 1;
    else return v;
  })
);
console.log(graph);
let check = Array.from(new Array(row), () => new Array(column).fill(false));

const answer = [];
let minAnswer;
const dfs = (nodeCol, nodeRow, sum = 0) => {
  if (graph[nodeRow][nodeCol] === 0 || check[nodeRow][nodeCol] || sum >= minAnswer) return;
  if (nodeRow === row - 1) {
    answer.push(sum);
    minAnswer = Math.min(...answer);
    return;
  }
  console.log(nodeCol, nodeRow);
  console.log(check);
  check[nodeRow][nodeCol] = true;
  dfs(nodeCol, nodeRow + 1, sum);
  if (nodeCol + 1 < column) dfs(nodeCol + 1, nodeRow, sum + 1);
  if (nodeCol - 1 >= 0) dfs(nodeCol - 1, nodeRow, sum + 1);
  //   check[nodeRow][nodeCol] = false;
};

for (let i = 0; i < column; i++) {
  if (graph[0][i] === 'c') dfs(i, 0);
  check = Array.from(new Array(row), () => new Array(column).fill(false));
}

console.log(answer);
if (!answer.length) console.log(-1);
else console.log(Math.min(...answer));
