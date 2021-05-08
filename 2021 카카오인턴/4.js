function solution(n, start, end, roads, traps) {
  var answer = 0;
  return answer;
}

const makeGraph = (roads) => {
  const graph = {};
  for (const [u, v, w] of roads) {
    if (graph[u]) graph[u].push({ v, w });
    else graph[u] = [{ v, w }];
  }
  return graph;
};
