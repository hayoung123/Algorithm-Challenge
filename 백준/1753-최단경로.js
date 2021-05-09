const getMinPath = (arr, checkArr) => {
  let minPath = { cost: 214700000, idx: -1 };
  for (let i = 0; i < arr.length; i++) {
    if (minPath.cost > arr[i] && !checkArr[i]) minPath = { cost: arr[i], idx: i };
  }
  return minPath.idx;
};

//2차원 배열로 만들자.
const makeGraph = (paths, size) => {
  const graph = new Array(size).fill(0).map((v) => new Array(size).fill(214700000));
  for (const [u, v, w] of paths) {
    graph[u - 1][v - 1] = w;
  }
  return graph;
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

  start -= 1; //index로 처리할 것이기 때문에 -1
  let count = 0; //하나의 노드 체크할 때마다 +1
  const end = size - 1; //체크해야될 노드의 개수
  let currNode = start;
  const graph = makeGraph(paths, size);
  const costs = new Array(size).fill(214700000);
  costs[currNode] = 0;
  const check = new Array(size).fill(false); //visited Node 인지 체크해주는 배열
  const minHeap = new MinHeap();

  while (count < end) {
    check[currNode] = true;
    const minPath = getMinPath(graph[currNode], check);

    for (let i = 0; i < size; i++) {
      if (!check[i] && costs[i] > costs[currNode] + graph[currNode][i]) {
        costs[i] = costs[currNode] + graph[currNode][i];
      }
    }

    currNode = minPath;
    count++;
  }
  costs.forEach((v) => {
    if (v === 214700000) console.log('INF');
    else console.log(v);
  });
  rl.close();
  process.exit();
});

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }
  insert(num) {
    //맨 뒤에 값을 넣고 위의 부모와 비교해서 올려준다.
    this.heap.push(num);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);
    while (currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }
  //최소값을 제거하는 메소드
  remove() {
    //1번 인덱스의 최소 값을 smallest에 저장해두고 맨 마지막 값을 그 자리에 넣고 재정렬한다.(아래에서 순서를 바꿔줌)
    const smallest = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;
    let leftChildIdx = currentIdx * 2;
    let rightChildIdx = currentIdx * 2 + 1;

    //왼쪾 자식이 없다면 heap에 1개 뿐이기 때문에 바로 반환
    if (!this.heap[leftChildIdx]) return smallest;
    //오른쪽 자식이 없다면 왼쪽하고만 비교하고 반환
    if (!this.heap[rightChildIdx]) {
      if (this.isSmallThanLeft(leftChildIdx, currentIdx)) {
        this.swap(leftChildIdx, currentIdx);
      }
      return smallest;
    }
    while (
      this.isSmallThanLeft(leftChildIdx, currentIdx) ||
      this.isSmallThanRight(rightChildIdx, currentIdx)
    ) {
      //왼쪽 부터 검사하기 때문에
      //오른쪽 자식이 더 크면 왼쪽 자식하고 바꿔준다.
      if (this.isRightSmallThanLeft(leftChildIdx, rightChildIdx)) {
        this.swap(leftChildIdx, rightChildIdx);
      }
      //왼쪽 자식이 더 작으면 부모와 변경해주기
      if (this.isSmallThanLeft(leftChildIdx, currentIdx)) {
        this.swap(leftChildIdx, currentIdx);
        currentIdx = leftChildIdx;
        //오른쪽 자식이 더 작으면 부모와 변경해주기
      } else if (this.isSmallThanRight(rightChildIdx, currentIdx)) {
        this.swap(rightChildIdx, currentIdx);
        currentIdx = rightChildIdx;
      }

      leftChildIdx = currentIdx * 2;
      rightChildIdx = currentIdx * 2 + 1;
    }
    return smallest;
  }
  swap(firstIdx, secondIdx) {
    [this.heap[firstIdx], this.heap[secondIdx]] = [this.heap[secondIdx], this.heap[firstIdx]];
  }
  isRightSmallThanLeft(leftChildIdx, rightChildIdx) {
    return this.heap[leftChildIdx], this.heap[rightChildIdx];
  }
  isSmallThanLeft(leftChildIdx, currentIdx) {
    return this.heap[leftChildIdx] < this.heap[currentIdx];
  }
  isSmallThanRight(rightChildIdx, currentIdx) {
    return this.heap[rightChildIdx] < this.heap[currentIdx];
  }
}
