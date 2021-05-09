// // Run by Node.js
// const readline = require('readline');

// (async () => {
//   let rl = readline.createInterface({ input: process.stdin });
//   const input = [];
//   for await (const line of rl) {
//     input.push(line);
//   }
//   rl.close();
//   const cityNumber = input.shift();
//   const data = input.map((v) => {
//     const [from, to, cost] = v.split('');
//     return { from, to, cost };
//   });

//   const cityGraph = makeGraph(data);
//   const startPoint = data[0].from;
//   const totalCost = [];
//   const dfs = (from, cityCount = 0, sum = 0) => {
//     if (cityCount === cityNumber && from !== startPoint) return;
//     if (cityCount === cityNumber && from === startPoint) {
//       totalcost.push(sum);
//       return;
//     }
//     for (const cityInfo of cityGraph[from]) {
//       dfs(cityInfo.city, cityCount + 1, sum + cityInfo.cost);
//     }
//   };
//   console.log(Math.min(totalCost));

//   process.exit();
// })();

const makeGraph = (data) => {
  const graph = {};
  data.forEach(({ from, to, cost }) => {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];
    graph[from].push({ city: to, cost });
    graph[to].push({ city: from, cost });
  });
  return graph;
};

const input = [
  6,
  'seoul beijing 3',
  'beijing hawaii 10',
  'seoul tokyo 4',
  'seoul hawaii 6',
  'tokyo hawaii 5',
  'beijing tokyo 5',
];
input.shift();
const data = input.map((v) => {
  const [from, to, cost] = v.split(' ');
  return { from, to, cost: parseInt(cost) };
});
const citySet = new Set(data.map((v) => v.from));
const cityGraph = makeGraph(data);
const startPoint = data[0].from;
const totalCost = [];
const dfs = (from, cityCount = 0, sum = 0) => {
  if (cityCount === citySet.size && from !== startPoint) return;
  if (cityCount === citySet.size && from === startPoint) {
    totalCost.push(sum);
    return;
  }
  for (const cityInfo of cityGraph[from]) {
    dfs(cityInfo.city, cityCount + 1, sum + cityInfo.cost);
  }
};

dfs(startPoint);

console.log(Math.min(...totalCost));
