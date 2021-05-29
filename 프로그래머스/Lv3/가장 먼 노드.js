/*
다익스트라로 해결할 수 있었다. 가중치가 없기 때문에 heap을 사용할 필요가 없었다.
*/
function solution(n, edge) {
  const graph = {};
  for (const [start, end] of edge) {
    if (start in graph) graph[start].push(end);
    else graph[start] = [end];
    if (end in graph) graph[end].push(start);
    else graph[end] = [start];
  }
  const cost = new Array(n + 1).fill().map((v) => Infinity);
  cost[0] = 0;
  cost[1] = 0;
  const q = [1];
  while (q.length) {
    const node = q.shift();
    if (!graph[node]) continue;
    for (const x of graph[node]) {
      if (!cost[x] || cost[x] <= cost[node] + 1) continue;
      cost[x] = cost[node] + 1;
      q.push(x);
    }
  }

  const max = Math.max(...cost);
  return cost.filter((v) => v === max).length;
}
