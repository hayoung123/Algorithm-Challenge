// // /*
// // 1차시도 최소 힙은 신경 쓰지 말고 일단 구현해보자.
// // 메모리 초과?? 뭐지
// // */
// // /*
// // const getMinPath = (arr, checkArr) => {
// //   let minPath = { cost: 214700000, idx: -1 };

// //   for (let i = 0; i < arr.length; i++) {
// //     if (minPath.cost > arr[i] && !checkArr[i]) minPath = { cost: arr[i], idx: i };
// //   }
// //   return minPath.idx;
// // };

// // //2차원 배열로 만들자.
// // const makeGraph = (paths, size) => {
// //   const graph = new Array(size).fill(0).map((v) => new Array(size).fill(214700000));
// //   for (const [u, v, w] of paths) {
// //     graph[u - 1][v - 1] = w;
// //   }
// //   return graph;
// // };

// // const dijkstra = (size, start, paths) => {
// //   start--;
// //   let count = 0; //하나의 노드 체크할 때마다 +1
// //   const end = size - 1; //체크해야될 노드의 개수
// //   let currNode = start;
// //   const graph = makeGraph(paths, size);
// //   const costs = new Array(size).fill(214700000);
// //   costs[currNode] = 0;
// //   const check = new Array(size).fill(false);

// //   while (count < end) {
// //     check[currNode] = true;
// //     const minPath = getMinPath(graph[currNode], check);

// //     for (let i = 0; i < size; i++) {
// //       if (!check[i] && costs[i] > costs[currNode] + graph[currNode][i]) {
// //         costs[i] = costs[currNode] + graph[currNode][i];
// //       }
// //     }

// //     currNode = minPath;
// //     count++;
// //   }
// //   costs.forEach((v) => {
// //     if (v === 214700000) console.log('INF');
// //     else console.log(v);
// //   });
// // };
// // */
// // const v = 5; //노드
// // const e = 6; //간선
// // const start = 1;
// // //[u,v,w] u->v w가중치
// // const paths = [
// //   [5, 1, 1],
// //   [1, 2, 2],
// //   [1, 3, 3],
// //   [1, 3, 3],
// //   [2, 3, 4],
// //   [2, 4, 5],
// //   [3, 4, 6],
// // ];
// // // dijkstra(v, start, paths);

// // /*
// // 최소 힙을 이용해서 풀어보자.
// // */
// // class Node {
// //   constructor(vertex, weight) {
// //     this.vertex = vertex;
// //     this.weight = weight;
// //   }
// // }

// // const heapInsert = (heap, node) => {
// //   heap.push(node);
// //   let currIdx = heap.length - 1;
// //   let parentIdx = Math.floor(currIdx / 2);
// //   while (currIdx > 1 && heap[parentIdx].weight > heap[currIdx].weight) {
// //     [heap[currIdx], heap[parentIdx]] = [heap[parentIdx], heap[currIdx]]; //swap
// //     currIdx = parentIdx;
// //     parentIdx = Math.floor(currIdx / 2);
// //   }
// // };
// // //{vertex,weight}
// // const heapPop = (heap) => {
// //   if (heap.length === 2) return heap.pop();
// //   const minNode = heap[1];
// //   heap[1] = heap.pop();
// //   let currIdx = 1;
// //   let leftIdx = currIdx * 2;
// //   let rightIdx = currIdx * 2 + 1;

// //   if (!heap[leftIdx]) return minNode;
// //   if (!heap[rightIdx]) {
// //     if (heap[leftIdx].weight < heap[currIdx].weight) {
// //       [heap[leftIdx], heap[currIdx]] = [heap[currIdx], heap[leftIdx]]; //swap
// //     }
// //     return minNode;
// //   }
// //   while (
// //     heap[currIdx].weight > heap[leftIdx].weight ||
// //     heap[currIdx].weight > heap[rightIdx].weight
// //   ) {
// //     if (heap[leftIdx].weight > heap[rightIdx].weight) {
// //       [heap[leftIdx], heap[rightIdx]] = [heap[rightIdx], heap[leftIdx]];
// //     }

// //     if (heap[currIdx].weight > heap[leftIdx].weight) {
// //       [heap[leftIdx], heap[currIdx]] = [heap[currIdx], heap[leftIdx]];
// //       currIdx = leftIdx;
// //     } else if (heap[currIdx].weight > heap[rightIdx].weight) {
// //       [heap[rightIdx], heap[currIdx]] = [heap[currIdx], heap[rightIdx]];
// //       currIdx = rightIdx;
// //     }

// //     leftIdx = currIdx * 2;
// //     rightIdx = currIdx * 2 + 1;
// //   }
// //   return minNode;
// // };

// // const makeGraph = (size, paths) => {
// //   const graph = Array.from(Array(size), () => new Array());

// //   for (const [u, v, w] of paths) {
// //     graph[u - 1].push({ vertex: v - 1, weight: w });
// //   }
// //   return graph;
// // };

// // const dijkstraHeap = (v, start, paths) => {
// //   start--;
// //   const graph = makeGraph(v, paths);
// //   const cost = new Array(v).fill(Infinity);
// //   cost[start] = 0;
// //   const heap = [null]; //최소힙
// //   heapInsert(heap, { vertex: start, weight: 0 });

// //   while (heap.length > 1) {
// //     const min = heapPop(heap);

// //     if (cost[min.vertex] < min.weight) continue;
// //     if (graph[min.vertex].length === 0) continue;

// //     for (const node of graph[min.vertex]) {
// //       if (cost[node.vertex] > cost[min.vertex] + node.weight) {
// //         cost[node.vertex] = cost[min.vertex] + node.weight;
// //         heapInsert(heap, node);
// //       }
// //     }
// //   }
// //   cost.forEach((v) => {
// //     if (v === Infinity) console.log('INF');
// //     else console.log(v);
// //   });
// // };

// // dijkstraHeap(v, start, paths);

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [size, _] = input
//     .shift()
//     .split(' ')
//     .map((v) => v * 1);
// let start = input.shift() * 1 - 1;
// const paths = input.map((v) => v.split(' ').map((v) => v * 1));

// const heapInsert = (heap, node) => {
//   heap.push(node);
//   let currIdx = heap.length - 1;
//   let parentIdx = Math.floor(currIdx / 2);
//   while (currIdx > 1 && heap[parentIdx].weight > heap[currIdx].weight) {
//     [heap[currIdx], heap[parentIdx]] = [heap[parentIdx], heap[currIdx]]; //swap
//     currIdx = parentIdx;
//     parentIdx = Math.floor(currIdx / 2);
//   }
// };
// //{vertex,weight}
// const heapPop = (heap) => {
//   if (heap.length === 2) return heap.pop();
//   const minNode = heap[1];
//   heap[1] = heap.pop();
//   let currIdx = 1;
//   let leftIdx = currIdx * 2;
//   let rightIdx = currIdx * 2 + 1;

//   if (!heap[leftIdx]) return minNode;
//   if (!heap[rightIdx]) {
//     if (heap[leftIdx].weight < heap[currIdx].weight) {
//       [heap[leftIdx], heap[currIdx]] = [heap[currIdx], heap[leftIdx]]; //swap
//     }
//     return minNode;
//   }
//   while (
//     heap[currIdx].weight > heap[leftIdx].weight ||
//     heap[currIdx].weight > heap[rightIdx].weight
//   ) {
//     if (heap[leftIdx].weight > heap[rightIdx].weight) {
//       [heap[leftIdx], heap[rightIdx]] = [heap[rightIdx], heap[leftIdx]];
//     }

//     if (heap[currIdx].weight > heap[leftIdx].weight) {
//       [heap[leftIdx], heap[currIdx]] = [heap[currIdx], heap[leftIdx]];
//       currIdx = leftIdx;
//     } else if (heap[currIdx].weight > heap[rightIdx].weight) {
//       [heap[rightIdx], heap[currIdx]] = [heap[currIdx], heap[rightIdx]];
//       currIdx = rightIdx;
//     }

//     leftIdx = currIdx * 2;
//     rightIdx = currIdx * 2 + 1;
//   }
//   return minNode;
// };

// const makeGraph = (size, paths) => {
//   const graph = Array.from(Array(size), () => new Array());

//   for (const [u, v, w] of paths) {
//     graph[u - 1].push({ vertex: v - 1, weight: w });
//   }
//   return graph;
// };

// const dijkstraHeap = (v, start, paths) => {
//   start--;
//   const graph = makeGraph(v, paths);
//   const cost = new Array(v).fill(Infinity);
//   cost[start] = 0;
//   const heap = [null]; //최소힙
//   heapInsert(heap, { vertex: start, weight: 0 });

//   while (heap.length > 1) {
//     const min = heapPop(heap);

//     if (cost[min.vertex] < min.weight) continue;
//     if (graph[min.vertex].length === 0) continue;

//     for (const node of graph[min.vertex]) {
//       if (cost[node.vertex] > cost[min.vertex] + node.weight) {
//         cost[node.vertex] = cost[min.vertex] + node.weight;
//         heapInsert(heap, node);
//       }
//     }
//   }
//   cost.forEach((v) => {
//     if (v === Infinity) console.log('INF');
//     else console.log(v);
//   });
// };

// dijkstraHeap(v, start, paths);

class Node {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

const heapInsert = (heap, node) => {
  heap.push(node);
  let currIdx = heap.length - 1;
  let parentIdx = Math.floor(currIdx / 2);
  while (currIdx > 1 && heap[parentIdx].weight > heap[currIdx].weight) {
    [heap[currIdx], heap[parentIdx]] = [heap[parentIdx], heap[currIdx]]; //swap
    currIdx = parentIdx;
    parentIdx = Math.floor(currIdx / 2);
  }
};

const heapPop = (heap) => {
  if (heap.length === 2) return heap.pop();
  const minNode = heap[1];
  heap[1] = heap.pop();
  let currIdx = 1;
  let leftIdx = currIdx * 2;
  let rightIdx = currIdx * 2 + 1;

  if (!heap[leftIdx]) return minNode;
  if (!heap[rightIdx]) {
    if (heap[leftIdx].weight < heap[currIdx].weight) {
      [heap[leftIdx], heap[currIdx]] = [heap[currIdx], heap[leftIdx]]; //swap
    }
    return minNode;
  }
  while (
    heap[currIdx].weight > heap[leftIdx].weight ||
    heap[currIdx].weight > heap[rightIdx].weight
  ) {
    if (heap[leftIdx].weight > heap[rightIdx].weight) {
      [heap[leftIdx], heap[rightIdx]] = [heap[rightIdx], heap[leftIdx]];
    }

    if (heap[currIdx].weight > heap[leftIdx].weight) {
      [heap[leftIdx], heap[currIdx]] = [heap[currIdx], heap[leftIdx]];
      currIdx = leftIdx;
    } else if (heap[currIdx].weight > heap[rightIdx].weight) {
      [heap[rightIdx], heap[currIdx]] = [heap[currIdx], heap[rightIdx]];
      currIdx = rightIdx;
    }

    leftIdx = currIdx * 2;
    rightIdx = currIdx * 2 + 1;
  }
  return minNode;
};

const makeGraph = (size, paths) => {
  const graph = Array.from(Array(size), () => new Array());

  for (const [u, v, w] of paths) {
    graph[u - 1].push(new Node(v - 1, w));
  }

  return graph;
};

const dijkstraHeap = (v, start, paths) => {
  start--;
  const graph = makeGraph(v, paths);
  const cost = new Array(v).fill(Infinity);
  cost[start] = 0;
  const heap = [null];
  heapInsert(heap, new Node(start, 0));

  while (heap.length > 1) {
    const min = heapPop(heap);

    if (cost[min.vertex] < min.weight) continue;
    if (graph[min.vertex].length === 0) continue;

    for (const node of graph[min.vertex]) {
      if (cost[node.vertex] > cost[min.vertex] + node.weight) {
        cost[node.vertex] = cost[min.vertex] + node.weight;
        heapInsert(heap, node);
      }
    }
  }
  for (const v of cost) {
    if (v === Infinity) console.log('INF');
    else console.log(v);
  }
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [size, _] = input
    .shift()
    .split(' ')
    .map((v) => v * 1);
  let start = input.shift() * 1;
  const paths = input.map((v) => v.split(' ').map((v) => v * 1));

  dijkstraHeap(size, start, paths);
  rl.close();
  process.exit();
});
