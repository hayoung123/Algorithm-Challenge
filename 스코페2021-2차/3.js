// // Run by Node.js
// const readline = require('readline');

// (async () => {
//   let rl = readline.createInterface({ input: process.stdin });
//   const input = [];
//   for await (const line of rl) {
//     input.push(line);
//     rl.close();
//   }
//   const [total, relationNum] = input.split(' ').map((v) => v * 1);

//   const relations = input.slice(0, relationNum);
//   const check = input.slice(relationNum);
//   const graph = makeGraph(relations);

//   process.exit();
// })();

const makeGraph = (relations) => {
  const graph = {};
  relations.forEach((v) => {
    const [up, down] = v.split(' ');
    if (!graph[up]) graph[up] = [down];
    else graph[up].push(down);
  });
  return graph;
};

const isChildNode = (graph, parent, child) => {
  let answer = false;
  const dfs = (arr) => {
    if (!arr || !arr.length) return;
    for (const node of arr) {
      if (node === child) {
        answer = true;
        break;
      }
      dfs(graph[node]);
    }
  };
  dfs(graph[parent]);
  return answer;
};

const input = ['6 6', '6 4', '6 5', '4 1', '4 2', '4 3', '1 4', '4 1', '6 5', '1 6', '6 3', '4 3'];

const [total, relationNum] = input
  .shift()
  .split(' ')
  .map((v) => v * 1);

const relations = input.slice(0, relationNum - 1);
const check = input.slice(relationNum - 1);
const graph = makeGraph(relations);
check.forEach((v) => {
  const [parent, child] = v.split(' ');
  if (isChildNode(graph, parent, child)) console.log('yes');
  else console.log('no');
});
