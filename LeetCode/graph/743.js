//743. Network Delay Time

const networkDelayTime = (times, N, K) => {
  const graph = {};
  const totalCost = [];
  for (const x of times) {
    const [from, to, cost] = x;
    if (graph[from]) graph[from].push({ to, cost });
    else graph[from] = [{ to, cost }];
  }

  const go = (from, count = 0, before) => {
    if (!graph[from] || !graph[from].length) {
      if (count) totalCost.push(count);
      return;
    }
    const nodes = graph[from];
    while (nodes.length) {
      const { to, cost } = graph[from].pop();
      if (to === before) {
        totalCost.push(count);
      } else {
        go(to, count + cost, from);
      }
    }
  };
  go(K);
  console.log(totalCost);
  return totalCost.length ? Math.max(...totalCost) : -1;
};

console.log(
  networkDelayTime(
    [
      [1, 2, 1],
      [2, 3, 2],
      [1, 3, 2],
    ],
    3,
    1
  )
);
