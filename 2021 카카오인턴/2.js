function solution(places) {
  var answer = [];
  for (let place of places) {
    const seats = place.map((v) => v.split(''));
    let res = true;
    for (let i = 0; i < seats.length; i++) {
      for (let j = 0; j < seats[i].length; j++) {
        if (seats[i][j] !== 'P') continue;
        res = bfs(seats, i, j);
        if (!res) break;
      }
      if (!res) break;
    }
    if (res) answer.push(1);
    else answer.push(0);
  }
  return answer;
}

const bfs = (seats, locationX, locationY) => {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const visited = new Array(5).fill().map((v) => new Array(5).fill(false));
  const q = [[locationX, locationY, 0]];
  while (q.length) {
    const [x, y, count] = q.shift();
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nCount = count + 1;
      if (nx < 0 || ny < 0 || nx >= seats.length || ny >= seats[nx].length) continue;
      if (visited[nx][ny]) continue;
      if (nCount > 2) continue;
      if (seats[nx][ny] === 'P') return false;
      if (seats[nx][ny] === 'X') continue;
      q.push([nx, ny, nCount]);
    }
  }
  return true;
};

const data = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPXX', 'OXXXP', 'POOXX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

console.log(solution(data));
