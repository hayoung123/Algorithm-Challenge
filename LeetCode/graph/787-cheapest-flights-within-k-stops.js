/*
다익스트라 같다고 무조건 heap으로 해결하려면 안되는 문제.
또한 dfs로 해결하려고 했지만 뭔가 이상했다. bfs로만 해결됐는데 나만 이러는 건지...
둘의 차이를 정확하게 알필요가 있다. 
너무 어렵고 다음에 다시 풀어보자는 마음으로 넘어간다. 
*/
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = {};
  for (const [u, v, w] of flights) {
    if (u in graph) graph[u].push({ v, w });
    else graph[u] = [{ v, w }];
  }

  const costs = new Array(n).fill(Infinity);
  costs[src] = 0;

  const heap = [{ v: src, w: 0, cnt: k + 1 }];

  while (heap.length) {
    const min = heap.shift();

    if (min.cnt <= 0) continue;

    if (!graph[min.v]) continue;

    for (const node of graph[min.v]) {
      const newCost = min.w + node.w;
      if (costs[node.v] > newCost) {
        costs[node.v] = newCost;
        const newNode = { v: node.v, w: newCost, cnt: min.cnt - 1 };
        heap.push(newNode);
      }
    }
  }
  return costs[dst] === Infinity ? -1 : costs[dst];
};

console.log(
  findCheapestPrice(
    13,
    [
      [11, 12, 74],
      [1, 8, 91],
      [4, 6, 13],
      [7, 6, 39],
      [5, 12, 8],
      [0, 12, 54],
      [8, 4, 32],
      [0, 11, 4],
      [4, 0, 91],
      [11, 7, 64],
      [6, 3, 88],
      [8, 5, 80],
      [11, 10, 91],
      [10, 0, 60],
      [8, 7, 92],
      [12, 6, 78],
      [6, 2, 8],
      [4, 3, 54],
      [3, 11, 76],
      [3, 12, 23],
      [11, 6, 79],
      [6, 12, 36],
      [2, 11, 100],
      [2, 5, 49],
      [7, 0, 17],
      [5, 8, 95],
      [3, 9, 98],
      [8, 10, 61],
      [2, 12, 38],
      [5, 7, 58],
      [9, 4, 37],
      [8, 6, 79],
      [9, 0, 1],
      [2, 3, 12],
      [7, 10, 7],
      [12, 10, 52],
      [7, 2, 68],
      [12, 2, 100],
      [6, 9, 53],
      [7, 4, 90],
      [0, 5, 43],
      [11, 2, 52],
      [11, 8, 50],
      [12, 4, 38],
      [7, 9, 94],
      [2, 7, 38],
      [3, 7, 88],
      [9, 12, 20],
      [12, 0, 26],
      [10, 5, 38],
      [12, 8, 50],
      [0, 2, 77],
      [11, 0, 13],
      [9, 10, 76],
      [2, 6, 67],
      [5, 6, 34],
      [9, 7, 62],
      [5, 3, 67],
    ],
    10,
    1,
    10
  )
);
