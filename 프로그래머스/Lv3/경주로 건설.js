/*
1차시도: 큐와 다익스트라로직을 사용했다. (힙은사용하지 않았다.) 
이게 그러면 안되더라
BFS는 왜안될까???? 그 이유에 대해 생각해봐야겠다. 
2차시도: shift하던걸 pop으로 dfs로하니까 됐다. 
근데 해결하지 못한 예시가 있었다. 
[
    [0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
  ]
답: 3400
해결하는데 겁나오래걸렸다.
*/
function solution(board) {
  const len = board.length;
  const costs = new Array(len).fill().map((v) => new Array(len));
  costs[0][0] = 0;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const q = [{ x: 0, y: 0, isVertical: 'init' }];

  while (q.length) {
    const { x, y, isVertical } = q.pop();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nIsVertical = nx !== x;
      let plusMoney;
      if (isVertical === 'init') plusMoney = 100;
      else if (isVertical === nIsVertical) plusMoney = 100;
      else plusMoney = 600;
      if (nx < 0 || ny < 0 || nx >= len || ny >= len) continue;
      if (board[nx][ny] === 1) continue;
      if (costs[nx][ny] < costs[x][y] + plusMoney) continue;
      costs[nx][ny] = costs[x][y] + plusMoney;
      q.push({ x: nx, y: ny, isVertical: nIsVertical });
    }
  }

  return costs[len - 1][len - 1];
}
/*
x축먼저일때, y축먼저일 때 각각을 해주면 된다.
*/
function solution1(board) {
  const answer = [];
  answer.push(dfs(board, [1, -1, 0, 0], [0, 0, 1, -1]));
  answer.push(dfs(board, [0, 0, 1, -1], [1, -1, 0, 0]));
  return Math.min(...answer);
}

const dfs = (board, dx, dy) => {
  const len = board.length;
  const costs = new Array(len).fill().map((v) => new Array(len));
  costs[0][0] = 0;
  const q = [{ x: 0, y: 0, isVertical: 'init' }];

  while (q.length) {
    const { x, y, isVertical } = q.pop();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nIsVertical = nx !== x;
      let plusMoney;
      if (isVertical === 'init') plusMoney = 100;
      else if (isVertical === nIsVertical) plusMoney = 100;
      else plusMoney = 600;
      if (nx < 0 || ny < 0 || nx >= len || ny >= len) continue;
      if (board[nx][ny] === 1) continue;
      if (costs[nx][ny] < costs[x][y] + plusMoney) continue;
      costs[nx][ny] = costs[x][y] + plusMoney;
      q.push({ x: nx, y: ny, isVertical: nIsVertical });
    }
  }
  return costs[len - 1][len - 1];
};

/*
빨리 해결할 수 있었을 것 같았는데 아쉽다.
BFS로 왜 안되는지 생각해봐야겠다.
그림으로 그리면서 하면 이해가 쉬웠다.
*/
