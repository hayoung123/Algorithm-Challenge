//743. Network Delay Time

const networkDelayTime = (times, N, K) => {
  const graph = {};
  const totalCost = [];
  for (const x of times) {
    const [from, to, cost] = x;
    if (graph[from]) graph[from].push({ to, cost });
    else graph[from] = [{ to, cost }];
  }
};

const parser = (data, n) => {
  const INF = Infinity;
  const graph = Array.from(new Array(n), () => new Array(n).fill(INF));
  graph.
};

parser(
  [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  4
);

const graph = times,n 