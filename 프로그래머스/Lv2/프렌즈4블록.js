function solution(m, n, board) {
  board = board.map((v) => v.split(""));
  var answer = 0;
  while (true) {
    let indexSet = new Set();
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const startIndex = [i, j];
        if (board[i][j] === 0) continue;
        else if (checkSquare(board, startIndex)) {
          getSquareIndex(indexSet, startIndex);
        }
      }
    }
    if (indexSet.size === 0) break;
    else answer += indexSet.size;

    indexSet.forEach((v) => {
      const [row, col] = v.split("&");
      board[row][col] = 0;
    });

    indexSet.clear();

    board = reorderBoard(m, n, board);
  }
  return answer;
}

function checkSquare(board, startIndex) {
  const [row, col] = startIndex;
  return (
    board[row][col] === board[row + 1][col] &&
    board[row][col] === board[row][col + 1] &&
    board[row][col] === board[row + 1][col + 1]
  );
}
function getSquareIndex(indexSet, startIndex) {
  const [row, col] = startIndex;
  indexSet.add(`${row}&${col}`);
  indexSet.add(`${row + 1}&${col}`);
  indexSet.add(`${row}&${col + 1}`);
  indexSet.add(`${row + 1}&${col + 1}`);
  return indexSet;
}

function reorderBoard(m, n, board) {
  let newBoard = Array.from({ length: m }, () => new Array(n));
  const tmpBoard = [];
  for (let col = 0; col < n; col++) {
    let colArr = [];
    for (let row = 0; row < m; row++) {
      if (board[row][col] !== 0) colArr.push(board[row][col]);
    }
    while (colArr.length !== m) {
      colArr.unshift(0);
    }
    tmpBoard.push(colArr);
  }
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      newBoard[col][row] = tmpBoard[row][col];
    }
  }
  return newBoard;
}

// const k = ["ABCD", "BACE", "BCDD", "BCDD"];
// const k = ["AAAAA", "AUUUA", "AUUAA", "AAAAA"];

// console.log(solution(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]));
console.log(
  solution(10, 12, [
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
    "AAAAAAAAAABB",
  ])
);
// console.log(solution(6, 2, ["DD", "CC", "AA", "AA", "CC", "DD"]));
// console.log(solution(8, 2, ["FF", "AA", "CC", "AA", "AA", "CC", "DD", "FF"]));
// console.log(solution(6, 2, ["AA", "AA", "CC", "AA", "AA", "DD"]));
