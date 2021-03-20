const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const graph = [];
  for await (const line of rl) {
    graph.push(line.split(' ').map((v) => v * 1));
  }
  rl.close();
  const [column, row] = graph.shift();
  const total = setTotal(graph);
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      total[i][j] = total[i][j] + Math.max(total[i - 1][j], total[i][j - 1]);
    }
  }
  console.log(total[row - 1][column - 1]);
  process.exit();
})();

const setTotal = (graph) => {
  const total = graph;
  for (let i = 0; i < total[0].length; i++) {
    if (i - 1 >= 0) total[0][i] = total[0][i] + total[0][i - 1];
  }
  for (let i = 0; i < total.length; i++) {
    if (i - 1 >= 0) total[i][0] = total[i][0] + total[i - 1][0];
  }
  return total;
};
