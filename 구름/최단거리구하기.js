const solution = (n, path) => {
  const graph = new Array(n).fill().map((v) => new Array(n).fill(Infinity));
  const visited = new Array(n).fill().map((v) => new Array(n).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const q = [[0, 0]];
  graph[0][0] = 1;
  while (q.length) {
    const [x, y] = q.shift();
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n && !visited[nx][ny] && path[nx][ny] === 1) {
        graph[nx][ny] = Math.min(graph[nx][ny], graph[x][y] + 1);
        q.push([nx, ny]);
      }
    }
  }
  return graph[n - 1][n - 1];
};

const path = [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1],
];

console.log(solution(5, path));
