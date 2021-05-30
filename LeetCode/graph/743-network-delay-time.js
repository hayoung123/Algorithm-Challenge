const insertHeap = (heap, node) => {
  heap.push(node);
  let curr = heap.length - 1;
  let parent = Math.floor(curr / 2);

  while (curr > 1) {
    if (heap[curr].w >= heap[parent].w) return;
    [heap[curr], heap[parent]] = [heap[parent], heap[curr]];
    curr = parent;
    parent = Math.floor(curr / 2);
  }
};

const removeHeap = (heap) => {
  if (heap.length === 2) return heap.pop();
  const min = heap[1];
  heap[1] = heap.pop();
  let curr = 1;
  while (curr < heap.length) {
    let smallIdx = null;
    const left = curr * 2;
    const right = curr * 2 + 1;
    //빈 객체로 초기화 해주는 이유는 undefined < 10 같이 undefined로 대소비교를 할 경우
    //false를 반환하기 때문이다.
    const leftNode = heap[left] || {};
    const rightNode = heap[right] || {};
    if (leftNode.w < heap[curr].w) smallIdx = left;
    if (!smallIdx && rightNode.w < heap[curr].w) smallIdx = right;
    if (smallIdx && rightNode.w < leftNode.w) smallIdx = right;
    if (!smallIdx) break;
    [heap[curr], heap[smallIdx]] = [heap[smallIdx], heap[curr]];
    curr = smallIdx;
  }
  return min;
};

const networkDelayTime = (times, n, k) => {
  const graph = {};
  for (const [u, v, w] of times) {
    if (u in graph) graph[u].push({ v, w });
    else graph[u] = [{ v, w }];
  }
  const costs = new Array(n + 1).fill(Infinity);
  costs[0] = 0;
  costs[k] = 0;
  const heap = [null, { v: k, w: 0 }];
  while (heap.length > 1) {
    const { v: minV, w: minW } = removeHeap(heap);

    if (!graph[minV]) continue;

    for (const { v, w } of graph[minV]) {
      const newCost = costs[minV] + w;
      if (newCost < costs[v]) {
        costs[v] = newCost;
        insertHeap(heap, { v, w });
      }
    }
  }
  return Math.max(...costs) === Infinity ? -1 : Math.max(...costs);
};

networkDelayTime(
  [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  4,
  2
);
